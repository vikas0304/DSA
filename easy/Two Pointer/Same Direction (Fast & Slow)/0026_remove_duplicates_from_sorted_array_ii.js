var removeDuplicates = function(nums) {
    let newArray= [];
    newArray.push(nums[0]);
    for( let i = 0; i < nums.length; i++){
        if(!newArray.includes(nums[i])){
            newArray.push(nums[i])
        }
    }
    return newArray.length;
};

const num = [0,0,1,1,1,2,2,3,3,4]
console.log(removeDuplicates(num))