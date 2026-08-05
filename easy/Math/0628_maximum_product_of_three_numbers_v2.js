var maximumProduct = function(nums) {
    const n = nums.length;
    let sortedArray = nums.sort((a,b) => b - a);
    console.log("SortedArray",sortedArray)
    let option1 = nums[0] *  nums[1] * nums[2];
    let option2 = nums[n - 1] * nums[n - 2] * nums[0];
    return Math.max(option1, option2)
};


const nums = [-1,-2,-3,8];
console.log(maximumProduct(nums))