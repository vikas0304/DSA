var checkDivisibility = function(n) {
    const digits = String(n).split('').map(Number);
    const sum = digits.reduce((acc, digit) => acc + digit, 0);
    const product = digits.reduce((acc, digit) => acc * digit, 1);
    return n % (sum + product) == 0
};

const nums = 23;
console.log(checkDivisibility(nums));

/*

Input: n = 99
Output: true
Explanation:
Since 99 is divisible by 
the sum (9 + 9 = 18) plus product (9 * 9 = 81) of its digits (total 99), 
the output is true.

Input: n = 23
Output: false
Explanation:
Since 23 is not divisible by the sum (2 + 3 = 5) plus 
product (2 * 3 = 6) of its digits (total 11), the output is false.

*/