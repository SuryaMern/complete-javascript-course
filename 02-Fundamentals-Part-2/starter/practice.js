//Function
//Example 1

/* function add(){
    console.log("Hii...");
}
add()
 */
//Example 2

/* const add = function(){
    console.log("Hiiii");
}
add() */

//Example 3

/* const add = birthYear => 2023-birthYear
console.log(add(1998)); */

//Example 4

/* const add = (birthYear,firstName) => {
    const age = 2023-birthYear
    const fname = `${firstName}`
    return age+fname
}
console.log(add(1998,"surya")); */

//Example 5

/* const fruitProcessor = function(apple,orange){
    const juice = `juice with ${apple} apple and ${orange} orange`
    return juice
}
console.log(fruitProcessor(3,5)); */

//Example 6

/* const cutPieces = function (fruit){
    return fruit * 5
}

const fruitProcessor = function (apple,orange){
    const applePiece = cutPieces(apple)
    const orangePiece = cutPieces(orange)
    const juice = `juice with ${applePiece} apple and ${orangePiece} orange`
    return juice
}
console.log(fruitProcessor(2,4)); */

//Example 7

/* const yearsUntilRetirement = function(birthyear,fname){
    const age = 2023-birthyear
    const retirement = 65-age
    return `${fname} his retires years is ${retirement}`
}
console.log(yearsUntilRetirement(1998,"surya")); */

//Example 8
/* const tillRetire = function(birthYear){
    return 2023-birthYear
}
const yearsUntilRetirement = function (birthYear,firstName){
    const age = tillRetire(birthYear)
    const retirement = 65-age
    if(retirement>0){
        return `${firstName} his retires age is ${retirement}`
    }else{
        return `${firstName} already retired`
    }
    // return `${firstName} his retires age is ${retirement}`
}
console.log(yearsUntilRetirement(1998,"surya"));
console.log(yearsUntilRetirement(1950,"surya")); */


/* 
function cutPieces(fruit){
    return fruit*4
}

function  fruitProcessor(apple,orange){
        const appleJuice = cutPieces(apple)
        const orangeJuice = cutPieces(orange)
        const juice = `juice with ${appleJuice} apple and ${orangeJuice} orange`
        return juice
}
console.log(fruitProcessor(7,4)); */

//Array
/* const friends = ["sunil","vicky","selva"]
console.log(friends);
console.log(friends[1]);
console.log(friends.length-1);
console.log(friends[friends.length-1]);
const friends1 = new Array("ram","sam","rahul")
console.log(friends1); 
friends[2] = "vijay"
console.log(friends);
console.log(friends.length) */

//function with an Array
/* function calculate(birthYear){
    return 2023-birthYear
}
const years = [1993,1990,1945,1849,1923]
const ages = [calculate(years[0]),calculate(years[1]),calculate(years[2]),calculate(years[3]),calculate(years[years.length-1])]
console.log(ages); */

//Example of function and arrays
/* function add(fname){
    return `Hi ${fname}`
}
const friendsName = ["Naveen","Gowtham","Bala","Shanmugam"]
console.log(friendsName.length);
const ourBond = [add(friendsName[0]),add(friendsName[1]),add(friendsName[2]),add(friendsName[friendsName.length-1])]
console.log(ourBond); */


/* 
const friends = ["surya","Kamal","vijay","ajith","rajini","vikram","dhanush","simbu","arya"]
console.log(friends);
console.log(friends.length);
console.log(friends[4]);

const gangs = new Array("surya","ram")
console.log(gangs);

gangs[2] = "ajith"
console.log(gangs);
*/

/* const calcAge = function(birthyear,fname){
    return birthyear+fname
}

const years = [1998,2000,2003,2007,2010,2019]
const firstName = ["surya","ajith","vijay","rajini","kamal","vikram"]

const ages = [calcAge(years[0] ,firstName[0]),calcAge(years[1],firstName[1]),calcAge(years[years.length-1],firstName[firstName.length-1])]
console.log(ages); */


//pop method
/* const friends = ["surya","ajith","vijay"]
friends.pop()
console.log(friends); */ 

//push method
/* const friends1 = ["surya","ajith","vijay"]
friends1.push("arun")
console.log(friends1); */

//unshift method
/* const friends2 = ["surya","ajith","vijay"]
friends2.unshift("kamal")
console.log(friends2); */

//shift method
/* const friends3 = ["surya","ajith","vijay"]
friends3.shift()
console.log(friends3); */

//indexof method
/* const friends4 = ["surya","ajith","kamal","vijay","rajini"]
console.log(friends4.indexOf("vijay"));
console.log(friends4.indexOf("dhanush")); */

//includes method
/* const friends = ["ajith","vijay","kamal","rajini"]
console.log(friends.includes("ajith"));
console.log(friends.includes("surya")); */

//Example using includes method(its return boolean method)
/* const friends = ["ajith","vikram","dhanush","vijay"]
if(friends.includes("surya")){
    console.log("you have friend called ajith");

}else{
    console.log("You Don't know him");
} */


//object

//challenge
//chennai and punjab participate 15 ipl and punjab not win the trophy 
/* const teams = {
    csk:"chennai Super Kings",
    kxip:"Kings xi Punjab",
    trophyAge:2008,
    PunjabWinner:false,
    calcTrops: function(){
        this.trops = 2023-this.trophyAge
        return this.trops
    },
        calcPbks: function(){
                return `${this.csk} and ${this.kxip} participate ${this.calcTrops()} ipl and ${this.kxip} ${this.kxip?"Not":"Yes"} win the trophy`
        }
}

console.log(teams.calcTrops());
console.log(teams.calcPbks()); */


/*Coding Challenge #3


Let's go back to Mark and John comparing their BMIs! This time, let's use objects to implement the calculations! Remember: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter)

1. For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same method on both objects). Store the BMI value to a property, and also return it from the method.
3. Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"

TEST DATA: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.

GOOD LUCK 😀
*/

/* const Mark = {
    fullName:"Mark Miller",
    mass:78,
    height:1.69,
    calcBmi:function(){
        this.bmi=this.mass/(this.height*this.height)
        return this.bmi 
    }
}

console.log(Mark.calcBmi());

const John = {
    fullName:"John Smith",
    mass:92,
    height:1.95,
    calcBmi:function(){
        this.bmi = this.mass/(this.height*this.height)
        return this.bmi
    }
}
console.log(John.calcBmi());

console.log(Mark.bmi,John.bmi);

if(Mark.bmi>John.bmi){
    console.log(`${Mark.fullName} BMI ${Mark.bmi} is higher than ${John.fullName} ${John.bmi} `);
}else{
    console.log(`${John.fullName} BMI ${John.bmi} is higher than ${Mark.fullName} ${Mark.bmi}`);
}
 */



/* // coding1
let calcAverage=(a,b,c) => (a+b+c)/3
const avg = calcAverage(1,2,3)
console.log(avg);

let scoreDol = (calcAverage(44,23,71))
let scoreKol = (calcAverage(65,54,49))
console.log(scoreDol, scoreKol);

function checkWinner(avgDol,avgKol){
    if(scoreDol>scoreKol){
        console.log(`Dolphin wins ${avgDol} vs. ${avgKol}`);
    }else if(scoreKol>scoreDol){
        console.log(`Koalas wins ${avgKol} vs. ${avgDol}`);
    }else{
        console.log(`No Teams Win....`);
    }
}
checkWinner(scoreDol , scoreKol); */


//Ex 1
/* const add = [
    "surya","Naveen",2037-2019,["Gowtham","Bala","Vicky"]
]
for(i=add.length-1;i>=0;i--){
    console.log(add[i]);
} */

//implicit Binding
/* const person = {
    name:"surya",
    sayMyName:function(){
        console.log(`my name is ${this.name}`);
    }
}
person.sayMyName() */

//explicit Binding
/* const person = {
    name:"surya"
}
function sayMyName(){
    console.log(`My Name is ${this.name}`);
}
sayMyName.call(person)  */


//New Binding
//Ex 1
/* function add(name){
    this.name = name
}
const p1 = new add("surya")
const p2 = new add("dileep")
const p3 = new add("naveen")
console.log(p1, p2, p3); */

//Ex 2
/* function wish(salary){
    this.salary = salary
}
const s1 = new wish(40000)
const s2 = new wish(50000)
console.log(s1, s2); */


//Default Binding
/* function sayMyName(name){
    console.log(`My name is ${this.name}`);
}
sayMyName() */



/* const person = ["surya","venu","dileep"]
person.push("rolex")
console.log(person);
person[1] = "dilli"
console.log(person); */


/* let a = 10
 let b = 10
 console.log(`${a*b}`); */

 
/* function outer(){
    let counter = 0
    function inner(){
        
        counter++
        console.log(counter);
    }inner()
}
outer()
outer() */

/* function add(){
    console.log("surya");
}
add() */


/* const arr = [1,2,3,4,5]
const wish = new Array(...arr)
console.log(wish); */

/* let MarkBmi = 78/1.69 ** 2
console.log(Math.floor(MarkBmi)) */


/* const age = [1998,1999,2000,2001,2010]

function add(birthyear){
    return 2023-birthyear
}
 console.log([add(age[0]),add(age[1]),add(age[2]),add(age[3]),add(age[4])]) */

/*  const arr = ["surya","selva","sunil"]
// console.log(arr.indexOf("sunil"))
console.log(arr.indexOf("vijay"))
console.log(arr.includes("surya"));
console.log(arr.includes("vijay")); */


//implicit binding(this)
/* const person = {
    fname:"surya",
    lname:"Dileep",
    ageCal:function(){
        this.fname = "kumar"
        return this.fname
    }
}
console.log(person.ageCal());
console.log(person); */


/* const add = {
    fname:"surya",
    address:["vijay","ajith","vikram"],
    age:2023-1998
}
console.log(add.address[0]);
console.log(add.age); */

//explicit binding(this)
/* const wish = {
    fname:"surya",
    surname:"krish",
    birthyear:1998
}
function add(){
    this.fname="ajay"
    return this.fname
}
console.log(add.call(wish));
console.log(wish); */

//new binding
/* function person(fname,age){
    this.fname = fname
    this.age = age
    return this.fname+this.age
}
const person1 = new person("surya",25)
// const person2 = new person(person.age)
console.log(person1); */

// ex1
const person = function(name,age,loc){
    this.name = name
    this.age = age
    this.loc = loc
}
const p1 = new person("surya",25,"salem")
console.log(p1);

p1