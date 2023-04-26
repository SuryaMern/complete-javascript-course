'use strict';

/* const a = 'surya';
// first();

/* function first() {
  const b = 'hi';
  second();
  function second() {
    const c = 'hello';
    third();
  }
} */
/* 
function third() {
  const d = 'Hey';
  console.log(a + b + c + d);
}  */

/* let arr = [1, 2, 3, 4, 5];
console.log(arr.at(6)); */

/* let fname = 'surya';
function first() {
  let a = 1;
  var b = second();

  a = a + b;

  return a;
} */

//Global scope
/* const me = "surya"
const job = "developer"
const year = 1989 */
// we can access outside function or block scoper
//variables declared in global scoper are accessible everywhere

//function scope
/* function calcAge(birthYear) {
  const now = 2023;
  const age = now - birthYear;
  return age;
}
console.log(now);//will get reference error */
//variables only accessed inside function cannot accese outside

//block scope
/* 
if(year>1981 && year<=1996){
  const millenial = true
  const food= "avocado toast"
}
console.log(millenial);//Reference error */
//variables only access inside, outside we cannot access variables
//only applied let and const

// scope Example
//Ex1
/* function CalcAge(birthYear) {
  const age = 2023 - birthYear;
  const firstName = 'surya';
  console.log(firstName);
  return age;
}

console.log(CalcAge(1998)); */

//Ex2

/* function calcAge(birthYear) {
  const age = 2023 - birthYear;
  console.log(age);
  function printAge() {
    console.log(firstName);
    if (birthYear >= 1981 && birthYear <= 1996) {
      const str = `oh you are a millenial ${firstName}`;
      console.log(str);
      function add(x) {
        return x;
      }
      console.log(add(20));
    } else {
      const firstName = 'ajith';
      const str1 = `you are not a millenial ${firstName}`;
      console.log(str1);
      function add(x) {
        return x;
      }
      console.log(add(20));
    }
  }
  printAge();
  return age;
}
const firstName = 'surya';
console.log(calcAge(1998));
 */

/* var a = 20;
var a = 30;
a = 40;
console.log(a);

let x = 40;
x = 30;
console.log(x);

const b = 60;
console.log(b); */
