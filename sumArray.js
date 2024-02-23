function sumArray(array) {
    if (!array || array.length <= 2) return 0
    array.sort((a,b) => (a - b))
    let sum = 0
    for (let i = 1; i < array.length - 1; i++) {
        sum += array[i]
    }
    return sum
}

console.log(sumArray(null));
console.log(sumArray([1]));
console.log(sumArray([1,3]));
console.log(sumArray([6, 2, 1, 8, 10]));