function origami(n) {
    const initiasi = 20

    const witdh = initiasi / Math.pow(2, n)
    const height = initiasi / Math.pow(2, n)

    return [witdh, height] 
}

console.log(origami(0))
console.log(origami(1))
console.log(origami(3))
console.log(origami(4))