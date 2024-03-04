function count(string) {
    // TODO
    if(!string) return {}
    let result = {}
    for (let index = 0; index < string.length; index++) {
        const element = string[index];
        console.log((result[element] || 0) + 1);
        result[element] = (result[element] || 0) + 1
    }

    return result;
    
}
  
console.log(count('abb'));