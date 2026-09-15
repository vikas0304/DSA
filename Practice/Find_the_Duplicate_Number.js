const findDuplicate = function(nums) {
    let seen = new Map();
    for(let i = 0; i < nums.length; i++){
        if(seen.has(nums[i])){
            return nums[i]
        }else{
            seen.set(nums[i], i)
        }
    }
}

const nums = [1,3,4,2,2]
console.log(findDuplicate(nums))

// 1. Duplicates separated at the ends
const t1 = [3, 1, 4, 2, 3]; 
// Expected: 3

// 2. Duplicate appears more than twice
const t2 = [2, 2, 2, 2, 2]; 
// Expected: 2

// 3. Duplicate appears 3 times, scattered
const t3 = [1, 4, 4, 2, 4]; 
// Expected: 4

// 4. Minimum possible length (n = 1, length = 2)
const t4 = [1, 1]; 
// Expected: 1

// 5. First two elements are identical
const t5 = [2, 2, 1, 3]; 
// Expected: 2

// 6. Cyclic cross-references with duplicate away from start
const t6 = [2, 5, 9, 6, 9, 3, 8, 9, 7, 1]; 
// Expected: 9