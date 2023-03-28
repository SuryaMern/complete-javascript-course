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