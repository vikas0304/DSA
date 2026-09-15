function evenOddWithoutwithotIfElse(num) {
    const labels = ["Even", "Odd"];
    return labels[Math.abs(num % 2)];
}

console.log(evenOddWithoutwithotIfElse(23));


