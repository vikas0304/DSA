var smallestNumber = function(num, t) {
    function getPrimeFactors(target) {
        let counts = { 2: 0, 3: 0, 5: 0, 7: 0 };
        
        while (target % 2 === 0) { counts[2]++; target /= 2; }
        while (target % 3 === 0) { counts[3]++; target /= 3; }
        while (target % 5 === 0) { counts[5]++; target /= 5; }
        while (target % 7 === 0) { counts[7]++; target /= 7; }
        
        if (target > 1) return null;
        return counts;
    }

    function getDigitFactors(d) {
        let f = { 2: 0, 3: 0, 5: 0, 7: 0 };
        if (d === 2) f[2] = 1;
        else if (d === 3) f[3] = 1;
        else if (d === 4) f[2] = 2;
        else if (d === 5) f[5] = 1;
        else if (d === 6) { f[2] = 1; f[3] = 1; }
        else if (d === 7) f[7] = 1;
        else if (d === 8) f[2] = 3;
        else if (d === 9) f[3] = 2;
        return f;
    }

    function countsToDigits(c2, c3, c5, c7) {
        let digits = [];
        
        while (c3 >= 2) { digits.push(9); c3 -= 2; }
        while (c2 >= 3) { digits.push(8); c2 -= 3; }
        while (c7 >= 1) { digits.push(7); c7 -= 1; }
        while (c3 >= 1 && c2 >= 1) { digits.push(6); c3 -= 1; c2 -= 1; }
        while (c5 >= 1) { digits.push(5); c5 -= 1; }
        while (c2 >= 2) { digits.push(4); c2 -= 2; }
        while (c3 >= 1) { digits.push(3); c3 -= 1; }
        while (c2 >= 1) { digits.push(2); c2 -= 1; }
        
        digits.sort((a, b) => a - b);
        return digits;
    }

    const targetCounts = getPrimeFactors(t);
    if (targetCounts === null) return "-1";

    const N = num.length;

    let firstZeroIdx = num.indexOf('0');

    let pref2 = new Array(N + 1).fill(0);
    let pref3 = new Array(N + 1).fill(0);
    let pref5 = new Array(N + 1).fill(0);
    let pref7 = new Array(N + 1).fill(0);

    for (let i = 0; i < N; i++) {
        if (firstZeroIdx !== -1 && i > firstZeroIdx) break;
        let d = num.charCodeAt(i) - 48;
        let f = getDigitFactors(d);
        
        pref2[i + 1] = pref2[i] + f[2];
        pref3[i + 1] = pref3[i] + f[3];
        pref5[i + 1] = pref5[i] + f[5];
        pref7[i + 1] = pref7[i] + f[7];
    }

    if (firstZeroIdx === -1) {
        if (pref2[N] >= targetCounts[2] && 
            pref3[N] >= targetCounts[3] && 
            pref5[N] >= targetCounts[5] && 
            pref7[N] >= targetCounts[7]) {
            return num;
        }
    }

    for (let i = N - 1; i >= 0; i--) {
        if (firstZeroIdx !== -1 && i > firstZeroIdx) continue;

        let curDigit = num.charCodeAt(i) - 48;

        // Factors needed after prefix num[0...i-1]
        let rem2 = Math.max(0, targetCounts[2] - pref2[i]);
        let rem3 = Math.max(0, targetCounts[3] - pref3[i]);
        let rem5 = Math.max(0, targetCounts[5] - pref5[i]);
        let rem7 = Math.max(0, targetCounts[7] - pref7[i]);

        for (let d = curDigit + 1; d <= 9; d++) {
            let df = getDigitFactors(d);
            
            let req2 = Math.max(0, rem2 - df[2]);
            let req3 = Math.max(0, rem3 - df[3]);
            let req5 = Math.max(0, rem5 - df[5]);
            let req7 = Math.max(0, rem7 - df[7]);

            let neededDigits = countsToDigits(req2, req3, req5, req7);
            let availableSlots = N - 1 - i;

            if (neededDigits.length <= availableSlots) {
                let prefix = num.substring(0, i) + d;
                let onesCount = availableSlots - neededDigits.length;
                let suffix = "1".repeat(onesCount) + neededDigits.join("");
                
                return prefix + suffix;
            }
        }
    }

    let minDigits = countsToDigits(
        targetCounts[2], 
        targetCounts[3], 
        targetCounts[5], 
        targetCounts[7]
    );
    
    let targetLength = Math.max(N + 1, minDigits.length);
    let onesCount = targetLength - minDigits.length;
    
    return "1".repeat(onesCount) + minDigits.join("");
};