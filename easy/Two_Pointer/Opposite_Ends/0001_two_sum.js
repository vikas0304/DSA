/**
 * Problem: LeetCode 0001 - Two Sum (Hash Map One-Pass Approach)
 * Category: Hash Table / Arrays
 *
 * Description:
 * Given an array of integers nums and an integer target, return indices of the
 * two numbers such that they add up to target.
 *
 * Approach:
 * - Use a Hash Map to store seen numbers and their corresponding index: Map<number, index>.
 * - For each number, calculate complement = target - nums[i].
 * - If complement exists in the map, return [map.get(complement), i].
 * - Otherwise, store map.set(nums[i], i).
 *
 * Complexity:
 * - Time Complexity: O(N) single pass.
 * - Space Complexity: O(N) to store up to N elements in the map.
 */

const twoSum = (nums, target) => {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    if (map.has(complement)) {
      return [map.get(complement), i];
    }

    map.set(nums[i], i);
  }

  return [];
};

// Example Test Case
const nums = [2, 7, 11, 15];
const target = 9;
console.log(twoSum(nums, target)); // Output: [0, 1]
