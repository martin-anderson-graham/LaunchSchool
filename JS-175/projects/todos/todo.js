const express = require("express");
const morgan = require("morgan");
const flash = require("express-flash");
const session = require("express-session");
const store = require("connect-loki");
const { body, validationResult } = require("express-validator");
const { sortTodos, sortTodoLists } = require('./lib/sort');

const app = express();
const host = "localhost";
const port = 3002;
const LokiStore = store(session);




//let todoLists = require("./lib/seed-data");


const loadTodoList = (id, todoLists) => {
  return todoLists.find(tdl => tdl.id === id);
};


const newTodoListValidatorArray = [
  //too short or too long title
  body("todoListTitle")
    .trim()
    .isLength({ min: 1 })
    .withMessage("You must include a title")
    .bail()
    .isLength({ max: 100 })
    .withMessage("Your title is too long")
    .custom((title, { req }) => {
      let todoLists = req.session.todoLists;
      let duplicate = todoLists.find(list => list.title === title);
      return duplicate === undefined;
    })
    .withMessage("You cannot add a duplicate title")

]

const newTodoValidatorArray = [
  body("todoTitle")
    .trim()
    .isLength({ min: 1 })
    .withMessage("You must include a title")
    .bail()
    .isLength({ max: 100 })
    .withMessage("Your title is too long")

]

const verifyValidTodoListId = (req, res, next) => {
  if (!req.session.todoLists.find(td => td.id === Number(req.params.todoListId))) {
    throw new Error("TodoList not found.");
  } else {
    next();
  }
};

const verifyValidTodo = (req, res, next) => {
  let todoListId = Number(req.params.todoListId);
  let todoId = Number(req.params.todoId);

  let todoList = req.session.todoLists.find(tdl => tdl.id === todoListId);

  if (!todoList.findById(todoId)) {
    throw new Error("That todo does not exist");
  } else {
    next();
  }
};

const TodoList = require("./lib/todolist");
const Todo = require("./lib/todo");

app.set("views", "./views");
app.set("view engine", "pug");

app.use(morgan("common"));
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));

app.use(session({
  cookie: {
    httpOnly: true,
    maxAge: 31 * 24 * 60 * 60 * 1000, // 31 days in millseconds
    path: "/",
    secure: false,
  },
  name: "launch-school-todos-session-id",
  resave: false,
  saveUninitialized: true,
  secret: "this is not very secure",
  store: new LokiStore(),
}));

app.use((req, res, next) => {
  let todoLists = [];
  if ("todoLists" in req.session) {
    req.session.todoLists.forEach(todoList => {
      todoLists.push(TodoList.makeTodoList(todoList));
    });
  }

  req.session.todoLists = todoLists;
  next();
});

app.use(flash());

//storing flash is res.locals so they persist through redirects and all renders
app.use((req, res, next) => {
  res.locals.flash = req.session.flash;
  delete req.session.flash;
  next();
});

app.get("/", (req, res) => {
  res.redirect("/lists");
});

app.get("/lists/new", (req, res) => {
  res.render("new-list");
});

app.get("/lists", (req, res) => {
  res.render("lists", {
    todoLists: sortTodoLists(req.session.todoLists),
  });
});

app.post("/lists", newTodoListValidatorArray,
  (req, res, next) => {
    let errors = validationResult(req);
    if (!errors.isEmpty()) {
      errors.array().forEach(err => req.flash("error", err.msg));
      res.render("new-list", {
        flash: req.flash(),
        todoListTitle: req.body.todoListTitle,

      });
    } else {
      next();
    }
  },
  (req, res) => {
    let title = req.body.todoListTitle.trim();
    req.session.todoLists.push(new TodoList(title));
    req.flash("success", "The todo list has been created");
    res.redirect("/lists");
  });


app.post("/lists/:todoListId/todos/:todoId/toggle", verifyValidTodo,

  (req, res) => {
    let todoListId = Number(req.params.todoListId);
    let todoId = Number(req.params.todoId);

    let todo = req.session.todoLists.find(tdl => tdl.id === todoListId).findById(todoId);

    if (todo.isDone()) {
      req.flash("success", `"${todo.title}" marked undone.`);
      todo.markUndone();
    } else {
      req.flash("success", `"${todo.title}" marked done.`);
      todo.markDone();
    }

    res.redirect(`/lists/${todoListId}`);

  });

app.post("/lists/:todoListId/todos/:todoId/destroy", verifyValidTodo,
  (req, res) => {
    let todoListId = Number(req.params.todoListId);
    let todoId = Number(req.params.todoId);

    let todo = req.session.todoLists.find(tdl => tdl.id === todoListId).findById(todoId);
    let todoList = req.session.todoLists.find(tdl => tdl.id === todoListId);
    let todoIndex = todoList.findIndexOf(todo);

    todoList.removeAt(todoIndex);


    req.flash("success", `Deleted "${todo.title}"`);

    res.redirect(`/lists/${todoListId}`);
  });

app.post("/lists/:todoListId/complete_all", verifyValidTodoListId,
  (req, res) => {
    let todoListId = Number(req.params.todoListId);
    let todoList = req.session.todoLists.find(tdl => tdl.id === todoListId);

    todoList.markAllDone();

    req.flash("success", "All todos marked as done.  Yay!");

    res.redirect(`/lists/${todoListId}`);

  });

app.post("/lists/:todoListId/todos", verifyValidTodoListId, newTodoValidatorArray,

  //error handler
  (req, res, next) => {
    let errors = validationResult(req);
    if (!errors.isEmpty()) {
      errors.array().forEach(err => req.flash("error", err.msg));
      let currentTodoList = loadTodoList(Number(req.params.todoListId), req.session.todoLists);
      res.render(`list`, {
        flash: req.flash(),
        todoTitle: req.body.todoTitle,
        todoList: currentTodoList,
        todos: sortTodos(currentTodoList)
      });
    } else {
      next();
    }
  },

  (req, res) => {
    let todoListId = Number(req.params.todoListId);
    let todoList = loadTodoList(todoListId, req.session.todoLists);
    let title = req.body.todoTitle;
    todoList.add(new Todo(title));
    req.flash("success", `"${title}" added to ${todoList.title}`);
    res.redirect(`/lists/${todoListId}`);
  });

app.get("/lists/:todoListId", verifyValidTodoListId,
  (req, res) => {
    let todoListID = Number(req.params.todoListId);
    let currentTodoList = req.session.todoLists.find(td => td.id === todoListID);
    res.render("list", {
      todoList: currentTodoList,
      todos: sortTodos(currentTodoList),
    });
  });
app.get("/lists/:todoListId/edit", verifyValidTodoListId,

  (req, res) => {
    let todoList = loadTodoList(Number(req.params.todoListId), req.session.todoLists);
    res.render("edit-list", {
      todoList: todoList,
    });
  });

app.post("/lists/:todoListId/edit",
  newTodoListValidatorArray,
  verifyValidTodoListId,

  (req, res, next) => {
    let todoListId = Number(req.params.todoListId);
    let todoList = loadTodoList(todoListId, req.session.todoLists);

    let errors = validationResult(req);
    if (!errors.isEmpty()) {
      errors.array().forEach(err => req.flash("error", err.msg));
      res.render("edit-list", {
        flash: req.flash(),
        todoList: todoList,
        todoListTitle: req.params.todoListTitle
      });
    } else {
      next();
    }
  },

  (req, res) => {
    let todoListId = Number(req.params.todoListId);
    let title = req.body.todoListTitle;
    let todoList = loadTodoList(todoListId, req.session.todoLists);
    
    req.flash("success", `Renamed ${todoList.title} to ${title}`)
    
    todoList.setTitle(title);
    res.redirect(`/lists/${todoListId}`);
  });

app.post("/lists/:todoListId/destroy", verifyValidTodoListId,
  (req, res) => {
    let todoListId = Number(req.params.todoListId);
    let todoList = loadTodoList(todoListId, req.session.todoLists);
    req.flash("sucess", `Deleted todolist "${todoList.title}"`);
    todoLists = req.session.todoLists.filter(tdl => tdl !== todoList);

    res.redirect("/lists");
  });

//error handler
app.use((err, req, res, _next) => {
  console.log(err);
  res.status(404).send(err.message);
});

//listener
app.listen(port, host, () => {
  console.log(`Todos is listening on port ${port} of ${host}!`);
});
