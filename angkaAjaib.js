function ankaAjaib(number) {
    if (number === 6174) {
        return 0; 
    }

    function padNumber(num) {
        return num.toString().padStart(4, '0');
    }

    let iterations = 0;
    let currentNumber = padNumber(number);

    while (currentNumber !== '6174') {
        iterations++;

        let digits = currentNumber.split('');
        let ascending = parseInt(digits.slice().sort().join(''));
        let descending = parseInt(digits.slice().sort((a, b) => b - a).join(''));

        let difference = descending - ascending;

        currentNumber = padNumber(difference);
    }

    return iterations;
}

// console.log(ankaAjaib(3124)); 
// console.log(ankaAjaib(9999)); 
// console.log(ankaAjaib(6174)); 
console.log(ankaAjaib(5432)); 