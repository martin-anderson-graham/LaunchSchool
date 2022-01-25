let myProtoObj = {
  foo: 1,
  bar: 2,
};

let myObj = Object.create(myProtoObj);

myObj.qux = 3;

//they will not, as let key in myObj returns prototype keys
//while Object.keys(myObj) only own keys