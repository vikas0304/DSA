var sortedSquares = function(nums) {
    // return nums.map((x) => x*x).sort((a,b) => a- b)
    let left = 0;
    let right = nums.length - 1;
    let result = new Array(nums.length);
    let pos = nums.length -1;
    while(left <= right){
        let leftSquare = nums[left] * nums[left];
        let rightSquare = nums[right] * nums[right];
        if (leftSquare > rightSquare) {
            result[pos] = leftSquare;
            left++;
        } else {
            result[pos] = rightSquare;
            right--;
        }
        pos--;
    }
    return result
};

/*
Input: nums = [-4,-1,0,3,10]
Output: [0,1,9,16,100]
Explanation: After squaring, the array becomes [16,1,0,9,100].
After sorting, it becomes [0,1,9,16,100].
*/

console.log(sortedSquares([-4,-1,0,3,10]))