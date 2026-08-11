var missingInteger = function(nums) {
    let prefixSumArray = new Array();
    for(let i = 0; i < nums.length; i++){
        if(i === 0 || nums[i] === nums[i - 1] + 1){
            prefixSumArray.push(nums[i])
        }
        else{
            break
        }
    }
    let sum = [...prefixSumArray].reduce((acc, val) => acc + val, 0);
    while(nums.includes(sum)){
        sum++
    }

    return sum
};

console.log(missingInteger([3,4,5,1,12,14,13]))