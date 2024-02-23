function highAndLow(numbers){
    // ...\
    let num = numbers.split(" ")
    // console.log(num);
    let sort = num.sort((a, b) => a - b)
    console.log(sort[num - 1]);
    return `${sort[sort.length - 1]} ${sort[0]}`
    // for (let index = 0; index < num.length; index++) {
    //     const element = num[index];
    //     // let nums = Number(element);
    //     let nums = element.sort((a, b) => a - b) 
    //     console.log(nums[i]);
    // }
    // return `${Math.max(...num)} ${Math.min(...num)}` 
}

console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"));