function programmerIt(input, dictionary) {
    const n = input.length;
    const dp = Array(n + 1).fill().map(() => []);
    dp[0] = [[]];

    for (let i = 1; i <= n; i++) {
        for (let j = i - 1; j >= 0; j--) {
            let word = input.slice(j, i);
            if (dictionary.includes(word)) {
                for (let seg of dp[j]) {
                    dp[i].push([...seg, word]);
                }
            }
        }
    }

    return dp[n].map(a => a.join(', '));
}

const input = "programmerit";
const dictionary = ['pro', 'gram', 'merit', 'program', 'it', 'programmer'];

const segmentations = programmerIt(input, dictionary);
console.log(segmentations);
