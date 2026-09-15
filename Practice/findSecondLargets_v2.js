var secondLargestNumber = function(nums){
    let n = nums.length;
    let i = 0;
    let max = nums[0];
    let secondMax = -Infinity
    for(let j = 1;j < nums.length; j++){
        if(nums[j] > max){
            secondMax = nums[i];
            max = nums[j];
            i = j;
        }else if(nums[j] < nums[i] && nums[j] > secondMax){
            secondMax = nums[j]
        }
    }
    console.log("Max",max);
    console.log("i",i);

    return secondMax   
}

const nums = [9,4,0,5,10]
console.log(secondLargestNumber(nums))