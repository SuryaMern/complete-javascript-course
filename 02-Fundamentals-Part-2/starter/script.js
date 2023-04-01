/* "use strict";
//it helps to show a bug 
let interface = "video"
console.log(interface); */


//Function
//Example 1
/* 
 function add(){
    console.log("Hi");
}
add() 
add() 
add() */ 

//Example 2
/* 
function add(apples,oranges){
    const fruit = `Juice with ${apples} and ${oranges} oranges`
    return fruit
}
let appleJuice = add(1,5)
console.log(appleJuice); */

//Example 3
/* function add(apples,oranges){
    let fruits = `Juice with ${apples} and ${oranges} oranges`
    return fruits
}
let appleJuice = add(1,4)
console.log(appleJuice);

let orangeJuice = add(4,7)
console.log(orangeJuice); */

//Declaration vs Expression
//Example 1
/* function age(birthyear){
    return 2023-birthyear
}
let presentAge = age(1998)
console.log(presentAge); */


//Example 2
/* const calAge = function(birthYear){
    return 2023-birthYear
}
let totalAge = calAge(1998)
console.log(totalAge); */

/* function add(fname,age){
    console.log(`I'm ${fname} and my age is ${age}`);
}
add("surya",25) */


/* function add(apple,orange){
    // console.log(apple,orange);
    const fruit = `juice with ${apple} and ${orange} oranges `
    return fruit
}
console.log(add(1,9)) */

//function declarations and function expression
//function declaration means we can initialize value before declaring a function

/* const year = add(1998)
console.log(year);

function add(birthyear){
    return 2023-birthyear
} */

//function expression
//function expression means variable act as a function name that time we cannot invoke before initialize the value

/* const add = function(birthYear){
    return 2023-birthYear
}
const fruit = add(1998)
console.log(fruit); */

//Arrow function
//its sorter and help to write faster

//Example 1 single line code
/* const age = birthyear => 2023-birthyear
const age3 = age(1998)
console.log(age3);
 */

//Example
/* const yearsRetair = (birthYear,fname) => {
    const age = 2023-birthYear
    const retairment = 65-age
    return `the name is ${fname} and the retirement age is ${retairment}`
}
console.log(yearsRetair(1998,"surya")); */


//Example 

/* const yearsRetair = (birthYear,fname) => {
    const age = 2023-birthYear
    const retairment = 65-age
    return `the name is ${fname} and the retirement age is ${retairment}`
}
let add = yearsRetair(1998,"surya")
console.log(add); */

//Example using Normal Function
/* function yearsRetair(birthYear,fname){
    const age = 2023-birthYear
    const retirement = 65-age
    // return `The Name is ${fname} and the Retirement age is ${retirement}`
    return retirement
}
//const add = yearsRetair(1998,"surya")
// console.log(add); 

console.log(yearsRetair(1998,"surya")); */

//Arrow Function Data Flow Examples
/* const cutProcessor = function(fruit){
    return fruit * 4
}

const fruitProcessor = function(apples,oranges){
    const applePieces = cutProcessor(apples)
    const orangePieces = cutProcessor(oranges)
    return `juice with Apple piece ${applePieces} and orange piece of ${orangePieces}`
}
console.log(fruitProcessor(2,3)); */

/* const add = function(birthYear){
    return 2023-birthYear
}


function yearsRetair(birthYear,fname){
    // const age = add(birthYear)
    //let age = add
    // var age = add(birthYear)
    const retirement = 65-(age = add(birthYear))
    return `The Name is ${fname} and the Retirement age is ${retirement}`
   
}


console.log(yearsRetair(1998,"surya")) */

//Example
/* const add = function(Year){
    return 2023-Year
}


function yearsRetair(birthYear,fname){
    // const age = add(birthYear)
    //let age = add
    // var age = add(birthYear)
    // const retirement = 65-(age = add(birthYear))
    return `The Name is ${fname} and the Retirement age is ${65-(age = add(birthYear))}`
   
}


console.log(yearsRetair(1998,"surya"))  */

//Example
/* function calAge(birthYear,firstName){
    const age = 2023-birthYear
    
    return `${firstName} is ${age} years old`
}
const age = calAge(1998,"surya")
console.log(age); */

/* let curry = function(plate){
    return plate * 4
}

let add = function(parato,dosa){
    let total = curry(parato)
    let total1 = curry(dosa)
    return `I want ${total} parato and too want ${total1} dosa`
}
console.log(add(4,2)); */



/* function fruitProcessor(apple,orange){
        const juice = `juice with ${apple} apples and ${orange} oranges`
        return juice
}
const process = fruitProcessor(4,5)
console.log(process);
console.log(fruitProcessor(1,2)) */

/* const num = Number("23")
console.log(typeof num);
console.log(num); */


//function declaration

/*  function calcAge(birthYear){
    const age = 2023-birthYear
    return `My age is ${age}`
}
const age1 = calcAge(1998)
console.log(age1); */ 


//function expression

/* const calcAge = function (birthYear){
    const age = 2023-birthYear
    return `My age is ${age}`
}
const age1 = calcAge(1998)
console.log(age1); */

//Arrow function
//Example
/* const calcAge = birthYear => 2023-birthYear
const age = calcAge(1998)
console.log(age);  */

//Using Arrow function to calculate the years Until retirement
//Using one Parameter
//Example 1
/* const yearsUntilRetirement = birthYear => {
    const age = 2023-birthYear
    const retirement = 65-age
    return retirement
}
const retirementAge = yearsUntilRetirement(1998)
console.log(retirementAge); */

//Using more than one parameter
//Example 2
/* const yearsUntilRetirement = (birthYear,firstName)=>{
    const age = 2023-birthYear
    const retirement = 65-age
    return `${firstName} and retires in ${retirement} years`
}
const age2 = yearsUntilRetirement(1998,"surya")
console.log(age2);
console.log(yearsUntilRetirement(1989,"Selvam")); */


//Function calling other Function
//Example 1
 /* const cutFruits = function(fruit){
    return fruit*3
}
const fruitProcessor = function(apple,orange){
    const applePieces = cutFruits(apple)
    const orangePieces = cutFruits(orange)
    const juice = `juice with ${applePieces} piece of apple and ${orangePieces} piece of orange`
    return juice
}
const process = fruitProcessor(1,2)
console.log(process);  */



/* function add(){
    console.log("hi");
}
add()


const add = function(){
    console.log("hi");
}
add() */


/* const add = birthYear => 2023-birthYear
console.log(add(1998)); */

/* const add = birthYear => 2023-birthYear
const age = add(1998)
console.log(age); */

/* const add = (birthYear,firstName) =>{
    const age = 2023-birthYear
    return `${firstName} and his age is ${age}`
}
console.log(add(1998,"surya"));
 */

//Function Reviews
////Example of one function to another function
/* const final = years => 2023-years

const yearsUntilRetirement = (birthYear,firstName)=>{
    const age = final(birthYear)
    const retirement = 65-age
    if(retirement>0){
        return (`${firstName} retires in ${retirement} years`);
        // return retirement
    }else{
        return (`${firstName} already retired`);
        // return -1
    }
    
    // return `${firstName} and retires in ${retirement} years`
}
const age1 = yearsUntilRetirement(1998,"surya")
console.log(age1);
console.log(yearsUntilRetirement(1940,"Raja"));  */


//Function

/* Below three different ways of writing functions, but they all work ina similar way receive input data, transform data, and then output data */

//Function declaration
/* It means a function that can be used before its declared */

//Function Expression
/* It means a function value stored in a variable */

//Arrow Function
/* It quick one-line functions */


