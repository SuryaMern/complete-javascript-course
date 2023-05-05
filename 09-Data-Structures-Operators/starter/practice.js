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
//----------x------------------------------------------------------

//Object Destructuring
//object destructuring means extract an object values into new variables
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
