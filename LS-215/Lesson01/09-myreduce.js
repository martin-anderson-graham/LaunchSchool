function myReduce(array, func, initial) {
  let startingIndex = 0;
  let accumulator = initial;
  if(initial === undefined) {
    accumulator = array[startingIndex];
    startingIndex += 1;
  }

  for (let i = startingIndex; i < array.length; i += 1) {
    accumulator = func(accumulator, array[i]);
  }

  console.log(accumulator);
  return accumulator;
}

let smallest = (result, value) => (result <= value ? result : value);
let sum = (result, value) => result + value;

myReduce([5, 12, 15, 1, 6], smallest);           // 1
myReduce([5, 12, 15, 1, 6], sum, 10);            // 49

function longestWord(words) {
  return myReduce(words, longest);
}

function longest(result, currentWord) {
  return currentWord.length >= result.length ? currentWord : result;
}

longestWord(['abc', 'launch', 'targets', '']);      // "targets"