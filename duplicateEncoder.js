function duplicateEncode(word) {
    word  = word.toLowerCase()
    let str = ""
    for (let i = 0; i < word.length; i++) {
        const element = word[i];
        const condisi = word.lastIndexOf(element) === word.indexOf(element);
        console.log(condisi);
        if (condisi) {
            str += '('
        } else {
            str += ')'
        }
    }

    return str
}


console.log(duplicateEncode("rin"));
console.log(duplicateEncode("recede"));
console.log(duplicateEncode("Success"));
console.log(duplicateEncode("(( @"));
console.log(duplicateEncode("Supralapsarian"));