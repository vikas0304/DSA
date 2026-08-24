var maximumLengthSubstring = function(s) {
    let charCount = new Map();
    let maxLength = 0;
    let i = 0;
    charCount.set(s[i],(charCount.get(s[i]) || 0) + 1);
    for (let j = 1; j < s.length; j++) {
        let char = s[j];
        charCount.set(char, (charCount.get(char) || 0) + 1);

        while (charCount.get(char) > 2) {
                let leftChar = s[i];
                charCount.set(leftChar, charCount.get(leftChar) - 1);
                i++;
            }
            maxLength = Math.max(maxLength, (j - i + 1));
        
    }
    return maxLength;
};

const s = "bcbbbcba";

console.log(maximumLengthSubstring(s)); // Output : 4. Exp. The following substring has a length of 4 and contains at most two occurrences of each character: "bcbbbcba"