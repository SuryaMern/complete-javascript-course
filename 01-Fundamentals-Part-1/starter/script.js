//variables practice

//using var we can redeclare value
//using let and const we can't redeclare value
/* var fname = "surya"
var fname = "vijay"
console.log(fname); */


/* let lname = "krish"
let lname = "kumar"
console.log(lname); */

/* const name = "surya"
const name = "rames"
console.log(name); */

//using var and let we can re-assign value
//using const we can't re-assign value

/* var fname = "surya"
fname = "virat"
console.log(fname); */

/* let fname = "surya"
fname = "krish"
console.log(fname); */

/* const fname = "surya"
fname = "krish"
console.log(fname); */

/* if(true){
    const x = 10
    console.log(x);
} */

/* const x = 10
if(true){
    console.log(x);
} */

//Nested function
//other word called as lexical scoper
//its check declared variable within scope or its check one upward, like its check until global scope
/* let a = 10
function outer(){
    let b = 20
    function inner(){
        let c = 30
        console.log(a, b, c);
    }inner()
}outer() */

/* const a = 10
function outer(){
    const b = 20
    function inner(){
        const c = 30
        console.log(a, b, c);
    }inner()
}outer() */



//3 types of scope is there
//1.block scope
//2.function scope
//3.global scope

//1.Block Scope
// in this variable declared within curly braces means cannot accessed from outside scope

//2.Function Scope
//its like a Block scope if we variable declared within function we cannont access it from outside of the function scope 

//3.Global Scope
//in this case we can accessed variable both block and functiona scope and outside also we can access


//What is Function 
//Function is a block of code it designed to perform a particular task
//we can resue this one
//write code one time and we can use everywhere

//Function Syntax
/* function add(){
    //
    //
}
add() */

/* function add(user,age,id){
    console.log(`I'm ${user} and my age is ${age} and my Employee Id is ${id}`);
}
add("surya",25,101) */

//return function
/* function add(fname,age){
    return `I'm ${fname} and age is ${age}`
}
let wish = add("surya",25)
console.log(wish);
let ash = add("virat",29)
console.log(ash);
 */

//fat arrow function
//its helps to concised code
//fat arrow syntax

/* let add = (fname,age) => `${fname},${age}`
console.log(add("surya",24)); */

/* let add = num => {
    return num + 5
} 
let wish = add(10)
console.log(wish); */

//Naming Function
/* let add = function(){
    console.log("surya");
}
add() */


//switch case statement
/* Use a switch statement to log the following string for the given 'language':
chinese or mandarin: 'MOST number of native speakers!'
spanish: '2nd place in number of native speakers'
english: '3rd place'
hindi: 'Number 4'
arabic: '5th most spoken language'
for all other simply log 'Great language too :D' */

/* let language = "Telugu"
switch(language){
    case "chinese or mandarin":
        console.log('MOST number of native speakers!');
        break;
        case "spanish":
        console.log('2nd place in number of native speakers');
        break;
        case "english":
            console.log('3rd place');
            break;
            case "hindi":
                console.log("4th Place");
                break;
                case "arabic":
                console.log("5th Place");
                break;
                case "Tamil":
                    console.log("world oldest language ever!");
                    break;
                    default:
                    console.log("Great language too :D");
} */

//Example 2
/* let day = "monday"
if(day === "monday"){
    console.log("Html Practice");
}
else if(day==="tuesday"){
        console.log("CSS Practice");
}
else if(day === "wednesday" || day==="thursday"){
    console.log("Bootstrap Practice");
} */


/* const age = 15
if(age<=18){
    console.log("surya can driving license");
}else{
    const yearsLeft = 18 - age;
    console.log(`surya is  too young, wait another ${yearsLeft} years`);
} */

//Type Conversion 
//Manually going to convert one type to another type

//coercion

/* let n = "1"+1
n = n - 1
console.log(n); */

let firstName = "surya"
let job = "teacher"
let birthYear = 1998
let year = 2023

let emp_details = `I'm ${firstName} and my profession is a ${job} and my birthyear ${year-birthYear}`
console.log(emp_details);
