/**
 * Problem: LeetCode 0001 - Two Sum (Brute Force Approach)
 * Category: Arrays / Brute Force
 *
 * Description:
 * Given an array of integers nums and an integer target, return indices of the
 * two numbers such that they add up to target.
 *
 * Approach:
 * - Use two nested loops to check every possible pair (i, j).
 * - If nums[i] + nums[j] === target, return [i, j].
 *
 * Complexity:
 * - Time Complexity: O(N^2) where N is the length of nums.
 * - Space Complexity: O(1) auxiliary memory.
 */

const twoSumBruteForce = (nums, target) => {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
  return [];
};

// Example Test Case
const nums = [2, 7, 11, 15];
const target = 9;
console.log(twoSumBruteForce(nums, target)); // Output: [0, 1]
