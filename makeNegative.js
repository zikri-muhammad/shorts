function makeNegative(num) {
    // Code?
    if(num <= 0) return num
    return -num

    return -Math.abs(num);
}
  
console.log(makeNegative(-9))
console.log(makeNegative(0))
console.log(makeNegative(50))
