//Array Destructuring
//Array Destructuring is a extract an array values into new variables

/* const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
}; */

//Ex 1
/* const [one, second] = restaurant.starterMenu;
console.log(one, second); */

//Ex 2
/* const [a, b] = restaurant.mainMenu;
console.log(a, b); */

//Ex 3
/* const [x, , z] = restaurant.starterMenu;
console.log(x, z); */

//Ex 4
/* const [w, , , z] = restaurant.starterMenu;
console.log(w, z); */

//Ex 5
//Swap the value
/* let [a, b] = restaurant.starterMenu;
[a, b] = [b, a];
console.log(a, b); */

//Practice
//Array Destructuring
//Es5 Methods
/* let numbers = [10, 20, 30, 40, 50];
let a = numbers[0];
let b = numbers[1];
let c = numbers[2];
let d = numbers[3];
let e = numbers[4];
console.log(a, b, c, d, e); */

//Es6 Methods
/* let numbers = [10, 20, 30, 40, 50];
const [a, b, c, d, e] = numbers;
console.log(a, b, c, d, e); */

//Reverse an array
/* let numbers = [10, 20, 30, 40, 50];
let [a, b, c, d, e] = numbers;
[a, b, c, d, e] = [e, d, c, b, a];
console.log(a, b, c, d, e); */

//Nested array
/* let nested = [
  [1, 2],
  [3, 4],
  [5, 6],
];
const [[a, b], [], [e, f]] = nested;
console.log(a, b, e, f); */

/* const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order: function (main, secondary) {
    return [this.starterMenu[main], this.starterMenu[secondary]];
  },
};

const [one, two] = restaurant.order(2, 0);
console.log(one, two); */

/* const nested = [1, 2, [3, 4]];
const [a, b, [c, d]] = nested;
console.log(a, b, c, d); */

/* const add = [1, 2, 3, 4, 5];
const [a, , b, c] = add;
console.log(a, b, c); */

//----------x------------------------------------------------------

//Object Destructuring
//object destructuring means extract an object values into new variables
//Retrive elements from an array into separate variables

//const add = { empId: 101, empName: 'surya', empLoc: 'salem' };
//Es6 Method
/* const { empId, empLoc } = add;
console.log(empId, empLoc); */
//Es5
/* const a = add.empId;
console.log(a); */

/* 
let a = 10;
let b = 20;
const obj = { a: 20, b: 30, c: 50 };
({ a, b } = obj);
console.log(a, b); */
/* 
const obj = {
  id: 101,
  ename: 'surya',
  loc: 'salem',
  hours: {
    open: 10,
    close: 8,
  },
};
/* console.log(obj.id);
console.log(obj.ename);
console.log(obj.loc); */
/* 
const { id: no, ename: elname, loc: eloc, hours: ehours } = obj;
console.log(no, elname, eloc, ehours);

const {
  hours: { open, close },
} = obj;
console.log(open, close); */

/* var x = 0;
function foo() {
  x++;
  this.x = x;
  return foo;
}
var bar = new new foo()();
console.log(bar.x); */

/* var str1 = new String('this is beautiful string');
var index = str1.localeCompare('utiful string');
console.log('Result:' + index); */

/* function outerScope() {
  function innerScope() {
    let number = 20;
  }

  return innerScope;
}
console.log(number);
outerScope(); */

// const arr = [1, 2, 3];
// /* const newArr = [arr[0], arr[1], arr[2], 4, 5];
// // console.log(newArr); */

// const newArr = [...arr, 4, 5];
// console.log(newArr);

/* const add = [1, 2, 3, 4];
const [a, b, , d] = add;
console.log(a, b, d); */

//Using object in spread Operator

/* const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order: function (main, secondary) {
    return [this.starterMenu[main], this.starterMenu[secondary]];
  },
};

const add = { ...restaurant, founder: 'giucippi' };
console.log(add);
console.log(add.name); */

//Using function in spread operator

/* function add(a, b, c) {
  return a + b + c;
}
let numbers = [1, 2, 3];
let wish = add(...numbers);
console.log(wish); */

//Array Math method in spread operator

/* let numbers = [10, 20, 30, 40, 50, 60, 70, 80, 100, 200];
console.log(Math.max(...numbers));
console.log(Math.min(...numbers));
console.log(...numbers); */

/* let arr = [1, 2, 3, 4, 5];
arr[0] = 6;
console.log(arr);
arr.push(10);
console.log(arr); */

//array destrucuring
/* const arr = [1, 2, 3, 4];
const [a, b, c] = arr;
console.log(a, b, c); */

//Array Destrucuring
/* const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order: function (main, secondary) {
    return [this.starterMenu[main], this.starterMenu[secondary]];
  },
};

const [a, b, c] = restaurant.starterMenu;
console.log(typeof a, b, c);

const [x, y, , z] = restaurant.categories;
console.log(x, y, z); */

//Nested array with destructuring
// const add = [1, 2, [3, 4], 5, [6, 7]];
// console.log(add);
// const [a, b, [c, d], e, [f, g]] = add;
// console.log(a, b, c, d, e, f, g);
// const [a, , [b], c, [d]] = add;
// console.log(a, b, c, d);
// console.log(add[0]);
// console.log(add);

// -----------------------------------------------------------------x--------------------------------------------------------------------

//Object Destrucuring
/* const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order: function (main, secondary) {
    return [this.starterMenu[main], this.starterMenu[secondary]];
  },
};

const { categories } = restaurant;
console.log(categories);

const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

const { location: newLocation = [] } = restaurant;

console.log(starters, newLocation); */

// ---------------------------------------------------------------------x-------------------------------------------------------

//SPREAD OPERATOR, Because of right side of assignment Operator(=)
/* let wish = [3, 4, 5, 6];
let add = [1, 2, ...wish];
console.log(add); */

//REST OPERATOR, Because of left side of assignment Operator (=)

/* const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others); */

/* //REST OPERATOR
//Rest operators collect the all the array after the last variable
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order: function (main, secondary) {
    return [this.starterMenu[main], this.starterMenu[secondary]];
  },
};

//Ex1 //Rest operators collect the all the array after the last variable
// const [a, , b, ...others] = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(a, b, others);

//Ex2

// const [a, b, ...others] = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(a, b, others);

//Ex3
// const [a, ...others] = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(a, others);

//Ex4
// const [a, , b, c, , , d, ...others] = [
//   ...restaurant.categories,
//   ...restaurant.starterMenu,
//   ...restaurant.mainMenu,
// ];
// console.log(a, b, c, d, others); */

//Rest Operator Using Function

//Ex1
/* function add(...number) {
  console.log(number);
}
add(193, 283); */

//Ex2
/* function add(...number) {
  let sum = 0;
  for (i = 0; i < number.length; i++) sum = sum + number[i];
  console.log(sum);
}
add(29, 28, 92, 79);

const x = [1, 2, 3];
add(...x); */

//Ex3
/* function add(loan, ...total) {
  let sum = 0;
  for (i = 0; i < total.length; i++) sum += total[i];
  return sum - loan;
}
console.log(
  add(15839, 1100, 3929, 3849, 9593, 5829, 2948, 2871, 5932, 7229, 6812)
); */

//rest parameter indicates an array
/* function orderPizza(main, ...other) {
  console.log(main);
  console.log(other);
}
orderPizza('mashroom'); */

//Nullish operator
/* const a = { duration: 50 };
a.duration ??= 10;
console.log(a.duration);
a.Speed ??= 25;
console.log(a).Speed; */

//-------------------------------------------------------------------x-----------------------------------------------------------------------
//FOR-OF LOOP

/* const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order: function (categories) {
    return categories;
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
 */
//For-OF loop
/* for (let item of menu) {
  console.log(item);
} */

//FOR LOOP
/* for (let i = 0; i < menu.length - 1; i++) {
  console.log(menu[i]);
} */

//Ex1
/* for (const item of menu) {
  console.log(item);
} */

//Ex2
/* for (const item of menu.entries()) {
  console.log(item);
} */

//Ex3
//

/* for (const item of menu.entries()) {
  console.log(`${item[0] + 1}:${item[1]}`);
} */

//Using For loop to create a tables
/* let number = 24;

for (i = 1; i <= 10; i++) {
  console.log(`${number}x${i}=${number * i}`);
} */

//OPTIONAL CHAINING
/* const days = ['sun', 'mon', 'tues', 'wed', 'thurs', 'fri', 'sat'];

for (const day of days) {
  const add = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`on ${day} we open at ${add}`);
}
 */

//Nullish means null or undefined

/* const guest = restaurant.categories ?? 10;
console.log(guest); //OUTPUT [ 'Italian', 'Pizzeria', 'Vegetarian', 'Organic' ] */

//add not exists so will get 10
/* const guest = restaurant.add ?? 10;
console.log(guest); */

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};
/* const [first, second, , four] = restaurant.starterMenu;
console.log(first, second, four); */

//Receive and return values from a function
/* const [main, starter] = restaurant.order(2, 0);
console.log(main, starter); */

//Nested array
/* const nested = [1, 2, [3, 4]];
const [a, b, [c, d]] = nested;
console.log(a, b, c, d); */

//Default Values
/* const [p, q, r = 1] = [4, 7];
console.log(p, q, r); */

/* const [p = 1, q = 1, r = 1] = [];
console.log(p, q, r); */

//

//looping objects keys, values, entries
/* const obj = {
  id: 101,
  fname: 'surya',
  age: 24,
};
for (ob of Object.keys(obj)) {
  console.log(ob);
}

for (ob of Object.values(obj)) {
  console.log(ob);
}

for (ob of Object.entries(obj)) {
  console.log(ob);
} */

//----------------------------------------------------x---------------------------------------------------------------------------
//SETS
/* const wish = new Set([
  'surya',
  'selvam',
  'surya',
  'saranaya',
  'sumathi',
  'thikshu',
  'thikshu',
]);
console.log(wish);
console.log(wish.size);
console.log(wish.has('surya'));
console.log(wish.has('geetha'));
console.log(wish.add('geetha'));
console.log(wish.delete('surya'));
console.log(wish);

const add = ['naveen', 'gowtham', 'naveen', 'logu'];
const ram = [...new Set(add)];
console.log(ram); */

//----------------------------------------------------------------x---------------------------------------------------------------------
//MAPS

/* const wish = new Map();
wish.set('fname', 'surya');
wish.set(1, 'salem,ammapet');
console.log(wish);

wish
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'we open')
  .set(false, 'we closed');

console.log(wish.get('categories'));
console.log(wish.has('fname'));
wish.delete(1);
console.log(wish);
console.log(wish.size);

//Convert map into array
console.log(...wish.entries());
console.log(...wish.keys());
console.log(...wish.values());
 */ //----------------------------------------------------------x-----------------------------------------------------------------------------
