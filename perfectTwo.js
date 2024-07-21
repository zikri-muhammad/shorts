function perfectTwo(numbers, target) {
	const map = {};
	for (let i = 0; i < numbers.length; i++) {
		const complement = target - numbers[i];
		// console.log(complement);
		if (map.hasOwnProperty(complement)) {
			return [map[complement], i];
		}
		map[numbers[i]] = i;
	}

	return false;
}

console.log(perfectTwo([2, 7, 11, 15], 9));
console.log(perfectTwo([2, 7, 11, 15], 11));
