var threeSumClosest = function(nums, target) {
    let closestSum = Infinity;
    nums.sort((a, b) => a - b);
    let n = nums.length;
    for (let i = 0; i < n - 2; i++) {
        for (let j = i + 1; j < n - 1; j++) {
            for (let k = j + 1; k < n; k++) {
                const currentSum = nums[i] + nums[j] + nums[k];
                if (Math.abs(currentSum - target) < Math.abs(closestSum - target)) {
                    closestSum = currentSum;
                }
            }
        }
    }
    return closestSum;
};
const nums = [-1,2,1,-4], target = 1
console.log(threeSumClosest(nums,target));

/*

Example 1:
Input: nums = [-1,2,1,-4], target = 1
Output: 2
Explanation: The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).

Example 2:
Input: nums = [0,0,0], target = 1
Output: 0
Explanation: The sum that is closest to the target is 0. (0 + 0 + 0 = 0).

Example 3: (Target much smaller than any available sum)
Input: nums = [1, 1, 1, 0], target = -100
Output: 2
Explanation: The smallest possible triplet sum is 0 + 1 + 1 = 2, which has the minimum distance |2 - (-100)| = 102.

Example 4: (Target much larger than any available sum)
Input: nums = [1, 2, 3, 4], target = 100
Output: 9
Explanation: The largest possible triplet sum is 2 + 3 + 4 = 9, which is closest to 100.

Example 5: (All negative numbers with negative target)
Input: nums = [-5, -4, -3, -2, -1], target = -10
Output: -10
Explanation: The triplet -5 + (-3) + (-2) = -10 matches the target exactly.

Example 6: (Tie-breaker case / Equidistant sums)
Input: nums = [1, 2, 4, 8, 16], target = 0
Output: 7
Explanation: The minimum triplet sum is 1 + 2 + 4 = 7, with distance |7 - 0| = 7.

Example 7: (Minimum constraint size: exactly 3 elements)
Input: nums = [4, 0, 5], target = 8
Output: 9
Explanation: The only available triplet is 4 + 0 + 5 = 9.

*/