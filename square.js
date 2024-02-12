const isSquare = function (n) {
    // if (n < 0) {
    //     return false;
    // }
    // let sqrtN = Math.sqrt(n);
    // return Number.isInteger(sqrtN);

    // return Number.isInteger(Math.sqrt(n));

    return Math.sqrt(n) % 1 == 0;
}
  
console.log(isSquare(2));
console.log(isSquare(-1));
console.log(isSquare(3));
console.log(isSquare(25));
console.log(isSquare(0));
console.log(isSquare(26));