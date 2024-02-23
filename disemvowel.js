function disemvowel(str) {
    let vowel = ['a', 'i', 'u', 'e', 'o', 'A', 'I', 'U', 'E', 'O'];
    let str1 = ''
    for (let i = 0; i < str.length; i++) {
        const element = str[i];     
        console.log(element);
        if (!vowel.includes(element)) {
            str1 += element
        }
    }
    return str1

    // return str.replace(/[aeiou]/gi, '');
}
console.log(disemvowel('Ths wbst s fr lsrs LOL!'))
console.log(disemvowel('ohOH uevycdijAHBwjeQpa WREJSeAAmuru iqaflGllKTaOxOLvYZ buQAeeiDykmYHIiMOV pCNhCGMzZFhAVse cKsaro nmaAJvJ hPHUxUNEasoAt ONvqcFoxf'))
// Ths wbst s fr lsrs LL!