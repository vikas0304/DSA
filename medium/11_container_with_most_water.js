var maxArea = function(height) {
    let left = 0;
    let right = height.length -1;
    let maximumArea = 0;
    while(left < right){
        let width = right - left;
        let min = Math.min(height[left] , height[right]);
        let area = width * min
        maximumArea = Math.max(maximumArea, area);
        if(height[left] < height[right]){
            left++
        }else{
            right--
        }
    }
    return maximumArea;
};

/*
Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49
Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.
*/
const height = [1,8,6,2,5,4,8,3,7];
console.log(maxArea(height));