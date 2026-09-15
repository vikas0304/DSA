var totalNumbers = function(digits) {
    const n = digits.length;
    const uniqueNumbers = new Set();
    for (let i = 0; i < n; i++) {
        if (digits[i] === 0) continue;

        for (let j = 0; j < n; j++) {
            if (j === i) continue;

            for (let k = 0; k < n; k++) {
                if (k === i || k === j) continue;
                if (digits[k] % 2 !== 0) continue;
                const num = digits[i] * 100 + digits[j] * 10 + digits[k];
                uniqueNumbers.add(num);
            }
        }
    }

    return Array.from(uniqueNumbers).sort((a, b) => a - b);
};

const arr = [0,2,2];
const result = totalNumbers(arr);
console.log("Count:", result.length);
console.log("Numbers:", result);

/*

Input: digits = [1,2,3,4]

Output: 12

Explanation: The 12 distinct 3-digit even numbers that can be formed are
124, 132, 134, 142, 214, 234, 312, 314, 324, 342, 412, and 432.
Note that 222 cannot be formed because there is only 1 copy of the digit 2.

*/