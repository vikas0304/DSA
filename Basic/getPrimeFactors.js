function getPrimeFactors(t){
    let counts = { 2: 0, 3: 0, 5: 0, 7: 0 };

    while (t % 2 === 0) {
        counts[2]++;
        t /= 2;
    }

    while (t % 3 === 0) {
        counts[3]++;
        t /= 3;
    }

    while (t % 5 === 0) {
        counts[5]++;
        t /= 5;
    }

    while (t % 7 === 0) {
        counts[7]++;
        t /= 7;
    }

    if( t > 1){
        return null
    }

    return counts;
}

console.log(getPrimeFactors(42))