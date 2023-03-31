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







