
var smallestNumber = function(n, t) {
    function getDigitProduct(num) {
        let product = 1;
        while (num > 0) {
            let digit = num % 10;
            product *= digit;
            num = Math.floor(num / 10);
        }
        return product;
    }
    while (getDigitProduct(n) % t !== 0) {
        n++;
    }

    return n;
};

const num = 15;
const target = 2;

smallestNumber(num , target)