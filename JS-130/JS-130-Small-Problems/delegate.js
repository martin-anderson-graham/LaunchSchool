function delegate(obj, fnName, ...args) {
  return function () {
    return obj[fnName].apply(obj, args);
  };
}

let foo = {
  name: 'test',
  bar: function (greeting) {
    console.log(greeting + ' ' + this.name);
  },
};

let baz = {
  qux: delegate(foo, 'bar', 'hello'),
};

baz.qux();   // logs 'hello test';

foo.bar = function () {
  console.log('changed');
};

baz.qux();          // logs 'changed'