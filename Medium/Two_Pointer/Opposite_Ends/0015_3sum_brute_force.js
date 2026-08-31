const threeSum = (num) => {
    num.sort((a, b) => a - b);
    const res = [];
    if(num.length < 3) return []
    for(let i = 0; i < num.length - 2; i++){
        if( i > 0 && num[i] === num[i - 1]) continue;
        for(let j = i+1; j < num.length - 1; j++){
            if( j > i+1 && num[j] === num[j - 1]) continue;
            for(let k = j+1; k < num.length; k++){
                if( k > j+1 && num[k] === num[k -1]) continue
                let sum = num[i] + num[j] + num[k]
                if(sum === 0){
                    res.push([num[i], num[j], num[k]])
                }
            }
        }
    }
    
    return res
}

const arr = [-1, 0, 1, 2, -1, -4];
console.log(threeSum(arr));