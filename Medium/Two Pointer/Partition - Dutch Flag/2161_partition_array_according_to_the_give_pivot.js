var pivotArray = function(nums, pivot) {
    let less = [];
    let equal = [];
    let greater = [];
    for(let i = 0; i < nums.length; i++){
        if(nums[i] < pivot){
            less.push(nums[i])
        }
        if(nums[i] === pivot){
            equal.push(nums[i]);
        }
        if(nums[i] > pivot){
            greater.push(nums[i])
        }
    }

    return [...less, ...equal, ...greater]
};
const array = [9,12,5,10,14,3,10], pivot = 10;
console.log(pivotArray(array, pivot));
/*
Input: array = [9,12,5,10,14,3,10], pivot = 10
Output: [9,5,3,10,10,12,14]
*/