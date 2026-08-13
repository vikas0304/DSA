var missingInteger = function(nums) {
    let prefixSum = nums[0];
    for(let i = 1; i < nums.length; i++){
        if(nums[i] === nums[i-1] + 1){
            prefixSum += nums[i]
        }else{
            break
        }
    }
    console.log("PrefixSum Before" , prefixSum)
    let numSet = new Set(nums)
    while(numSet.has(prefixSum)){
        prefixSum++
    }
    return prefixSum;
};

console.log(missingInteger([4,5,6,7,8,8,9,4,3,2,7]))