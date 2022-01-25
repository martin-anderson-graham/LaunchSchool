// In the previous exercise, we had a situation where an anonymous method passed to map had an undesirable execution context. We solved the problem by taking advantage of lexical scoping and introducing a new variable self. Solve the same problem again by passing a hard-bound anonymous function to map.


let franchise = {
  name: 'How to Train Your Dragon',
  allMovies: function() {
    let callBack = function(number) {
      return this.name + ' ' + number;
    }.bind(this);
    return [1, 2, 3].map(callBack);
  },
};

console.log(franchise.allMovies());