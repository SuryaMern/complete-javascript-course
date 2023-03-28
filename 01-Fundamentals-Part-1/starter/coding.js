//Code challenge 1
/* 
Mark and John are trying to compare their BMI (Body Mass Index), which is 
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg 
and height in meter).
Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both 
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about 
whether Mark has a higher BMI than John.
Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 
m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 
m tall */
//Data 1:Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall

/* let marksKg = 78
let marksHt = 1.69
let johnKg = 92
let johnHt = 1.95

let markMass = marksKg / marksHt ** 2
console.log(markMass);

let johnMass = johnKg/johnHt ** 2
console.log(johnMass);

let markHigherBMI = markMass>johnMass
console.log(markHigherBMI); */ 

//Data 2:Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall

/* let markKg = 95
let markHt = 1.88
let johnKg = 85
let johnHt = 1.76

let markMass = markKg / markHt ** 2
console.log(markMass);

let johnMass = johnKg / johnHt ** 2
console.log(johnMass);

let markHigherBMI = markMass>johnMass
console.log(markHigherBMI); */


//code challenge 2
/* Use the BMI example from Challenge #1, and the code you already wrote, and 
improve it.
Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message 
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
BMI (28.3) is higher than John's (23.9)!"
Hint: Use an if/else statement  */

//Example 1
/* let marksKg = 78
let marksHt = 1.69
let johnKg = 92
let johnHt = 1.95

let markMass = marksKg / marksHt ** 2
console.log(`Mark's BMI ${markMass}`);

let johnMass = johnKg/johnHt ** 2
console.log(`John's BMI ${johnMass}`);

if(markMass>johnMass){
    console.log("Mark's BMI is higher than John's!");
}
else{
    console.log("John's BMI is higher than Mark's!");
} */

//Example 2
/* let markKg = 95
let markHt = 1.88
let johnKg = 85
let johnHt = 1.76

let markMass = markKg / markHt ** 2
console.log(`Mark's BMI ${markMass}`);

let johnMass = johnKg / johnHt ** 2
console.log(`johnMass's BMI ${johnMass}`);

if(markMass>johnMass){
    console.log("Mark's BMI is higher than John's!");
}
else{
    console.log("John's BMI is higher than Mark's!");
} */

/* let pop = 140000000
let halfPop = pop / 2
console.log(halfPop);
halfPop++
console.log(halfPop);
popFin = 60000000
popInd = 140000000
console.log(popFin < popInd);
let description = 'Portugal is in Europe, and its 11 million people speak portuguese'
console.log(description);  */

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

/* Coding Challenge #3


There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins the a trophy!

1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score).

3. BONUS 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. HINT: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉
4. BONUS 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy.

TEST DATA: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
TEST DATA BONUS 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
TEST DATA BONUS 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106 */

 
/* DolR1 = 96
DolR2 = 108
DolR3 = 89
KoaR1 = 88
KoaR2 = 91
KoaR3 = 110

let DolphinsAvg =  (DolR1+DolR2+DolR3)/3
console.log(DolphinsAvg);

let KoalasAvg = (KoaR1+KoaR2+KoaR3)/3
console.log(KoalasAvg);

if(DolphinsAvg>KoalasAvg){
    console.log("Dolphins team wins the trophy");
}else{
    console.log("Koalas team wins the trophy");
}

//Bonus 1
// Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
Dolphins = (97+112+101)/3
console.log(Dolphins);
Koalas = (109+95+123)/3
console.log(Koalas);
if(DolphinsAvg > KoalasAvg && DolphinsAvg>=100){
    console.log("Dolphin Wins the trophy");
}else if(KoalasAvg > DolphinsAvg && KoalasAvg>=100){
    console.log("Koalas Wins the trophy");
}else if(DolphinsAvg ===  KoalasAvg && DolphinsAvg>=100 && KoalasAvg>=100){
    console.log("Both wins the trophy");
}else{
    console.log("No one wins the trophy");
} 


//Bonus 2
// Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
let Dols = (97+112+101)/3
console.log(Dols);
let Koa = (109+95+106)/3
console.log(Koa);

if(Dols>Koa && Dols>=100){
    console.log("Dolphin wins the match and meets the minimum score");
}else if(Dols>Koa && Dols<=100){
    console.log("Dolphin wins the match and not meets the minimum score");
}

if(Koa>Dols && Koa>=100){
    console.log("Koa wins the match and meets the minimum score");
}else if(Koa>Dols && koa<=100){
    console.log("koa wins the match and not meets the minimum score ");
}

if(Dols === Koa && Dols>=100 && Koa>=100){
        console.log("The teams are having same score and meets minimum score");
}else if(Koa === Dols && Dols<=100 && Koa<=100){
    console.log("The teams are having same score and not meets minimum score");
} */