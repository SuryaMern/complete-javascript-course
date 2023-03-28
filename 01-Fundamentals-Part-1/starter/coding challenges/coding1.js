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
