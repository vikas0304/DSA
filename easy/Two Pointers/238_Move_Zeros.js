var moveZeroes = function(nums) {
    // nums = [1,3,0,12,0]
    let i = 0;
    for(let j = 0; j < nums.length; j++){
        if(nums[j] !== 0){
            let temp = nums[i];
            nums[i] = nums[j];
            nums[j] = temp;
            i++
        }
    }
};


/*
Example 1:

Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]
Example 2:

Input: nums = [0]
Output: [0]
*/

const nums = [1, 3, 0, 12, 0];
moveZeroes(nums);
console.log(nums)