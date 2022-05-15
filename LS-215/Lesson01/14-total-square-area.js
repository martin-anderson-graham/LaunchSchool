let rectangles = [[3, 4], [6, 6], [1, 8], [9, 9], [2, 2]];

function totalArea(rectangleArray) {
  return rectangleArray.reduce( (total, ele) => {
    return total + ele[0]*ele[1];
  }, 0);
}

console.log(
  totalArea(rectangles)    // 141
);

function totalSquareArea(rectangleArray) {
  let squareArray = rectangleArray.filter( (rec) => {
    return rec[0] === rec[1];
  });

  return totalArea(squareArray);
}
console.log(
  totalSquareArea(rectangles)    // 121
);