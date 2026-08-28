/**
 * Problem: LeetCode 0001 - Two Sum (Sort + Two Pointers with Index Mapping)
 * Category: Two Pointer / Opposite Ends / Sorting
 *
 * Description:
 * Given an unsorted array, solve Two Sum using Two Pointers by preserving original indices.
 *
 * Approach:
 * - Map each element to an object storing its original index: { val: num, index: i }.
 * - Sort the mapped array in ascending order by value.
 * - Place `left = 0` and `right = arr.length - 1`.
 * - If sum === target, return [mapped[left].index, mapped[right].index].
 * - If sum > target, decrement right--.
 * - If sum < target, increment left++.
 *
 * Complexity:
 * - Time Complexity: O(N log N) due to sorting.
 * - Space Complexity: O(N) to store original index mappings.
 */

const twoSumV2 = (nums, target) => {
  const indexedNums = nums.map((val, index) => ({ val, index }));

  // Sort ascending by value
  indexedNums.sort((a, b) => a.val - b.val);

  let left = 0;
  let right = indexedNums.length - 1;

  while (left < right) {
    const sum = indexedNums[left].val + indexedNums[right].val;

    if (sum === target) {
      return [indexedNums[left].index, indexedNums[right].index];
    } else if (sum > target) {
      right--;
    } else {
      left++;
    }
  }

  return [];
};

// Example Test Case
const nums = [3, 2, 4];
const target = 6;
console.log(twoSumV2(nums, target)); // Output: [1, 2] (values 2 and 4)
