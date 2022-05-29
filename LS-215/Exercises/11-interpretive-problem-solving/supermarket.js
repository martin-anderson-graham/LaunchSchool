function queueTime(arr, val) {
  let queue = arr.slice();
  let checkouts = new Array(val).fill(0);
  let total = 0;
  
  while(!isFinished(queue, checkouts)) {
    checkouts.forEach( (ele, index) => {
      if(queue.length > 0 && ele === 0) {
        checkouts[index] = queue.shift();
      }
    });

    decrementAll(checkouts);
    total += 1;
  }

  return total;
}

function decrementAll(arr) {
  arr.forEach( (ele, index) => {
    if(ele > 0) {
      arr[index]--;
    }
  })
}

function isFinished(queueArr, checkoutsArr) {
  return queueArr.length === 0 && checkoutsArr.every(ele => ele === 0);
}

/*
problem
- an array of integers, representing the amount of time a customer needs to check out
- n - the number of checkout tills

examples*/

let tests = [
  queueTime([5,3,4], 1),
// should return 12
// because when there is 1 till, the total time is just the sum of the times

queueTime([10,2,3,3], 2),
// should return 10
// because here n=2 and the 2nd, 3rd, and 4th people in the
// queue finish before the 1st person has finished.

queueTime([2,3,10], 2),
// should return 12

queueTime([1, 2, 3, 4], 5), //should return 4

queueTime([], 4), //0

queueTime([1,1,1,1,1,1], 13), //1

];

tests.forEach(ele => console.log(ele));


/*
data structures
- an array of length n (number of checkout tills)


algorithms
- slice the input array (to avoid mutation)
- create an array with length equal to the number of tills.  Populate with zeros
- create a total time variable
- use a while loop
    - loop through the tills - if any have a value of zero then 
       shift an element off of the queue and place it in array
    - decrement every value in the array
    - add one to the total time variable
    - if all elements of the array are 0 and the queue is empty exit the while loop
- return the total time


*/

