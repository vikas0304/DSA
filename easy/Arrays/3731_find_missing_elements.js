var findMissingElements = function(nums) {
    let min = nums[0];
    for(let i = 1; i <= nums.length; i++){
        if(nums[i] < min){
            min = nums[i]
        }
    }
    let max = nums[0];
    for(let i = 1; i <= nums.length; i++){
        if(nums[i] > max){
            max = nums[i]
        }
    }
    console.log("Min" , min)
    console.log("Max" , max)
    let missing = [];
    for( let i = min; i <= max; i++){
        if(!nums.includes(i)){
            missing.push(i)
        }
    }
    return missing
};

const nums = [1,6,3];
console.log(findMissingElements(nums));