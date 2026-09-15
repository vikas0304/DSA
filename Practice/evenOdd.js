function evenOddWithoutwithotIfElse(num) {
    const labels = ["Even", "Odd"];
    return labels[Math.abs(num % 2)];
}