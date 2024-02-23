// function validatePIN (pin) {
//     //return true or false
//     console.log(Number(pin));
//     return pin.match(/^\d+$/) && (pin.length === 4 || pin.length === 6) ? true : false

//     // console.log(pin.length);
// }

const validatePIN = pin => /^(\d{4}|\d{6})$/.test(pin)
  
console.log(validatePIN("1234"))
console.log(validatePIN("1234"))
console.log(validatePIN("-1.234"))
console.log(validatePIN(".234"))
console.log(validatePIN("0000"))