function accum(s) {
    // your code
    let str = []
    for (let i = 0; i < s.length; i++) {
        const element = s[i];
        console.log(element);
        let part = s[i].toUpperCase() + s[i].toLowerCase().repeat(i)
        console.log(part);
        
        str.push(part)
    }
    return str.join('-')
}

console.log(accum('abc'));