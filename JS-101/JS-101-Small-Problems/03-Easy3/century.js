/*Write a function that takes a year as input and returns the century.
The return value should be a string that begins with the century number,
and ends with 'st', 'nd', 'rd', or 'th' as appropriate for that number.

New centuries begin in years that end with 01. So, the years 1901 - 2000
comprise the 20th century.
*/

let century = (year) => {
  let yearArray = year.toString().split('');
  let centuryVal = 1;
  //adjust for years ending in zero
  if (yearArray[yearArray.length - 1] === '0') {
    centuryVal -= 1;
  }
  yearArray.pop();
  yearArray.pop();
  centuryVal += Number(yearArray.join(''));

  let centuryString = centuryVal.toString();

  let endings = ['th', 'st', 'nd', 'rd', 'th', 'th', 'th', 'th', 'th', 'th', 'th'];

  if (centuryVal % 100 >= 10 && centuryVal % 100 <= 19) {
    centuryString += 'th';
  } else {
    centuryString += endings[centuryString[centuryString.length - 1]];
  }

  console.log(centuryString);
  return centuryString;
};

century(2000);        // "20th"
century(2001);        // "21st"
century(1965);        // "20th"
century(256);         // "3rd"
century(5);           // "1st"
century(10103);       // "102nd"
century(1052);        // "11th"
century(1127);        // "12th"
century(11201);       // "113th"