function sortArray(array) {
	// Return a sorted array.\
    const oddNumbers = array.filter(num => num % 2 !== 0).sort((a, b) => a - b);
    return array.map(num => {
        if (num % 2 !== 0) {
            return oddNumbers.shift();
        }
        return num;
    });
}

// console.log(sortArray([7,1]));
console.log(sortArray([5, 8, 6, 3, 4]));
