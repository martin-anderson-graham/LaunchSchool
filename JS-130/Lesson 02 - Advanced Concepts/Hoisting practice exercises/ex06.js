/* rewrite as if hoisting occurred
Pet.prototype.walk = function() {
  console.log(`${this.name} is walking.`);
};

function Pet(name, image) {
  this.name = name;
  this.image =  image;
}

class Image {
  constructor(file) {
    this.file = file;
  }
}

var catImage = new Image("cat.png");
var pudding = new Pet("Pudding", catImage);
*/
function Pet(name, image) {
  this.name = name;
  this.image =  image;
}
let Image;
var catImage;
var pudding;


Pet.prototype.walk = function() {
  console.log(`${this.name} is walking.`);
};
Image  = class {
  constructor(file) {
    this.file = file;
  }
};

catImage = new Image("cat.png");
pudding = new Pet("Pudding", catImage);