'use strict';
//Destructuring in JavaScript is an assignment syntax that allows you to conveniently extract data from arrays and objects in one line.
/* // Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

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
 */

/* //Without Destructuring to retrieve value
const arrr = [2, 3, 4];
const a = arrr[0];
const b = arrr[1];
const c = arrr[2];

console.log(arrr);
console.log(a);
console.log(b);
console.log(c);

//WIth Destructuring to retrieve array value

const [x, y, z] = arrr;
console.log(x, y, z); */
/* 


//Array Destructuring
//Array destructuring is a unique technique that allows you to neatly extract an array's value into new variables.

//Array Destructuring
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
};

//with Destructuring to retrieve values

//Ex1
//If i want categories inside first and second value

const [first, second] = restaurant.categories;
console.log(first, second); //output: Italian Pizzeria

//Ex2
//If i want categories inside first and third value

const [one, , third] = restaurant.categories;
console.log(one, third); //output: Italian Vegetarian

//Ex3
//Switching the variables
let [main, secondary] = restaurant.categories;
[main, secondary] = [secondary, main];
console.log(main, secondary); */

/* //Ex 1
//we creating function
//without destructuring
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

console.log(restaurant.order(2, 0));  //typeof is object*/

//Ex2
//we creating function
//with destructuring
/* const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse); //typeof is string
 */

//Nested array Destructuring
/* //Ex1
const nested = [1, 2, [3, 4]];
const [a, , b] = nested;
console.log(a, b); //Output: 1 [3,4] */

/* //Ex2
//Nested array Destructuring
//Need string value inside nested values too
const nested = [1, 2, [3, 4]];
const [a, , [b, c]] = nested;
console.log(a, b, c);  //Output:1,3,4 */

//Default Values
//Ex1
/* const [p, q, r] = [7, 8];
console.log(p, q, r); */

//Ex2
/* const [p, q, r = 1] = [7, 8];
console.log(p, q, r); */

//Object Destructuring
/* 
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

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
}; */

//we must use property name in object destructing
//its retrieve values from objects
/* const { name, openingHours, mainMenu } = restaurant;
console.log(name, openingHours, mainMenu); */
/* 
//its creating new variable for existing variables
const {
  name: restaurantName,
  openingHours: hours,
  mainMenu: menu,
} = restaurant;
console.log(restaurantName, hours, menu);  */

//Ex1
//Default Variables
/* const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters); */

//Ex2
//Mutating Variables
/* let a = 10;
let b = 20;
const obj = { a: 23, b: 7, c: 16 };

({ a, b } = obj);
console.log(a, b); */

//Nested Object
//Ex 1
/* const { fri } = restaurant.openingHours;
console.log(fri); */

//Ex 2
/* const {
  fri: { open, close },
} = restaurant.openingHours;
console.log(open, close); */

//Ex:3
/* const {
  fri: { open: a, close: b },
} = restaurant.openingHours;
console.log(a, b); */

/* const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags); */

// const { menu = [], starterMenu: starter = [] } = restaurant;
// console.log(menu, starter);

/* function learnJavaScript() {
  // Create a `fruit` object
  let fruit = {
    title: 'banana',
    group: 'tropical',
    quantity: 5,
  };

  // Destructuring the `fruit` object
  let { title, group, quantity } = fruit;

  // Display `title`
  return title;
}
console.log(learnJavaScript()); */

//Ex2
/* function add() {
  let fruit = {
    title: 'banana',
    group: 'share',
    quantity: 5,
  };
  let { title, group, quantity } = fruit;
  return `surya have ${quantity} ${title} and ${group} with friends`;
}
console.log(add()); */

//-----------------------------------------------------------------------x-------------------------------------------------------------------

//Spread Operator
//The JavaScript spread operator ( ... ) allows us to quickly copy all or part of an existing array or object into another array or object.

//Without Spread Operator
/* const add = [3, 4, 5];
const newAdd = [1, 2, add[0], add[1], add[2]];
console.log(newAdd); */

//With Spread Operator using Array
/* const add = [3, 4, 5];
const newAdd = [1, 2, ...add];
console.log(newAdd); */

//With spread Opeartor using object
/* const obj = {
  fname: 'surya',
  age: 24,
  loc: 'salem',
};

const obj1 = { ...obj, institute: 'psa' };
console.log(obj1); */

/* const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

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

const newRestaurant = [...restaurant.mainMenu, 'chappathi'];
console.log(newRestaurant); */

//Using string with spread Operator

/* const fname = 'surya';
const add = [...fname, ' ', 's.'];
console.log(add); */

/* let example = 'Hi Surya!\n' + ' ' + 'How are You!';
console.log(example); */

//-------------------------------------------------------------------x-------------------------------------------------------------
//SPREAD OPERATOR, Because of right side of assignment Operator(=)
/* let wish = [3, 4, 5, 6];
let add = [1, 2, ...wish];
console.log(add); */

/* const arr = [1, 2, 3, 4, 5];
const add = ['surya', 'selvam', 'sumathi'];
const wish = ['surya'];
console.log(...arr);
console.log(...add);
console.log(...wish); */

//REST OPERATOR, Because of left side of assignment Operator (=)

/* const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others); */

//REST OPERATOR
//Rest operators collect the all the array after the last variable

//1.USING DESTRUCTURING
/* const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order: function (main, secondary) {
    return [this.starterMenu[main], this.starterMenu[secondary]];
  },
}; */

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
// console.log(a, b, c, d, others);

// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],

//   openingHours: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0, // Open 24 hours
//       close: 24,
//     },
//   },
// };

// //Object Rest Operators

// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(weekdays);

//-----------------------------------------------------------------------------X---------------------------------------------------------------------

// 2.USING FUNCTION (REST OPERATOR)
//=> The rest syntax is taking multiple numbers or multiple values and then pack them all into one array.
//its doing opposite of the spread operator.

//Ex1
/* function add(...numbers) {
  console.log(numbers);
}
add(1, 2);
add(4, 5, 3);
add(4, 5, 3, 2);
add(4, 5, 3, 2, 2, 4, 7); */

//Ex2

/* function add(...number) {
  let sum = 0;
  for (let i = 0; i < number.length; i++) sum += number[i];
  console.log(sum);
}
add(1, 2);
add(1, 2, 3);
add(1, 2, 3, 4);
add(1, 2, 3, 4, 7, 8, 5); */

//Short Circuting(|| and &&)
//Truthy value will execute
/* console.log(3 || 'surya');
console.log('' || 'surya');
console.log(true || 0);
console.log(0 || true);
console.log(undefined || null); */

/* console.log(undefined || 0 || '' || 23 || 'surya');
console.log(undefined || 0); */

//AND &&
//If first value true means it will check continues and end result will we get output
/* console.log(0 && 'surya');
console.log('surya' && 0);
console.log(7 && 'surya');
 */

//Nullish Coalescing Operator(??)

//The nullish coalescing ( ?? ) operator is a logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined , and otherwise returns its left-hand side operand.
/* 
const a = { duration: 50 };

a.duration ??= 10;
console.log(a.duration);
// Expected output: 50

a.speed ??= 25;
console.log(a.speed); */
// Expected output: 25

//For-of-Loop

/* const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

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
 */

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

//For Loop
/* for (let i = 0; i <= menu.length - 1; i++) {
  console.log(menu[i]);
} */

//For-Of Loop
/* for (let item of menu) {
  console.log(item);
} */

/* for (let item of restaurant.categories) {
  console.log(item);
} */

//OBJECT LITERALS
//An object literal is a list of zero or more pairs of property names and associated values of an object, enclosed in curly braces ( {} ).

const weekdays = ['mon', 'tue', 'wed', 'thurs', 'fri', 'sat', 'sun'];
const openingHours = {
  [weekdays[3]]: {
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
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours,
};

//OPTIONAL CHAINING?.

// WITH OPTIONAL CHAINING?.
//if property not exist means will get error, using optional Chaining(?) existing after will get undefined
// console.log(restaurant.openingHours.mon?.open);

//WITHOUT Optional Chaining?.
// console.log(restaurant.openingHours.mon.open); //OUTPUT: TypeError: Cannot read properties of undefined (reading 'open')

//METHODS

/* console.log(restaurant.order?.(1, 0) ?? 'Method does not exists');
console.log(restaurant.orderone?.(1, 0) ?? 'Method does not exists'); */

//-----------------------------------------------------------x--------------------------------------------------------------------
//LOOPING OBJECTS:
// 1.OBJECT KEYS
// 2.VALUES
//3.ENTRIES

// 1.OBJECT KEYS
//PROPERTY NAMES

/* const properties = Object.keys(openingHours);
let openStr = `we open at ${properties.length} days `;
for (const day of properties) {
  openStr += `${day} `;
}
console.log(openStr); */

//2.VALUES

/* const value = Object.values(openingHours);
console.log(value); */

//Entire Objects

/* const entries = Object.entries(openingHours);
// console.log(entries);

for (const [day, { open, close }] of entries) {
  console.log(`On ${day} We open at ${open} and close at ${close}`);
} */

//---------------------------------------------------------------x------------------------------------------------------------------------------
//SETS
//set is collection of unique values, so that means that a set can never have any duplicates
/* const order = new Set([
  'dosa',
  'idly',
  'pongal',
  'dosa',
  'poori',
  'idly',
  'sambar',
  'chutney',
]); */

/* console.log(order);

//size helps to know the sets length
console.log(order.size);

//it helps to know the value exist or not
console.log(order.has('idly'));
console.log(order.has('vadai'));

//it helps to add the values into the SETS
order.add('upma');
console.log(order);

//it helps to delete the values into the SETS
order.delete('idly');
console.log(order);

//it helps to clear the SETS
order.clear();
console.log(order); */

//WE CAN ITERATE SETS VALUES
/* for (const ord of order) {
  console.log(ord);
} */

//MAINLY IT USE FOR REMOVE DUPLICATES FROM AN ARRAY

// const words = ['Surya', 'Naveen', 'Gowtham', 'Naveen', 'Gowtham', 'Surya'];
// // const newWords = words.map(word => word.toLocaleLowerCase());
// // console.log(newWords);

// const letter = [...new Set(words)];
// console.log(letter);

//------------------------------------------------------------------------x--------------------------------------------------------------------------

//MAPS IS A DATA STRUCUTURE
//ITS SIMILARLY OBJECT BUT IN OBJECT WE CAN USE KEY AS A STRING
//IN MAPS KEY WE CAN USE OBJECT,ARRAY AND OTHER MAPS, ANY DATA TYPES

/* const rest = new Map();
rest.set('name', 'Italiano Elclassico'); //fill the map to helps the set method
rest.set(1, 'salem ,Tamilnadu');
console.log(rest.set(2, 'karnataka,Bangalore'));

console.log(
  rest
    .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
    .set('open', 11)
    .set('close', 23)
    .set(true, 'We are open :D')
    .set(false, 'we are closed :(')
);
console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get(1));

const time = 22;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

console.log(rest.has('categories'));
rest.delete(2);
console.log(rest);
console.log(rest.size); */

// ------------------------------------------------------------x-----------------------------------------------------------------------------

// STRING METHODS

const hotel = 'The Salem Restuarant';

//INDEX METHOD
//Index method helps for find the letter (or) word position
//this one k-sensitive, if we print without k-sensitive means will get -1
//0 based index
console.log(hotel.indexOf('r')); //output:16
console.log(hotel.lastIndexOf('R')); //output:10
console.log(hotel.indexOf('restuarant')); //output:-1
console.log(hotel.indexOf('Restuarant')); //output: 10

//SLICE METHOD
//slice method end value not included in the string
console.log(hotel.slice(4));
console.log(hotel.slice(4, 10));
console.log(hotel.slice(4, 9));
console.log(hotel.slice(0, hotel.indexOf('R')));
console.log(hotel.slice(0, hotel.indexOf(' ')));
console.log(hotel.slice(-2));
console.log(hotel.slice(1, -1));

/* 
function checkMiddleSeat(seat) {
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') {
    console.log('you got window seat');
  } else {
    console.log('you lucky');
  }
}

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');
 */
