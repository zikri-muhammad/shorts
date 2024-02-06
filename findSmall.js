function findSmallestInt(args) {
    // let small = args[0]
    // for (let i = 0; i  < args.length; i++) {
    //     const element = args[i];
    //     if (element < small) {
    //         small = args[i]
    //     }
    // }
    // return small
    // return Math.min(...args)
    return args.sort((a,b) => a - b)[0]
}

console.log(findSmallestInt([77,9,83,3,5]))
console.log(findSmallestInt([77,59,3,3,5]))
console.log(findSmallestInt([7,9,83,3,5]))