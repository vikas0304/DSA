var findGCD = function(nums) {
    let min = Math.min(...nums);
    let max = Math.max(...nums)

    if(min === max) return min;

    for(let j = min; j >= 1; j--){
        if(min % j === 0 && max % j === 0){
            return j
        }
    }
};

const nums = [7,5,6,8,3]
console.log(findGCD(nums)); // Output : 2. Exp. The smallest number in nums is 2. The largest number in nums is 10. The greatest common divisor of 2 and 10 is 2.


/*

Example 1:
Input: nums = [2,5,6,9,10]
Output: 2
Explanation:
The smallest number in nums is 2.
The largest number in nums is 10.
The greatest common divisor of 2 and 10 is 2.

Example 2:
Input: nums = [7,5,6,8,3]
Output: 1
Explanation:
The smallest number in nums is 3.
The largest number in nums is 8.
The greatest common divisor of 3 and 8 is 1.

*/