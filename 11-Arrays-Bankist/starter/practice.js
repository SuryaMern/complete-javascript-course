//Array Methods
//Slice Method

// const add = [1, 2, 3, 4, 5];
// console.log(add.slice(0));
// console.log(add.slice(2, 4));
// console.log(add);
// console.log(add.slice(-1));
// console.log(add.slice(1, -2));

//Splice Method
// const wish = [8, 2, 4, 1, 5];
// console.log(wish.splice(0));
// console.log(wish.splice(1, 3));
// console.log(wish);

//Concat Method
/* const text = ['one', 'two', 'three', 'four', 'five'];
console.log(text.concat()); */

//Join Method
/* const add = [1, 2, 3, 4, 5];
const wish = [6, 7, 8, 9, 10];
console.log(add.concat(wish)); */

//FOR EACH METHOD

/* const add = [132, -456, 435, 673, -673, 5564, -335, 678, -942];

for (a of add) {
  if (a > 0) {
    console.log(`you deposited ${a}`);
  } else {
    console.log(`you withdraw ${Math.abs(a)}`);
  }
}

console.log('-----forEach------');
add.forEach(function (name) {
  if (name > 0) {
    console.log(`you deposited ${name}`);
  } else {
    console.log(`you withdraw ${Math.abs(name)}`);
  }
}); */

/* const num = [
  532, -480, -829, 383, -289, 284, -948, 295, -432, -772, 859, -281, 593, 194,
  -294, 596, 628, -918,
];
 */
/* for (const [i, n] of num.entries()) {
  if (n > 0) {
    console.log(`Transaction: ${i + 1} You Deposited ${n}`);
  } else {
    console.log(`Transaction: ${i + 1} You Withdraw ${Math.abs(n)}`);
  }
} */
