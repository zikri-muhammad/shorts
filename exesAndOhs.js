// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false


function XO(str) {
    //code here
    let x = 0
    let o = 0
    for (let index = 0; index < str.length; index++) {
        const element = str[index];
        if (element == 'o' || element == 'O') {
            o++
        } else if (element == 'x' || element == 'X') {
            x++
        } 
    }
    if (x === o) {
        return true
    } 
    return false

}

console.log(XO("ooxx"));
console.log(XO("xooxx"));
console.log(XO("ooxXm"));
console.log(XO("zpzpzpp"));