/* LECTURE: Functions
1. Write a function called 'describeCountry' which takes three parameters: 
'country', 'population' and 'capitalCity'. Based on this input, the 
function returns a string with this format: 'Finland has 6 million people and its 
capital city is Helsinki'
2. Call this function 3 times, with input data for 3 different countries. Store the 
returned values in 3 different variables, and log them to the console */

/* const describeCountry = function(country,population,capitalCity){
            return `${country} has ${population} people and its capital city is ${capitalCity}`
}
console.log(describeCountry("Finland",6000000,"Helsinki"));
console.log(describeCountry("portugal",7000000,"lisbon"));
console.log(describeCountry("Argentina",8000000,"buenos Aires")); */


/* LECTURE: Function Declarations vs. Expressions
1. The world population is 7900 million people. Create a function declaration
called 'percentageOfWorld1' which receives a 'population' value, and
returns the percentage of the world population that the given population 
represents. For example, China has 1441 million people, so it's about 18.2% of 
the world population
2. To calculate the percentage, divide the given 'population' value by 7900 
and then multiply by 100
3. Call 'percentageOfWorld1' for 3 populations of countries of your choice, 
store the results into variables, and log them to the console
4. Create a function expression which does the exact same thing, called 
'percentageOfWorld2', and also call it with 3 country populations (can be 
the same populations) */


//Function Declaration
/* const population = 1393.3
const worldPop=7900  */

// const country = "India"
/* function percentageOfWorld1(country,population,worldPop){
        return `${country} is a ${population}million people, so it's about ${ (population /worldPop)*100
        } of the world population`
} */
/* console.log(percentageOfWorld1("India",1393.3,7900))
console.log(percentageOfWorld1("china",1441,7900))
console.log(percentageOfWorld1("America",334.9,7900))  */ 

//Function Expression

/* const percentageOfWorld2 = function(country,population,worldPop){
    return `${country} is a ${population}million people, so it's about ${ (population /worldPop)*100
} of the world population`
}
console.log(percentageOfWorld2("India",1393.3,7900))
console.log(percentageOfWorld2("china",1441,7900))
console.log(percentageOfWorld2("America",334.9,7900)) */

/* LECTURE: Arrow Functions
1. Recreate the last assignment, but this time create an arrow function called 
'percentageOfWorld3' */

/* const percentageOfWorld2 = (country,population) => {
    return `${country} is a ${population}million people, so it's about ${ (population /7900)*100
} of the world population`
}
console.log(percentageOfWorld2("India",1393.3,7900))
console.log(percentageOfWorld2("china",1441,7900))
console.log(percentageOfWorld2("America",334.9,7900))  */

/* LECTURE: Functions Calling Other Functions
1. Create a function called 'describePopulation'. Use the function type you 
like the most. This function takes in two arguments: 'country' and 
'population', and returns a string like this: 'China has 1441 million people, 
which is about 18.2% of the world.'
2. To calculate the percentage, 'describePopulation' call the 
'percentageOfWorld1' you created earlier
3. Call 'describePopulation' with data for 3 countries of your choice */

/* const describePopulation = function(country,population){
    const add = percentageOfWorld2(country,population)
    // return `${country} has 1441 million people, which is about ${population/7900}*100 of the world`
    return add
}
console.log(describePopulation("china",1441));
console.log(describePopulation("India",1393.3));
console.log(describePopulation("America",334.9)); */

/* LECTURE: Introduction to Arrays
1. Create an array containing 4 population values of 4 countries of your choice. 
You may use the values you have been using previously. Store this array into a 
variable called 'populations'
2. Log to the console whether the array has 4 elements or not (true or false)
3. Create an array called 'percentages' containing the percentages of the 
world population for these 4 population values. Use the function 
'percentageOfWorld1' that you created earlier to compute the 4 
percentage values */

/* const population = [1441, 1393, 335, 798];
// console.log(population.length === 4);
const worldPop = 7900;
const country = ["China", "India", "USA", "UK"];
const percentages = [];
function percentageOfWorld1() {
  for (i = 0; i <= population.length - 1 && i <= country.length - 1; i++) {
    const sum = `${(population[i] / worldPop) * 100}`;
    console.log(
      `${country[i]}is a ${population[i]}million people, so it's about ${
        (population[i] / worldPop) * 100
      } of the world population`
    );
    percentages.push(sum);
  }
}

percentageOfWorld1();
console.log(percentages); */

/* 

LECTURE: Basic Array Operations (Methods)
1. Create an array containing all the neighbouring countries of a country of your 
choice. Choose a country which has at least 2 or 3 neighbours. Store the array 
into a variable called 'neighbours'
2. At some point, a new country called 'Utopia' is created in the neighbourhood of 
your selected country. So add it to the end of the 'neighbours' array
3. Unfortunately, after some time, the new country is dissolved. So remove it from 
the end of the array
4. If the 'neighbours' array does not include the country ‘Germany’, log to the 
console: 'Probably not a central European country :D'
5. Change the name of one of your neighbouring countries. To do that, find the 
index of the country in the 'neighbours' array, and then use that index to 
change the array at that index position. For example, you can search for
'Sweden' in the array, and then replace it with 'Republic of Sweden' */

/* const neighbours = ["china","srilanka","Nepal"]
neighbours.push("Utopia")
console.log(neighbours);
neighbours.pop()
console.log(neighbours);
if(!neighbours.includes("Germany")){
    console.log('Probably not a central European country :D');
}
neighbours[neighbours.indexOf("china")] ="Republic of china"
console.log(neighbours); */

/* 
LECTURE: Introduction to Objects
1. Create an object called 'myCountry' for a country of your choice, containing 
properties 'country', 'capital', 'language', 'population' and 
'neighbours' (an array like we used in previous assignments) */

/* const myCountry = {
    country:"India",
    capital:"New Delhi",
    language:"Hindi",
    Population:1393,
    neighbours:["China","Nepal","Srilanka"]
}
console.log(myCountry); */

/* LECTURE: Dot vs. Bracket Notation
1. Using the object from the previous assignment, log a string like this to the 
console: 'Finland has 6 million finnish-speaking people, 3 neighbouring countries 
and a capital called Helsinki.'
2. Increase the country's population by two million using dot notation, and then 
decrease it by two million using brackets notation */

/* const myCountry = {
    country:"India",
    capital:"New Delhi",
    language:"Hindi",
    Population:1393,
    neighbours:["China","Nepal","Srilanka"]
}
console.log(`${myCountry.country} has ${myCountry.Population} ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}`);

myCountry.Population += 2
console.log(myCountry);
myCountry["Population"] -= 2
console.log(myCountry); */

/* LECTURE: Iteration: The for Loop
1. There are elections in your country! In a small town, there are only 50 voters. 
Use a for loop to simulate the 50 people voting, by logging a string like this to 
the console (for numbers 1 to 50): 'Voter number 1 is currently voting' */

/* for(let voter=1;voter<=50;voter++){
    console.log(voter,`voter number ${voter} is currently voting`);
} */


/* LECTURE: Looping Arrays, Breaking and Continuing
1. Let's bring back the 'populations' array from a previous assignment
2. Use a for loop to compute an array called 'percentages2' containing the 
percentages of the world population for the 4 population values. Use the 
function 'percentageOfWorld1' that you created earlier
3. Confirm that 'percentages2' contains exactly the same values as the 
'percentages' array that we created manually in the previous assignment, 
and reflect on how much better this solution is */

const population = [1441, 1393, 335, 798];
for(population=0;population<4;population++){
    console.log(object);
}