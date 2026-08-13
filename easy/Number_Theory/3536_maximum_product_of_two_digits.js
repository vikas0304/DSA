var maxProduct = function(n) {
    let array = Array.from(String(n) , Number);
    console.log(array)
    let max = 0;
    for(let i = 0; i < array.length; i++){
        for(let j = i+1; j < array.length; j++){
            let product = array[i] * array[j];
            if( product > max){
                max = product
            }
        }
    }
    return max
};

const num = 31;
console.log(maxProduct(num))