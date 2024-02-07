function isValidWalk(walk) {
    //insert brilliant code here
    let str = walk[0]
    console.log(str);
    for (let i = 0; i < walk.length; i++) {
        const element = walk[i];
        console.log(element);
        if (walk[i] !== str && walk.length === 10) {
            console.log(walk[i]);
            return true
        }
    }
    return false
    // if (walk.length === 10) {
    //     return true
    // }
    // return false
}
  
// console.log(isValidWalk(['n','s','n','s','n','s','n','s','n','s']));
// console.log(isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e']));
// console.log(isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e']));
console.log(isValidWalk(['n','n','n','s','n','s','n','s','n','s']));