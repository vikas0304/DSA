const mergeSortArray = (arr1, arr2) =>  arr1.concat(arr2).sort((a,b) => a - b);

function mergeSortArray2(arr1, arr2) {
    let i = 1;
    let j = 1;
    const mergedArray = [];
    let array1Item = arr1[0];
    let array2Item = arr2[0];

    if(arr1.length === 0) return arr2;
    if(arr2.length === 0) return arr1
    while(array1Item || array2Item){
        if(!array2Item || array1Item < array2Item){
            mergedArray.push(array1Item);
            array1Item = arr1[i];
            i++
        }else{
            mergedArray.push(array2Item);
            array2Item = arr2[j];
            j++
        }
    }

    return mergedArray;
}

console.log(mergeSortArray2([1,5,31], [4,8,6,10,9]));