var twoSum = function(numbers, target){
    let left = 0;
    let right = numbers.length -1;
    while(left < right){
        let currentSum = numbers[left] + numbers[right];
        if(currentSum === target){
            return [left + 1, right+1]
        }else if(currentSum > target){
            right--
        }else{
            left++
        }
    }
}

/*
Input: numbers = [2,7,11,15], target = 9
Output: [1,2]
Explanation: The sum of 2 and 7 is 9. Therefore, index1 = 1, index2 = 2. We return [1, 2].
*/

console.log(twoSum([2,7,11,15],13))