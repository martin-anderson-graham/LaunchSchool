/* eslint-disable max-lines-per-function */
/* eslint-disable max-len */
function createStudent(name, year) {
  return {
    name: name,
    year: year,
    courses: [],

    info() {
      console.log(`${this.name} is a ${this.year} year student`);
    },

    listCourses() {
      console.log(this.courses);
    },

    addCourse(courseObj) {
      this.courses.push(courseObj);
    },

    addNote(courseNumber, noteText) {
      let currentCourse = this.courses.find(course => course.code === courseNumber);
      if (currentCourse) {
        if (!currentCourse.notes) {
          currentCourse.notes = [];
        }
        currentCourse.notes.push(noteText);
      }
    },

    viewNotes() {
      this.courses.filter(course => course.notes)
        .forEach(course => {
          console.log(`${course.name}: ${course.notes.join('; ')}`);
        });
    },

    updateNote(courseNumber, noteText) {
      let currentCourse = this.courses.find(course => course.code === courseNumber);
      if (currentCourse) {
        currentCourse.notes = [noteText];
      }
    }
  };
}

let foo = createStudent('Foo', '1st');
foo.info();
// "Foo is a 1st year student"
foo.listCourses();
// [];
foo.addCourse({ name: 'Math', code: 101 });
foo.addCourse({ name: 'Advanced Math', code: 102 });
foo.listCourses();
// [{ name: 'Math', code: 101 }, { name: 'Advanced Math', code: 102 }]
foo.addNote(101, 'Fun course');
foo.addNote(101, 'Remember to study for algebra');
// foo.viewNotes();
// "Math: Fun course; Remember to study for algebra"
foo.addNote(102, 'Difficult subject');
// foo.viewNotes();
// "Math: Fun course; Remember to study for algebra"
// "Advance Math: Difficult subject"
foo.updateNote(101, 'Fun course');
// foo.viewNotes();
// "Math: Fun course"
// "Advanced Math: Difficult subject"
foo.updateNote(300,'hi');
foo.viewNotes();