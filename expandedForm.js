function expandedForm(num) {
    // Your code here\
    let stringNum = num.toString()
    let result = []

    for (let index = 0; index < stringNum.length; index++) {
        const element = Number(stringNum[index]);
        console.log(element);
        if (element != 0) {
            console.log(stringNum.length - index);
            let placeValue = Math.pow(10, stringNum.length - index - 1)
            result.push(element * placeValue)
        }        
    }
    return result.join(" + ")
}
  
console.log(expandedForm(123));