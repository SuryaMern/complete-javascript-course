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