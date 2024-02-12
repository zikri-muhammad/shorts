function isTriangle(a, b, c) {
    // if (a < 0 || b < 0 || c < 0) {
    //     return false;        
    // }
    if (a + b > c && a + c > b && b + c > a) {
        return true
    }
    return false

    // let sides = [a, b, c].sort();
    // return (sides[0] + sides[1] > sides[2]);
}

console.log(isTriangle(1, 2, 3));
console.log(isTriangle(1, 2, 2));
console.log(isTriangle(1, 2, 2));
console.log(isTriangle(-5,1,3));
console.log(isTriangle(0,2,3));
console.log(isTriangle(1,2,9));


// Input -> Output
// 1,2,2 -> true
// 4,2,3 -> true
// 2,2,2 -> true
// 1,2,3 -> false
// -5,1,3 -> false
// 0,2,3 -> false
// 1,2,9 -> false 