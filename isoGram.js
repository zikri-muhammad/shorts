function isIsogram(str){
    //...\
    str = str.toLowerCase();
    const letterCount = {}
    for (let index= 0; index < str.length; index++) {
        const element = str[index];
        if (/[a-z]/.test(element)) {
            if (letterCount[element]) {
                return false;
            }
            letterCount[element] = true;
        }
    }
    return true;
}
  
console.log(isIsogram('Dermatoglyphics'));
// console.log(isIsogram('ada'));
console.log(isIsogram('ada'));