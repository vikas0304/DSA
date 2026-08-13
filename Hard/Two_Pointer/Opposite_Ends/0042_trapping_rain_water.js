var trap = function(height) {
    let n = height.length;
    if (n === 0) return 0;
    
    let leftMax = new Array(n);
    leftMax[0] = height[0];
    for (let i = 1; i < n; i++) {
        leftMax[i] = Math.max(leftMax[i - 1], height[i]);
    }
    
    let rightMax = new Array(n);
    rightMax[n-1] = height[n-1];
    for (let i = n - 2; i >= 0; i--) {
        rightMax[i] = Math.max(rightMax[i + 1], height[i]);
    }

    let totalWater = 0;
    for (let i = 0; i < n; i++) {
        const boundary = Math.min(leftMax[i], rightMax[i]);
        totalWater += boundary - height[i];
    }

    return totalWater;
};

const height = [0,1,0,2,1,0,1,3,2,1,2,1]
console.log(trap(height))