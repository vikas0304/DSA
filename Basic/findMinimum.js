function findMinimum(nums){
    if(nums.lenth === 0) return false;
    let min = nums[0];
    for(let i = 1; i <= nums.length; i++){
        if(nums[i] < min){
            min = nums[i]
        }
    }
    return min
}

const nums = [5,8,1,9,3,0,15];
console.log(findMinimum(nums));