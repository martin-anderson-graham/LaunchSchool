let words = [
  'laboratory',
  'experiment',
  'flab',
  'Pans Labyrinth',
  'elaborate',
  'polar bear',
];

let allMatches = (arr, regex) =>{
  return arr.filter( element => regex.test(element));
}

console.log(allMatches(words, /lab/)); // => ['laboratory', 'flab', 'elaborate']