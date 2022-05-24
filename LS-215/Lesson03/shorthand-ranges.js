function expandRange(str) {
  let values = str.split(', ').map(ele => {
    let matches = ele.split(/\-|\:|\.{2}/g);
    if (matches) return matches;
    return [ele]
  });

  let result = [];

  values.forEach((rangeArr) => {
    addRangeToArr(rangeArr, result);
  });

  return result;
}

function addRangeToArr(rangeArr, resultArr) {
  let [start, end] = getStartAndEndOfRange(rangeArr, resultArr);
  // console.log(start, end);
  for (let i = start; i <= end; i += 1) {
    resultArr.push(i);
  }

}

function getStartAndEndOfRange(rangeArr, resultArr) {
  let lastElement = resultArr[resultArr.length - 1] || Number(rangeArr[0]);
  let lastElementLength = String(lastElement).length;

  let result = [];

  rangeArr.forEach((ele, index) => {
    let val = ele;
    if (String(ele).length < lastElementLength) {
      val = String(lastElement).slice(0, lastElementLength - String(ele).length) + String(val);
    }
    //check element against previous number in rangeArr
    let previousValue = Number(result[index - 1]) || Number(val);
    if (Number(val) < previousValue) {
      let prefix = String(lastElement).slice(0, lastElementLength - String(ele).length);
      let newPrefix = Number(prefix) + 1;
      val = String(newPrefix) + String(ele);
    } else if (Number(val) < Number(resultArr[resultArr.length - 1])) {   //check element against final array
      let previousElement = resultArr[resultArr.length - 1];
      let prefix = String(previousElement).slice(0, String(previousElement).length - String(ele).length);
      let newPrefix = Number(prefix) + 1;
      val = String(newPrefix) + String(ele);
    }

    result.push(Number(val));
  });

  return [result[0], result[result.length - 1]];
}



/*
Problem
- input a string range separated by commas
- output an array of numbers
- rules
    - the numbers in the array are strictly increasing
    - only the significant part of subsequent numbers are included
    - ranges can be separated by -, :, ..
    - ranges can include three values

Examples and test-cases
*/
let tests = [
  expandRange("1, 3, 7, 2, 4, 1"), //1, 3, 7, 12, 14, 21
  expandRange("1-3, 1-2"), //1, 2, 3, 11, 12
  expandRange("1:5:2"), //1, 2, 3, 4, 5, 6, ... 12
  expandRange("104-2"), //104, 105, ... 112
  expandRange("104-02"), //104, 105, ... 202
  expandRange("545, 64:11") //545, 564, 565, .. 611
]

tests.forEach(ele => console.log(ele));
/*
Data structures
- input 2d array - split input string into an array, split each element on possible separators
- output - an array

algorithms
- split input string using ',' and then regex of the three separators -:..
- push the first element of the first array into the result array
- iterate through the input array 
  - if an element is an array of length more than 1
      - expand the range into the result array
          - determine the starting and ending values of the range
              - check if the beginning/end values have the same number of digits as the last element of the result array
                - if not, append leading digits as necessary
              - if the end value is smaller than the starting value increment the leading digits  
          - push the entire range into the result array 
  - otherwise push the number into the 

*/