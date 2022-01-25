//Convert the person object into a nested array nestedPerson, containing the same key-value pairs.


let person = {
  title: 'Duke',
  name: 'Nukem',
  age: 33
};

// Expected output:
// [['title', 'Duke'], ['name', 'Nukem'], ['age', 33]]

let nestedPerson = [];

for (let entries of Object.entries(person)) {
  nestedPerson.push(entries);
}


nestedPerson.forEach( (val) => console.log(val));