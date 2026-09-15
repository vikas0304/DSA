const findSecondLargetsNuberDuplicate = () => {
    let i = 0;
    let max = -Infinity;
    let secondMax = -Infinity;
    for(let j = 0; j < nums.length; j++){
        if(nums[j] > nums[i]){
            secondMax = nums[i];
            max = nums[j];
            i = j;
        }else if(nums[j] <= nums[i] && nums[j] > secondMax){
            secondMax = nums[j]
        }
    }
    return secondMax
}


const nums = [1,10,7,7,5,3,3]
console.log(findSecondLargetsNuberDuplicate(nums));