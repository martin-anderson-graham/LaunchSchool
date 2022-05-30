function likeOrDislike(arr) {
  let state = 'Nothing';

  state = arr.reduce( (st, ele) => {
    if(st === ele) {
      return 'Nothing';
    } else {
      return ele;
    }
  }, 'Nothing');

  return state;
}

/*
problem
- an input array of strings - 'Like' or 'Dislike'
- a string - 'Dislike', 'Nothing', 'Like'
examples - test cases*/

let tests = [

  likeOrDislike([]), //'Nothing'

  likeOrDislike(["Dislike"]), // "Dislike"

  likeOrDislike(["Like", "Like"]), // "Nothing"
  
  likeOrDislike(["Dislike", "Like"]), // "Like"
  
  likeOrDislike(["Like", "Dislike", "Dislike"]), // "Nothing"

]

tests.forEach( ele => console.log(ele));

/*
data structure
- use the input array

algorithm
- set the initial state of the button to 'Nothing'
- set the button state to the reduced input array
  - if ele matches current state set state to nothing
  - else set state to current value

*/