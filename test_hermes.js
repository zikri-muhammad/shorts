// 1.Input[2,4,6,5,3,1,7,9,10,8]		
// Output[9, 5, 3, 1]	

function outputNumber(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) { 
            result.push(arr[i]);
        }
    }

    const hasilSort = result.sort((a, b) => b - a)

    const hasilAkhir = hasilSort.filter(num => num !== 7)

    return hasilAkhir;
}

console.log(outputNumber([2,4,6,5,3,1,7,9,10,8]))