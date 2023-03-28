//Variables Example
/* let country = "india"
console.log(country);
console.log(typeof country);
let continent = "Asia"
console.log(continent);
console.log(typeof continent);
let population = "1.4Million"
console.log(population);
console.log(typeof population); */


//Datatype Example
/* let isIsLand = "India"
console.log(isIsLand);
isIsLand = true;
console.log(typeof isIsLand);

let language;
console.log(typeof language);

//let,const 
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