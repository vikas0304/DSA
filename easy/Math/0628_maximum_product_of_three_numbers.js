var maximumProduct = function(nums) {
    let max = -Infinity;
    for(let i = 0; i < nums.length; i++){
        for(let j = i+1; j < nums.length; j++){
            for(let k = j+1; k<= nums.length; k++){
                let product = nums[i] * nums[j] * nums[k];
                if( product > max){
                    max = product
                }
            }
        }
    }
    return max
};


const nums = [-1,-2,-3];
console.log(maximumProduct(nums))