let mixin = {
  ancestors() {
    let result = [];
    let obj = this;
    while (obj !== Object.prototype) {
      let proto = Object.getPrototypeOf(obj);
      if (proto.name) {
        result.push(proto.name);
      } else {
        result.push(proto);
      }
      obj = proto;
    }
    console.log(result);
    return result;
  }
};


Object.assign(Object.prototype, mixin);

// name property added to make objects easier to identify
let foo = { name: 'foo' };
let bar = Object.create(foo);
bar.name = 'bar';
let baz = Object.create(bar);
baz.name = 'baz';
let qux = Object.create(baz);
qux.name = 'qux';

qux.ancestors();  // returns ['baz', 'bar', 'foo', 'Object.prototype']
baz.ancestors();  // returns ['bar', 'foo', 'Object.prototype']
bar.ancestors();  // returns ['foo', 'Object.prototype']
console.log(foo.ancestors()[0]);  // returns ['Object.prototype']