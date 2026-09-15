var removeDuplicates = function(nums) {
    if(nums.length <= 2) return nums.length;
    let k = 2;
    for(let i = 2; i < nums.length; i++){
        if(nums[i] !== nums[k - 2]){
            nums[k] = nums[i];
            k++;    
        }
    }

    return k
};

const nums = [0,0,1,1,1,2,2,3,3,4];
console.log(removeDuplicates(nums))

/*

Example 1:
Input: nums = [1,1,2]
Output: 2, nums = [1,2,_]

Example 2:
Input: nums = [0,0,1,1,1,2,2,3,3,4]
Output: 5, nums = [0,1,2,3,4,_,_,_,_]

*/