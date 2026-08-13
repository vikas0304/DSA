function getDigitProduct(num) {
    let product = 1;
    while (num > 0) {
        let digit = num % 10;
        console.log("Digit" , digit)
        product *= digit;
        console.log("Product" , product)
        num = Math.floor(num / 10);
        console.log("Remaining" , num)
    }
    return product;
}

let number = "12345";
console.log(getDigitProduct(number)); // Output: 120

/*
1 loop: Digit 5
1 loop: Product 5
1 loop: Remaining 1234
3 loop: Digit 4
3 loop: Product 20
3 loop: Remaining 123
3 loop: Digit 3
3 loop: Product 60
3 loop: Remaining 12
4 loop: Digit 2
4 loop: Product 120
4 loop: Remaining 1
5 loop: Digit 1
5 loop: Product 120
5 loop: Remaining 0

    Final Answer: 120
*/