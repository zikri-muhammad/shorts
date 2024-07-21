function jualBeliSaham(arr) {
    if (arr.length < 2) {
        return "Harga selalu turun";
    }
    
    let min = arr[0];
    let max = 0;
    
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        } else {
            let currentProfit = arr[i] - min;
            if (currentProfit > max) {
                max = currentProfit;
            }
        }
    }
    
    if (max === 0) {
        return "Harga selalu turun";
    }
    
    return max;
}


console.log(jualBeliSaham([5, 6, 15, 3, 10, 22, 15]))
console.log(jualBeliSaham([10, 15, 8, 7, 14]))
console.log(jualBeliSaham([100, 90, 80, 75, 65]))