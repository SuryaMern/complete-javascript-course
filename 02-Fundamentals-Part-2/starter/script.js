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
//function declaration means simply we can use function name to declare a function

/* const year = add(1998)
console.log(year);

function add(birthyear){
    return 2023-birthyear
} */

//function expression
//function expression can be stored in variable,now the variable act as a function 

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
/* It means simply we can use function name to declare a function that called function declaration */

//Function Expression
/* Function expression can be stored in a variable, that variable act as a function*/

//Arrow Function
/* It quick one-line functions */


/* console.log(Number({}));
console.log(Number([])); */

/* console.log(Boolean(10));
console.log(Boolean(""));
console.log(Boolean(null))
console.log(Boolean("undefined"));
console.log(Boolean({}));
console.log(Boolean([])); */

/* let cutPieces = function(fruit){
    return fruit*4
}


let fruitProcessor = function(apple,orange){
    let appleJuice = cutPieces(apple) 
    let orangeJuice = cutPieces(orange) 
    const juice = `juice with ${appleJuice} apple and ${orangeJuice} orange`
    return juice
}
let process = fruitProcessor(2,9)
console.log(process); */


//Array 
/* const friend1 = "surya"
const friend2 = "naveen"
const friend3 = "gowtham"

const friends = ["surya","naveen","gowtham"]
console.log(friends);
console.log(friends[0]);
console.log(friends.length);
console.log(friends.length-1);
console.log(friends[friends.length-1]);
friends[2] = "Bala"
console.log(friends);

const years = new Array(1991,1984,2008,2020)
console.log(years);

const firstName = "prem"
const kishor = [firstName]
console.log(kishor); */


//function with arrays

/* const calcAge = function(birthYear){
    return 2023-birthYear
}

const age = [1998,1999,2000,2001,2002]
const age1 = calcAge(age[0])
const age2 = calcAge(age[1])
const age3 = calcAge(age[2])
const age4 = calcAge(age[3])
const age5 = calcAge(age[age.length-1])
console.log(age1, age2, age3, age4, age5);

const ages = [calcAge(age[0]),calcAge(age[1]),calcAge(age[2]),calcAge(age[3]),calcAge(age[age.length-1])]
console.log(ages);
 */


//Basic array operations (Methods)

//Push Method - it add new element in last index 

/* const friends = ["Naveen","Gowtham","Dilip"]
friends.push("Tharani")
console.log(friends); */

//Pop Method - it remove last element in the array
/* const friends = ["Naveen","Gowtham","Dilip"]
friends.pop()
console.log(friends); */

//Unshift Method - its add new element in first index
/* const friends = ["Naveen","Gowtham","Dilip"]
friends.unshift("Tharani")
console.log(friends); */

//Shift Method = its remove first element in the array

/* const friends = ["Naveen","Gowtham","Dilip"]
friends.shift()
console.log(friends); */

//Indexof method - its define the element index
/* const friends = ["Naveen","Gowtham","Dilip"]
console.log(friends.indexOf("Gowtham"));
console.log(friends.indexOf("bob")); */

//Includes Method - Its return Boolean true or false value
/* const friends = ["Naveen","Gowtham","Dilip"]
console.log(friends.includes("Gowtham"));
console.log(friends.includes("surya")); */

//Using Includes Methods in if condition
/* const friends = ["Naveen","Gowtham","Dilip"]
if(friends.includes("Naveen")){
    console.log("You have a friend called Naveen!");
}else{
    console.log("That's You!");
} */



//Object-Group of key value pairs

/* const emp = {
    fname:"surya",
    age:25,
    role:"Developer",
    friends:["naveen","gowtham","bala"]
}

console.log(emp);
console.log(typeof emp); */

//Dot and Bracket Notation

/* const emp = {
    fname:"surya",
    age:25,
    role:"Developer",
    friends:["naveen","gowtham","bala"]
}

console.log(emp.fname);
console.log(emp["age"]);

const interest = prompt(`what do you know about surya?,fname,age,role and friends`)
// console.log(emp.interest); we wont get output using dot notation
console.log(emp[interest]);  //will get output using bracket notationn */

//example using if condition

/* const emp = {
    fname:"surya",
    age:25,
    role:"Developer",
    friends:["naveen","gowtham","bala"]
}
const interest = prompt(`what do you know about surya?,fname,age,role and friends`)

if(emp[interest]){
    console.log(emp[interest]);
}else{
    console.log("Wrong Req! choose between fname,age,role and friends")
} */


//add element in object

/* const emp = {
    fname:"surya",
    age:25,
    role:"Developer",
    friends:["naveen","gowtham","bala"]
}

emp.loc = "Salem"
emp["hobbies"] = "playing Cricket"
console.log(emp); */


// challenge
/* const surya = {
    fname:"surya",
    lname:"krish",
    age:2023-1998,
    friends:["Naveen","Gowtham","Bala"]
}

console.log(`${surya.fname} has 3 friends and ${surya.friends[0]} is a best friend`); */

//function expression insert into the object

 /* const surya = {
    fname:"surya",
    lname:"krish",
    birthYear:1998,
    calcAge:function(birthYear){
        return 2023-birthYear
    }
}
console.log(surya.calcAge(1998));
console.log(surya['calcAge'](1998));  */


//Using this Keyword
/* const friends = {
    fname:"surya",
    lname:"krish",
    birthYear:1998,

//1.type
/* calcAge:function(birthYear){
    return 2023-birthYear
} */

// 2.type
/* calcAge:function(){
    return 2023-this.birthYear
} */

//3.type
/*     calcAge:function(){
        this.age=2023-this.birthYear
        return this.age
} */
// }
// console.log(friends.calcAge());
// console.log(friends.age); */



//challenge
//"jonas is a 46-year old teacher, and he has a driver's license"

/* const friends = {
    fname:"surya",
    lname:"krish",
    birthYear:1998,
    job:"teacher",
    driverLicense:true,
    calcAge:function(){
        this.age=2023-this.birthYear
        return this.age
},
    getSummary:function(){
        this.age = 2023-this.birthYear
        return `${this.fname} is a ${this.calcAge()}-year old ${this.job}, and he has ${this.driverLicense?"a":"no"} driver's licese`
    }
}
console.log(friends.calcAge());
console.log(friends.getSummary()); */
