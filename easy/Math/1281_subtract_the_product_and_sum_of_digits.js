/**
 * @param {number} n
 * @return {number}

var subtractProductAndSum = function(n) {
    let num = String(n).split('').map(n => Number(n));
    let sum = num.reduce((acc, crr) => acc + crr, 0);
    let product = num.reduce((acc, crr) => acc * crr, 1);
    return product - sum;
}
 */

var subtractProductAndSum = function(n){
    let product = 1;
    let sum = 0;
    while(n > 0){
        let digit = n % 10;
        product *= digit;
        sum += digit;
        n = Math.floor(n / 10)
        console.log("sum" , sum)
    }
    return product - sum
}

// To get the last Number or Digit we use modulus of 10;

console.log(subtractProductAndSum(489))