var fourSum = function (nums, target) {
  nums.sort((a, b) => a - b);
  if (n < 4) return [];
  let res = [];
  let n = nums.length;
  for (let i = 0; i < n - 3; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    for (let j = i + 1; j < n - 2; j++) {
      if (j > i + 1 && nums[j] === nums[j - 1]) continue;
      let left = j + 1;
      let right = n - 1;
      while (left < right) {
        const sum = nums[i] + nums[j] + nums[left] + nums[right];
        if (sum === target) {
          res.push([nums[i], nums[j], nums[left], nums[right]]);
          while (left < right && nums[left] === nums[left + 1]) left++;
          while (left < right && nums[right] === nums[right - 1]) right--;
          left++;
          right--;
        } else if (sum < target) {
          while (left < right && nums[left] === nums[left + 1]) left++;
          left++;
        } else {
          while (left < right && nums[right] === nums[right - 1]) right--;
          right--;
        }
      }
    }
  }

  return res;
};

let nums = [1, 0, -1, 0, -2, 2],
  target = 0;
console.log(fourSum(nums, target));

/*

Example 1:
Input: nums = [1,0,-1,0,-2,2], target = 0
Output: [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]

Example 2:
Input: nums = [2,2,2,2,2], target = 8
Output: [[2,2,2,2]]

*/
