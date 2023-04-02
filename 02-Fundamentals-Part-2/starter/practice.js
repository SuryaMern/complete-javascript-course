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
