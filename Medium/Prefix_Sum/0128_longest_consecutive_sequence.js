var longestConsecutive = function(nums) {
    if(nums.length === 0) return 0
    nums.sort((a,b) => a-b);
    let maxStreak = 1;
    let currentStreak = 1;
    console.log(nums)
    for(let i = 1; i < nums.length; i++){
        if(nums[i] === nums[i - 1]){
            continue
        }else if(nums[i] === nums[i -1] + 1){
            currentStreak++
        }else{
            maxStreak = Math.max(maxStreak, currentStreak);
            currentStreak = 1;
        }
    }
    return Math.max(maxStreak, currentStreak)
};

console.log(longestConsecutive([100,4,200,1,3,2]))