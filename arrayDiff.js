function arrayDiff(a, b) {
    // let arry = []
    // let diff = 0
    // for (let i = 0; i < a.length; i++) {
    //     const element = a.includes(b[i]);
    //     console.log(element)
    //     if (element == true) {
    //         arry.push(a[i])
            
    //     } <
        
    // }
    // return arry
    return a.filter(element => !b.includes(element));
}


// console.log(arrayDiff([1,2], [2]))
console.log(arrayDiff([1,2,2,2,3],[2]))
console.log(arrayDiff([1,2,3],[1,2]))
// console.log(arrayDiff([1,2,2],[2]))
// console.log(arrayDiff([1,2,2],[]))
// console.log(arrayDiff([1,2,2,2,3],[2]))