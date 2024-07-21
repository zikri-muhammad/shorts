function findDivisorOfNAndM(n, m) {
    // Menemukan Faktor Persekutuan Terbesar (GCD)
    let gcdValue = gcd(n, m);

    // Menemukan semua faktor yang merupakan bilangan bulat positif
    let divisors = [];
    for (let i = 1; i <= Math.sqrt(gcdValue); i++) {
        if (gcdValue % i === 0) {
            divisors.push(i);
            if (i !== gcdValue / i) {
                divisors.push(gcdValue / i);
            }
        }
    }

    return divisors.length;
}

// Fungsi untuk mencari Faktor Persekutuan Terbesar (GCD) dengan algoritma Euclidean
function gcd(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

const n = 8;
const m = 12;
const divisors = findDivisorOfNAndM(n, m);
console.log("Bilangan bulat positif yang habis membagi n dan m:", divisors);