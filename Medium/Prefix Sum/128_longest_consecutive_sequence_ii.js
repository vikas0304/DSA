var longestConsecutive = function(nums) {
    if(nums.length === 0) return 0
    let numSet = new Set(nums);
    let maxStream = 1;
    for(let num of numSet){
        if(!numSet.has(num - 1)){
            let currentNum = num;
            let currentStreak = 1;
            while(numSet.has(currentNum + 1)){
                currentNum += 1;
                currentStreak += 1;
            }
            maxStream = Math.max(maxStream, currentStreak);
        }
    }
    return maxStream;
};

console.log(longestConsecutive([100,4,200,1,3,2]))