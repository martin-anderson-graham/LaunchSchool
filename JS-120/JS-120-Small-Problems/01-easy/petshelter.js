/* eslint-disable max-len */
class Pet {
  constructor(type, name) {
    this.type = type;
    this.name = name;
  }
}

class Owner {
  constructor(name) {
    this.name = name;
    this.pets = [];
  }
  addPet(pet) {
    this.pets.push(pet);
  }
  numberOfPets() {
    return this.pets.length;
  }
  getName() {
    return this.name;
  }
}

class Shelter {
  constructor() {
    this.adoptionListByOwner = {};
  }

  adopt(owner, pet) {
    owner.addPet(pet);
    this.adoptionListByOwner[owner.getName()] = this.adoptionListByOwner[owner.getName()] || {ownerName:owner.getName(), petList:[]};
    this.adoptionListByOwner[owner.getName()].petList.push(pet);
  }

  printAdoptions() {
    Object.values(this.adoptionListByOwner).forEach( aList => {
      console.log(`${aList.ownerName} has adopted the following pets:`);
      aList.petList.forEach( pet => {
        console.log(`a ${pet.type} named ${pet.name}`);
      });
      console.log('');
    });
  }
}

let butterscotch = new Pet('cat', 'Butterscotch');
let pudding      = new Pet('cat', 'Pudding');
let darwin       = new Pet('bearded dragon', 'Darwin');
let kennedy      = new Pet('dog', 'Kennedy');
let sweetie      = new Pet('parakeet', 'Sweetie Pie');
let molly        = new Pet('dog', 'Molly');
let chester      = new Pet('fish', 'Chester');

let phanson = new Owner('P Hanson');
let bholmes = new Owner('B Holmes');

let shelter = new Shelter();
shelter.adopt(phanson, butterscotch);
shelter.adopt(phanson, pudding);
shelter.adopt(phanson, darwin);
shelter.adopt(bholmes, kennedy);
shelter.adopt(bholmes, sweetie);
shelter.adopt(bholmes, molly);
shelter.adopt(bholmes, chester);
shelter.printAdoptions();
console.log(`${phanson.name} has ${phanson.numberOfPets()} adopted pets.`);
console.log(`${bholmes.name} has ${bholmes.numberOfPets()} adopted pets.`);

//output to be logged
/*
P Hanson has adopted the following pets:
a cat named Butterscotch
a cat named Pudding
a bearded dragon named Darwin

B Holmes has adopted the following pets:
a dog named Molly
a parakeet named Sweetie Pie
a dog named Kennedy
a fish named Chester

P Hanson has 3 adopted pets.
B Holmes has 4 adopted pets.
*/