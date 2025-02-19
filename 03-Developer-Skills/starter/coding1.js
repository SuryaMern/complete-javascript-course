// Coding Challenge #1

/*
Given an array of forecasted maximum temperatures, the thermometer displays a string with these temperatures.

Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."

Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.

Use the problem-solving framework: Understand the problem and break it up into sub-problems!

TEST DATA 1: [17, 21, 23]
TEST DATA 2: [12, 5, -5, 0, 4]
*/

//solution
/* const test1 = [17, 21, 23];
console.log(
  `...${test1[0]}C in 1 days ... ${test1[1]}C in 2 days ... ${test1[2]}C in 3 days ...`
);

const printForecast = function (arr) {
  let str = '';
  for (i = 0; i < arr.length; i++) {
    str = str + `${arr[i]}C in ${i + 1} days ... `;
  }
  return '...' + str;
};
console.log(printForecast([17, 21, 23])); */
