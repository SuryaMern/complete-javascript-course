'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
/* const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300]; */

/////////////////////////////////////////////////

//ARRAY METHODS
//1.SLICE Methods

// const add = ['a', 'b', 'c', 'd', 'e'];
/* console.log(add.slice(2));
console.log(add.slice(2, 4));
console.log(add.slice(-2));
console.log(add.slice(-1));
console.log(add.slice(1, -1)); */

//2.SPLICE METHOD
// const add = ["f","g","h","i","j"]
// console.log(add.splice(1, 3));
// console.log(add.splice(2));
// console.log(add);

// 3.REVERSE METHOD
//it doesn't mutate
/* const wish = [5, 4, 3, 2, 1];
console.log(wish.reverse());
console.log(wish); */

// 4.CONCAT METHOD

/* const a = ['a', 'b', 'c', 'd', 'e', 'f'];
const b = ['g', 'h', 'i', 'j', 'k', 'l'];

console.log(a.concat(b));
console.log([...a, ...b]); //Spread operator */

//5.JOIN METHOD
/* const add = [1, 2, 3, 4, 5];
const wish = [6, 7, 8, 9, 10];
console.log(add.concat(wish)); */

// 6.AT METHOD
/* const add = [1, 2, 45, 742, 225, 521, 456];
console.log(add.at(0));
console.log(add[0]); //we can use this one or above one both will give same result
console.log(add[add.length - 1]);
console.log(add.at(-1)); */

//FOR EACH METHOD IN ARRAY
//first one current element of array
//second one is index value of array
//third one is total array
/* const movements = [423, -134, 248, -284, 954, 353, -345, 483, -356];

for (const movement of movements) {
  if (movement > 0) {
    console.log(`You Deposited ${movement}`);
  } else {
    console.log(`You withdraw ${Math.abs(movement)}`);
  }
}

console.log('---ForEach Method---');
movements.forEach(function (move) {
  if (move > 0) {
    console.log(`You Deposited ${move}`);
  } else {
    console.log(`You withdraw ${Math.abs(move)}`);
  }
}); */

//0:function(423)
//1:function(134)
//2:function(248)

/* const statements = [
  245, -567, 2536, -356, 858, -596, -229, 602, 938, -682, 562, -285, 592, -359,
  483, -693,
];

for (const [state, statement] of statements.entries()) {
  if (statement > 0) {
    console.log(`Movement ${state + 1}: You Deposited ${statement}`);
  } else {
    console.log(`Movement ${state + 1}:  you withdraw ${Math.abs(statement)}`);
  }
}

console.log('------forEach-------');

statements.forEach(function (state, i, arr) {
  if (state > 0) {
    console.log(`Movement ${i + 1}: you deposited ${state}`);
  } else {
    console.log(`Movement ${i + 1}: you withdraw ${Math.abs(state)}`);
  }
}); */

//FOR EACH METHOD WITH MAPS AND SETS

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

/* currencies.forEach(function (value, key, arr) {
  console.log(`${key}: ${value}`);
}); */

//SETS IN FOREACH

/* const order = new Set(['USD', 'GBR', 'USD', 'ESR', 'RCB', 'GBR']);
console.log(order);

order.forEach(function (value, _, arr) {
  console.log(`${value}: ${value}`);
}); */
