var secondLargestNumber = function(nums){
   if(nums.lenth === 0) return false;
    let max = nums[0];
    let maxIndex = 0;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > max) {
            max = nums[i];
            maxIndex = i;
        }
    }
    console.log(max);
    console.log("Index", maxIndex)
    nums.splice(maxIndex, 1);

    let secondMax = nums[0];
    for(let i = 1; i <= nums.length; i++){
        if(nums[i] > secondMax){
            secondMax = nums[i]
        }
    }
    return secondMax
}

const nums = [1,10,7,5,3]
console.log(secondLargestNumber(nums))