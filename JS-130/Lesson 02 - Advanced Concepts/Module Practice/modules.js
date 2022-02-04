let myName = "bob";

function sayName() {
  console.log(myName);
}

function changeName(newName) {
  myName = newName;
}

module.exports = {
  sayName,
  changeName,
};