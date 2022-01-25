/* eslint-disable max-lines-per-function */
let binarySearch = (arr, val) => {
  let toSearch = arr.slice();
  let currentIndex = parseInt(arr.length / 2, 10);
  let offset = 0;
  while (toSearch.length > 0) {
    if (toSearch[currentIndex] === val) {
      console.log(currentIndex + offset);
      return currentIndex + offset;
    } else if (toSearch[currentIndex] > val) {
      toSearch = toSearch.slice(0, currentIndex);
      currentIndex = parseInt(toSearch.length / 2, 10);
    } else {
      toSearch = toSearch.slice(currentIndex + 1);
      offset += currentIndex + 1;
      currentIndex = parseInt(toSearch.length / 2, 10);
    }
  }
  console.log(-1);
  return -1;
};

let yellowPages = ['Apple Store', 'Bags Galore', 'Bike Store', 'Donuts R Us', 'Eat a Lot', 'Good Food', 'Pasta Place', 'Pizzeria', 'Tiki Lounge', 'Zooper'];
binarySearch(yellowPages, 'Pizzeria');                   // 7
binarySearch(yellowPages, 'Apple Store');                // 0

binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 77);    // -1
binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 89);    // 7
binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 5);     // 1

binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Peter');  // -1
binarySearch(['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'], 'Tyler');  // 6