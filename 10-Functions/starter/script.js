'use strict';

//Default Parameters

/* const bookings = [];
function checkBooking(flightNum, numPassenger = 1, price = 300 * numPassenger) {
  const booking = {
    flightNum,
    numPassenger,
    price,
  };
  console.log(booking);
  bookings.push(booking);
}
checkBooking('LH123', 2, 400);
checkBooking('LH123'); */

//How passing Arguments works: value vs reference
//primitive vs non-primitive(value vs reference)
//Inside function primitive value only contains a copy so that the reason it wont manipulate into a new value
//Inside function we pass object means we can manipulate the value bcoz they both are the same object in memory heap

/* const flight = 'LH123';
const Surya = {
  fname: 'surya',
  passport: 284984394,
};

function checkIn(flightNum, passenger) {
  flightNum = 'LY485';

  passenger.fname = 'Mr.' + passenger.fname;
  if (passenger.passport === 284984394) {
    console.log('Correct One!');
  } else {
    console.log('Wrong!');
  }
}
checkIn(flight, Surya);
console.log(flight);
console.log(Surya); */

/* const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 1000000000);
};
newPassport(Surya);
newPassport(Surya);
checkIn(flight, Surya); */

//Higher Order Function
/* 
const add = function () {
  console.log('Hi Surya!');
};
document.body.addEventListener('click', add); */

//Function Returing a Function

/* const add = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}!`);
  };
};
const wish = add('Hi');
wish('Surya');
wish('Naveen'); */

// Fat arrow function using return another arrow function
/* const greetArr = greeting => name => console.log(`${greeting} ${name}`);
greetArr('Hi')('Surya'); */

//THIS CALL APPLY BIND METHOD IN JAVASCRIPT

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

//Immediately Invoked function Expression
//It will Execute only once
/* const runOnce = function () {
  console.log('this is surya');
};
runOnce();
runOnce();

(function () {
  console.log('this is surya');
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
  inner(); */
