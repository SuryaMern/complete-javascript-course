// Remember, we're gonna use strict mode in all scripts now!
'use strict';

/* const x = '10';
console.log(x);
console.log(x);

if (0 == '0') {
  console.log('hi');
}

const calcAge = birthYear => 2023 - birthYear;
console.log(calcAge(1998));

if (true == 1) {
  console.log('hi');
} */

const calcTempAmplified = function (temp) {
  let max = temp[0];
  for (let i = 0; i < temp.length; i++) {
    if (temp[i] > max) max = temp[i];
  }
  return max;
};
console.log(calcTempAmplified(1, 3, 4));
