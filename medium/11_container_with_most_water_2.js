var maxArea = function(height) {
    let maxValue = 0;

    for (let left = 0; left < height.length; left++) {
    
        for (let right = left + 1; right < height.length; right++) {
            
            let width = right - left;
            let minHeight = Math.min(height[left], height[right]);
            let area = width * minHeight;
            maxValue = Math.max(maxValue, area);
        }
    }

    return maxValue;
};

const height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
console.log(maxArea(height));