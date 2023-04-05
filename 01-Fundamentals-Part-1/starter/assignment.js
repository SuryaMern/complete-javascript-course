//Variables Example
/* LECTURE: Values and Variables
1. Declare variables called 'country', 'continent' and 'population' and 
assign their values according to your own country (population in millions)
2. Log their values to the console */

/* let country = "india"
console.log(country);
console.log(typeof country);
let continent = "Asia"
console.log(continent);
console.log(typeof continent);
let population = "1.4Million"
console.log(population);
console.log(typeof population); */

/* let a = 10
let b = 20
console.log(a+b);

let c = 10
let d = "Dilip"
console.log(c+d); */

//implicit-internally its converting 
/* let a = 10
let b = "10" */

//explicit-manually converting the type of data
/* let a = 10
let b = "5"
console.log(Number(b)); */

/* console.log(Number(true));
console.log(Number(null));
console.log(Number(undefined));
console.log(Number("")); */


//Datatype Example
/* LECTURE: Data Types
1. Declare a variable called 'isIsland' and set its value according to your 
country. The variable should hold a Boolean value. Also declare a variable
'language', but don't assign it any value yet
2. Log the types of 'isIsland', 'population', 'country' and 'language'
to the console */
/* let isIsLand = "India"
console.log(isIsLand);
isIsLand = true;
console.log(typeof isIsLand);

let language;
console.log(typeof language);

//let,const 
LECTURE: let, const and var
1. Set the value of 'language' to the language spoken where you live (some 
countries have multiple languages, but just choose one)
2. Think about which variables should be const variables (which values will never 
change, and which might change?). Then, change these variables to const.
3. Try to change one of the changed variables now, and observe what happens
//1.using const
 const isLanguage = "kannada"
console.log(isLanguage);
isLanguage="tamil"
console.log(isLanguage);  */

//2.using let
 /* let knownLanguage = "kanada"
console.log(knownLanguage);
knownLanguage = "tamil"
console.log(knownLanguage);

//3.using var
var localLanguage = "tamil"
localLanguage = "telugu"
console.log(localLanguage);  */

//Falsy values and truthy values

//0, undefined, null, NAN, (" "),{}

/* console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(NaN));
console.log(Boolean(''));
console.log(Boolean({}));
console.log(Boolean("surya")); */

//Equality and strict equality
/* let surya = "0"
if(surya==0){
    console.log("hi");
}
else{
    console.log("hello");
} */

//Boolean Logic
/* a = 1
if(a!==0){
    console.log("true");
}
else{
    console.log("false");
} */

/* let goodDriver = true
let goodVision = true
console.log(goodDriver && goodVision);
console.log(goodDriver || goodVision);
console.log(goodDriver !== goodVision); */
/* 

LECTURE: Equality Operators: == vs. ===
1. Declare a variable 'numNeighbours' based on a prompt input like this: 
prompt('How many neighbour countries does your country 
have?');
2. If there is only 1 neighbour, log to the console 'Only 1 border!' (use loose equality 
== for now)
3. Use an else-if block to log 'More than 1 border' in case 'numNeighbours'
is greater than 1
4. Use an else block to log 'No borders' (this block will be executed when 
'numNeighbours' is 0 or any other value)
5. Test the code with different values of 'numNeighbours', including 1 and 0.
6. Change == to ===, and test the code again, with the same values of 
'numNeighbours'. Notice what happens when there is exactly 1 border! Why 
is this happening?
7. Finally, convert 'numNeighbours' to a number, and watch what happens now 
when you input 1
8. Reflect on why we should use the === operator and type conversion in this 
situation */

/*  let numNeighbours = Number(prompt ('How many neighbour countries does your country  have?'))
 console.log(typeof numNeighbours);

if(numNeighbours === 1){
    console.log("only 1 border!");
}else if(numNeighbours >1){
    console.log("More than 1 border' in case");
}else{
    console.log("No borders");
}  */



//String literals


/* let description = 'Portugal is in Europe, and its 11 million people speak portuguese'
console.log(description) */
// Recreate the 'description' variable from the last assignment, this time using the template literal syntax

/* let Portugal = 11000000
let description = `portugal is in Europe, and its ${Portugal} people speak portuguese`
console.log(description); */


/* 1.If your country's population is greater that 33 million, log a string like this to the 
console: 'Portugal's population is above average'. Otherwise, log a string like 
'Portugal's population is 22 million below average' (the 22 is the average of 33 
minus the country's population)
2. After checking the result, change the population temporarily to 13 and then to 
130. See the different results, and set the population back to original */

/* let Ind = 1470000000
if(Ind > 33000000){
    console.log("Portugal's population is above average");
}
else{
    console.log("Portugal's population is 22 million below average");
}
 */

/* Type Conversion and Coercion
1. Predict the result of these 5 operations without executing them:
'9' - '5';
'19' - '13' + '17';
'19' - '13' + 17;
'123' < 57;
5 + 6 + '4' + 9 - 4 - 2;
2. Execute the operations to check if you were right */
/* console.log('9' - '5')
console.log('19' - '13' + '17')
console.log('19' - '13' + 17);
console.log('123' < 57);
console.log(5 + 6 + '4' + 9 - 4 - 2); */

/* LECTURE: Logical Operators
1. Comment out the previous code so the prompt doesn't get in the way
2. Let's say Sarah is looking for a new country to live in. She wants to live in a 
country that speaks english, has less than 50 million people and is not an 
island.
3. Write an if statement to help Sarah figure out if your country is right for her. 
You will need to write a condition that accounts for all of Sarah's criteria. Take 
your time with this, and check part of the solution if necessary.
4. If yours is the right country, log a string like this: 'You should live in Portugal :)'. If 
not, log 'Portugal does not meet your criteria :('
5. Probably your country does not meet all the criteria. So go back and temporarily 
change some variables in order to make the condition true (unless you live in 
Canada :D) */

/* let Country = "England"
let language = "English"
let popEng = 500000000
if(language === "English" && popEng>=500000000){
    console.log("sarah should live in England");
}else{
    console.log("sarah cant live in England");
} */
/* 
//Switch statement
const day = "Monday" //day === "Monday"
switch(day){
    case"Monday":
    console.log("1st of the week");
    break
    case "Tuesday":
        console.log("2nd of the week");
        break
        default:
            console.log("Enter mentioned days");

} */

//switch challenge using if and else statement

/* let day = "Monday"

if(day==="Monday"){
    console.log("1st week of the day");
}else if(day === "Tuesday"){
    console.log("2nd day of the week");
}else if(day === "wednesday" || day === "Thursday"){
    console.log("3rd and 4th day of the week");
}else if(day === "Friday"){
    console.log("5th day of the week");
}else if(day === "Saturday"){
    console.log("6th day of the week");
}else if(day === "sunday"){
    console.log("7th day of the week");
}else{
    console.log("not a valid day!");
} */

//Ternary Operator
//Example 1
/* const age = 16
age>=18?console.log("Eligible"):console.log("Not Eligible"); */

//Example 2
/* const age = 10
const drink = age >=18?"wine":"water"
console.log(drink); */

//Example 3
/* let age = 10
let drink;
if(age>=18){
    drink = "wine" 
}else{
    drink = "water"
}
console.log(drink); */

//Example 4
/* let age = 10
console.log(`I like to drink ${age>=18?"wine":"water"}`); */

/* LECTURE: The switch Statement
1. Use a switch statement to log the following string for the given 'language':
chinese or mandarin: 'MOST number of native speakers!'
spanish: '2nd place in number of native speakers'
english: '3rd place'
hindi: 'Number 4'
arabic: '5th most spoken language'
for all other simply log 'Great language too :D */

/* 
let language = "arabic"
switch(language){
    case "chinese":
    case "mandarin":
    console.log("MOST number of native speakers!");
    break
    case "spanish":
        console.log("2nd place in number of native speakers");
        break
        case "english":
            console.log("3rd place");
            break
            case "hindi":
                console.log("Number 4");
                break
                case "arabic":
                console.log("5th most spoken language");
                break
                default:
                    console.log("Great language too :D");
} */

/* LECTURE: The Conditional (Ternary) Operator
1. If your country's population is greater than 33 million, use the ternary operator 
to log a string like this to the console: 'Portugal's population is above average'. 
Otherwise, simply log 'Portugal's population is below average'. Notice how only
one word changes between these two sentences!
2. After checking the result, change the population temporarily to 13 and then to 
130. See the different results, and set the population back to original */

// let country = 33
// let population = 133
//Example 1
// country>33?console.log("Portugal's population is above average"):console.log("Portugal's population is below average");
//Example 2
// console.log(`${country}'s population is ${population > 33 ? 'above' :'below'} average`,)