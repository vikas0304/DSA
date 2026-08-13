var sortedSquares = function(nums) {
    let posArray = [];
    let negArray = [];

    for(let i = 0; i < nums.length; i++){
        if(nums[i] < 0){
            negArray.push(nums[i]);
        }else{
            posArray.push(nums[i]);
        }
    }

    posArray = posArray.map(val => val ** 2);
    negArray = negArray.map(val => val ** 2).reverse();

    if(negArray.length === 0){
        return posArray
    }

    if(posArray.length === 0){
        return negArray
    }

    let i = 0;
    let j = 0;
    let finalArray = [];

    while( i < negArray.length && j < posArray.length){
        if(negArray[i] < posArray[j]){
            finalArray.push(negArray[i]);
            i++;
        }else{
            finalArray.push(posArray[j]);
            j++
        }
    }

    while( i < negArray.length){
        finalArray.push(negArray[i]);
        i++
    }

    while( j < posArray.length){
        finalArray.push(posArray[j]);
        j++
    }

    return finalArray

};