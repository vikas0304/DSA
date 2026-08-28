/**
 * Problem: LeetCode 0040 - Combination Sum II
 * Category: Backtracking / Recursion / Array
 *
 * Description:
 * Given a collection of candidate numbers (candidates) and a target number (target),
 * find all unique combinations in candidates where the candidate numbers sum to target.
 * Each number in candidates may only be used once in the combination.
 * The solution set must not contain duplicate combinations.
 *
 * Approach:
 * 1. Sort `candidates` ascending so duplicate numbers sit adjacent and pruning works.
 * 2. Use recursive backtracking with `(startIndex, currentCombination, remainingTarget)`:
 *    - Base Case: if remainingTarget === 0, record a copy of currentCombination.
 *    - Loop i from startIndex to candidates.length - 1:
 *      a. Pruning: if candidates[i] > remainingTarget, break out (all following items are bigger).
 *      b. Skip Duplicates: if i > startIndex && candidates[i] === candidates[i - 1], continue.
 *      c. Choose: push candidates[i].
 *      d. Explore: backtrack(i + 1, currentCombination, remainingTarget - candidates[i]).
 *      e. Backtrack: pop candidates[i].
 *
 * Complexity:
 * - Time Complexity: O(2^N) in the worst case (exploring subsets), pruned significantly by sorting.
 * - Space Complexity: O(N) call stack depth for recursion + space for output combinations.
 */

const combinationSum2 = (candidates, target) => {
  const result = [];
  candidates.sort((a, b) => a - b);

  function backtrack(startIndex, currentCombo, remainingTarget) {
    if (remainingTarget === 0) {
      result.push([...currentCombo]);
      return;
    }

    for (let i = startIndex; i < candidates.length; i++) {
      // Early stopping since array is sorted
      if (candidates[i] > remainingTarget) break;

      // Avoid picking the duplicate value at the exact same decision depth
      if (i > startIndex && candidates[i] === candidates[i - 1]) continue;

      currentCombo.push(candidates[i]);
      backtrack(i + 1, currentCombo, remainingTarget - candidates[i]);
      currentCombo.pop();
    }
  }

  backtrack(0, [], target);
  return result;
};

// Example Test Case
const candidates = [10, 1, 2, 7, 6, 1, 5];
const target = 8;
console.log(combinationSum2(candidates, target));
// Output: [ [ 1, 1, 6 ], [ 1, 2, 5 ], [ 1, 7 ], [ 2, 6 ] ]
