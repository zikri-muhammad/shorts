function palindromeTerbesar(n) {
	if (n < 1 || n > 4) {
		return 'Invalid input. n should be between 1 and 4 inclusive.';
	}

	let max = Math.pow(10, n) - 1;
	let min = Math.pow(10, n - 1);

	let maxPalindrome = 0;

	for (let i = max; i >= min; i--) {
		for (let j = i; j >= min; j--) {
			let product = i * j;
			if (isPalindrome(product) && product > maxPalindrome) {
				maxPalindrome = product;
			}
		}
	}

	return maxPalindrome;
}


function isPalindrome(num) {
	let originalNum = num;
	let reversedNum = 0;

	while (originalNum > 0) {
		reversedNum = reversedNum * 10 + (originalNum % 10);
		originalNum = Math.floor(originalNum / 10);
	}

	return num === reversedNum;
}

console.log(palindromeTerbesar(2)); 
console.log(palindromeTerbesar(3)); 
