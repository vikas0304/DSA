var smallestNumber = function(num, t) {
    function getDigitProduct(num) {
        let product = 1;
        while(num > 0){
            let digit = num % 10;
            if (digit === 0) return 0;
            product *= digit;
            num = Math.floor(num / 10);
        }
        return product;
    }

    let current = Number(num);

    while(current < 1e9){
        let product = getDigitProduct(current);
        if(product > 0 && product % t === 0){
            return current.toString();
        }
        current++
    }
    return "-1"
};

const target = 256;
const nums = "1234";
console.log(smallestNumber(nums, target))