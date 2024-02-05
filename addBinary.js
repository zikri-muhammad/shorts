const addBinary = (a, b) => {
    let binaryA = a.toString(2);
    let binaryB = b.toString(2);
    console.log(binaryA)
    console.log(binaryB)
    // Convert binary strings back to integers, add them, then convert back to binary
    let sum = (parseInt(binaryA, 2) + parseInt(binaryB, 2)).toString(2);
    return sum;
}
// function addBinary(a,b){
//     var sum = a + b, binary = '';
  
//     while (sum > 0) {
//       binary = (sum % 2) + binary;
//       sum = Math.floor(sum / 2);
//     }
    
//     return binary;
//   }

console.log(addBinary(1, 12))

// 23 / 2 = 12  sisa 1
// 12 / 2 = 6 sisa 0
// 6 / 2 = 3 sisa 0
// 3 / 2 = 1 sisa 1
// 1

