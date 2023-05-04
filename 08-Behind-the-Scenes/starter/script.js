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

//Example 1
/* function add(){
  console.log(x);
}
add()

var x =10
const z =20
let y = 30 */
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

//Temporal dead zone

/* const myName = 'jonas';
const job = 'teacher';
if (myName === 'jonas') {
  console.log(`jonas is a ${job}`);
  const age = 2023 - 1998;
  console.log(age);
  // const job = 'teacher';
  // console.log(x);
} */

//Hoisting
/* console.log(me);
console.log(job);
console.log(year);

var me = 'jonas';
let job = 'teacher';
const year = 2023;
 */

//This keyword
/* function add(birthYear) {
  const age = 2023 - birthYear;
  console.log(age);
  console.log(this);
}
add(1998); */

/* console.log(this);
//This keyword with arrow function
const add = birthYear => {
  const age = 2023 - birthYear;
  // console.log(age);
  console.log(this);
};
add(1998); */

//Ex1
// The this Keyword in Practice
/* console.log(this);

const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this);
};
calcAge(1991);

const calcAgeArrow = birthYear => {
  console.log(2037 - birthYear);
  console.log(this);
};
calcAgeArrow(1980);

const jonas = {
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
};
jonas.calcAge();

const matilda = {
  year: 2017,
};

matilda.calcAge = jonas.calcAge;
matilda.calcAge();

const f = jonas.calcAge;
f(); */

//Hoisting
//Using variables
/* console.log(me);
console.log(job);
console.log(year);

var me = 'surya'; //will get undefined
let job = 'developer'; //will get undefined
const year = 1998; //will get undefined */

//Using Function Declarations
//Using function declaration we can access variable before initialization
/* add();
function add(Message) {
  console.log(Message);
}
add("Hello"); */

//using function Expression
//In function expression we cannot access before initialization
/* add(); //in this case will get error
let add = function (message) {
  console.log(message);
};
add('Hello'); */

//using fat arrow function
//In fat arrow function we cannot access before initialization
/* add('hello');in this case will get error
let add = message => {
  console.log(message);
};
add("Hello") */

//Example
/* console.log(numProducts);
if (!numProducts) deleteShoppingCart();
var numProducts = 10;

function deleteShoppingCart() {
  console.log('All products Deleted');
} */

//Example
/* var x = 1; //using var means it will create an properties in window object
let y = 2; //do not create an properties in window object
const z = 3; //do not create an properties in window object


console.log(x === window.x); //will get true
console.log(y === window.y); //will get false
console.log(z === window.z); //will get false */

//THis keyword with Examples
/* var surya = {
  firstName: 'selvam',
  year: 1970,
  calcAge: function () {
    console.log(this);
    console.log(2023 - this.year);
  },
};
surya.calcAge(); */

/* const jonas = {
  firstName: 'surya',
  year: 1998,
  calcAge: function () {
    console.log(this.year);
    console.log(2037 - this.year);
  },
  greet: () => {
    console.log(this);
    console.log(this.firstName);
  },
};
jonas.greet();
greet.call(jonas); */

/* const person = {
  FirstName: 'surya',
  year: 1998,
  calcAge: function () {
    console.log(`Hey ${this.FirstName} and his age is ${this.age}`);
    const self = this;
    const isMillenial = function () {
      console.log(self.year >= 1981 && self.year <= 1996);
    };
    isMillenial();
  },
};
person.calcAge() */

//Lexical scoping
/* function add() {
  let a = 10;
  console.log(a + b);
  function wish() {
    let b = 20;
  }
  wish();
}
add(); */

//primitive vs non-primitive object
/* const age = 20;
console.log('Age is:', age); */

//Primitive
/* let age = 20;
let oldAge = age;
age = 21;
console.log(age);
console.log(oldAge); */

//Non primitive
/* const emp = {
  fname: 'surya',
  age: 25,
};
const friend = emp;
friend.age = 26;
console.log(friend);
console.log(emp); */

//Primitive vs object in practice

//Primitive types
/* let lastName = 'surya';
let oldLastName = lastName;
lastName = 'Selvam';
console.log(lastName, oldLastName); */

//Reference types
/* const employee = {
  empId: 101,
  empName: 'surya',
  empAge: 25,
};
const newEmployee = employee;
newEmployee.empName = 'krish';
console.log('employee:', employee);
console.log('newEmployee:', newEmployee); */

//copying the object
//Example 1
/* let emp = {
  empId: 191,
  empName: 'surya',
  empAge: 25,
};
let newEmp = Object.assign({}, emp);
newEmp.empName = 'krish';
console.log('Before:', emp);
console.log('After:', newEmp); */

//Example2

/* let emp = {
  empId: 191,
  empName: 'surya',
  empAge: 25,
  family: ['selvam', 'sumathi'],
};
let newEmp = Object.assign({}, emp);
newEmp.empName = 'krish';
newEmp.family.push('saranya');
console.log('Before:', emp);
console.log('After:', newEmp);
 */
