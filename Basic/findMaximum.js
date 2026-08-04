function findMinimum(nums){
    if(nums.lenth === 0) return false;
    let max = nums[0];
    for(let i = 1; i <= nums.length; i++){
        if(nums[i] > max){
            max = nums[i]
        }
    }
    return max
}

const nums = [1,6,3];
console.log(findMinimum(nums));