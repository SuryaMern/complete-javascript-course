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

let fname = 'surya';
function first() {
  let a = 1;
  var b = second();

  a = a + b;

  return a;
}

console.log(first());
function second() {
  var c = 2;
  return c;
}
console.log(second());

console.log(fname);
