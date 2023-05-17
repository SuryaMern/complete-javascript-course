'use strict';

/* function Restuarant(menu, numPerson, price) {
  const customers = {
    menu,
    numPerson,
    price,
  };
  console.log(customers);
}
Restuarant('idly', 1, 20); */

//primitive vs non-primitive(value vs reference)
//Inside function primitive value only contains a copy so that the reason it wont manipulate into a new value
//Inside function we pass object means we can manipulate the value bcoz same memory heap

/* const Restuarant = 'The Spicy Hut';
const Hotel = {
  name: 'A2B',
  branchNo: 20,
};

function check(restuarantName, HotelName) {
  restuarantName = 'The Spicy Restuarant';
  HotelName.branchNo = 21;
}
check(Restuarant, Hotel);
console.log(Restuarant);
console.log(Hotel); */

//Higher Order Function

/* const add = function () {
  console.log('Hi Surya!');
};
document.body.addEventListener('click', add); */

//Function returing a function
/* function add(name) {
  return function (Greet) {
    console.log(`${name} ${Greet}!`);
  };
}
const wish = add('Surya');
wish('Hi');
wish('Hello');
add('Gowtham')('Hello'); */

// Fat arrow function using return another arrow function
/* const greetArr = greeting => name => console.log(`${greeting} ${name}`);
greetArr('Hi')('Surya'); */

//THIS CALL APPLY BIND METHOD

//This Method
//Its refers to a current object
/* const emp = {
  empid: 101,
  empname: 'Modi',
  printMethod(empHometown, empAge) {
    console.log(`${this.empid} ${this.empname}`, empHometown, empAge);
  },
};
emp.printMethod('Gujarth', 74);

//Call Method
//we can use another object function with CALL method

const wish = {
  empid: 102,
  empname: 'Surya',
};
emp.printMethod.call(wish, 'Salem', 25);

//Apply Method
//its same like call method but here we need to use second passing arguments array
const greet = {
  empid: 103,
  empname: 'krish',
};
emp.printMethod.apply(wish, ['Bangalore', 24]);

//bind method give the copy and we can invoke later
let printMyName = emp.printMethod.bind(wish, 'Salem', 45);
console.log(printMyName);
printMyName(); */

//Immediately invoking function expression
/* (function () {
  console.log('It will only execute once');
})(); */

//CLOSURES
//Closure is just a internal property of a function
/* function outer() {
  let number = 0;
  return function () {
    number++;
    console.log(number);
  };
}
let inner = outer();
inner();
inner();
 */

/* function add() {
  let one = 10;
  return function () {
    one++;
    console.log(one);
  };
}
let wish = add();
wish();
wish();
wish(); */

function outer() {
  let a = 10;
  function inner() {
    console.log(a);
  }
  return inner();
}

outer();
