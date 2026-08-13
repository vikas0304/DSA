var sortColors = function(nums) {
    let low = 0;
    let high = nums.length - 1;
    let mid = 0;
    while( mid <= high){
        if(nums[mid] === 0){
            [nums[mid], nums[low]] = [nums[low], nums[mid]];
            low++
            mid++
        }else if(nums[mid] === 2){
            [nums[mid], nums[high]] = [nums[high], nums[mid]];
            high--
        }else{
            mid++
        }
    }
    return nums
};

console.log(sortColors([2,0,2,1,1,0]))
