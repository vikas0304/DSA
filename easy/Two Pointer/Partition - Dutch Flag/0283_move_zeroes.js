const moveZeros = function(nums){
    let i = 0;
    for (let j = 0; j < nums.length; j++) {
        if(nums[j] !== 0){
            [nums[j] , nums[i]] = [nums[i] , nums[j]];
            i++
        }
    }
}


/*
Example 1:

Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]
Example 2:

Input: nums = [0]
Output: [0]
*/

const nums = [1, 3, 0, 12, 0];
moveZeros(nums);
console.log(nums)