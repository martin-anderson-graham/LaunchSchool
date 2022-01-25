// Read the following code carefully.
//What do you think is logged on line 7. Try to answer the question before
//you run the code.

let person = {
  firstName: 'Rick ',
  lastName: 'Sanchez',
  fullName: this.firstName + this.lastName,
};

console.log(person.fullName);

/*
This should log 'Rick Sanchez' WRONG

NaN - this is only bound to the non-global object inside a function!
*/