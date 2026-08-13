var longestRepeating = function(s, queryCharacters, queryIndices) {
    let sArr = s.split(''); 
    let result = [];
        
    for(let k = 0; k < queryIndices.length; k++){
        let charToPut = queryCharacters[k];
        let indexToChange = queryIndices[k];
        sArr[indexToChange] = charToPut;
        let maxStreak = 1;
        let currentStreak = 1;
        for (let j = 1; j < sArr.length; j++) {
            if (sArr[j] === sArr[j - 1]) {
                currentStreak++;
            } else {
                currentStreak = 1;
            }
            maxStreak = Math.max(maxStreak, currentStreak);
        }
        result.push(maxStreak);
    }
    return result;
};

/*
Input: s = "abyzz", queryCharacters = "aa", queryIndices = [2,1]
Output: [2,3]
*/

const s = "abyzz";
const queryCharacters = "aa";
const queryIndices = [2,1];

const result = longestRepeating(s, queryCharacters, queryIndices);
console.log(result); // Output: [2,3]