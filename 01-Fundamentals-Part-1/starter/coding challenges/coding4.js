/* Coding Challenge #4
Steven wants to build a very simple tip calculator for whenever he goes eating in a 
restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and 
300. If the value is different, the tip is 20%.
Your tasks:
1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for 
this. It's not allowed to use an if/else statement � (If it's easier for you, you can 
start with an if/else statement, and then try to convert it to a ternary 
operator!)
2. Print a string to the console containing the bill value, the tip, and the final value 
(bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value 
316.25”
Test data:
§ Data 1: Test for bill values 275, 40 and 430
Hints:
§ To calculate 20% of a value, simply multiply it by 20/100 = 0.2
§ Value X is between 50 and 300, if it's >= 50 && <= 300 */


//Example 1
/* let bill = 275
let tipValue = (275/100)*15
console.log(`the bill is ${bill} and tip is ${tipValue} and the total bill value with tip is ${bill+tipValue}`); */

//Example 1 using with ternary Operator
/* let bill = 275
let tip = bill <= 300 && bill >=50?bill * 0.15:bill * 0.2
console.log(`the bill value is ${bill} and the tip was ${tip} total bill value with tip is ${bill + tip}`); */

//Example 2
/* let bill = 40
let tipValue = (40/100)*20
console.log(`the bill is ${bill} and tip is ${tipValue} and the total bill value with tip is ${bill+tipValue}`); */ 

//Example 2 using with ternary Operator
 /* let bill = 40
let tip = bill <= 300 && bill >= 50?bill * 0.15:bill * 0.2
console.log(`the bill value is ${bill} and the tip is ${tip} total bill value with tip is ${bill+tip}`) */
 

//Example 3
/* let bill = 430
let tipValue = (430/100)*20
console.log(`the bill is ${bill} and the tip is ${tipValue} and the bill value with tip is ${bill+tipValue}`); */

//Example 3 using ternary operator
/* const bill = 430;
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`); */


// // function
// let add= function(a,b){
//     return a+b;
// }
// console.log(add(10,20));
// console.log(typeof add);
