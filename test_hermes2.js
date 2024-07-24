// 2.Input	aaabbcccaaaac		
// Output	"a = 3 
// b = 2 
// c = 3 
// a = 4 
// c = 1"	

function countCarakter(c) {
    let hasilStr = ''
    let count = 0;
    let current = c[0]
    console.log(current)
    for (let i = 0; i < c.length; i++) { 
        console.log(c[i])
        if (c[i] === current) { 
            count++;
        } else {
            hasilStr += `${current} = ${count} `
            current = c[i]
            count = 1
        }
    }
    return hasilStr;
}

console.log(countCarakter('aaabbcccaaaac'))