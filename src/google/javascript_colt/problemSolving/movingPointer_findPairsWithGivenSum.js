//In a sorted array find pairs whose sum comes down to x

//Brute force method:
function findPairs(arr1, x){
    //check edge cases, null, empty - not done here
    let resultArr = [];
    for(let i=0;i<arr1.length; i++){
        for(let j=i+1; j<arr1.length; j++){
            if(arr1[i]+ arr1[j] == x){
                resultArr.push([arr1[i],arr1[j]]);
            }
        }
    }
    console.log(resultArr);
    //return resultArr;
}

findPairs([1,2,3,4,5,6,7,8,9,11], 11);


//moving pointers method
function movingPointer_findPairsWithGivenSum(arr1, x){
    let resultArr = [];
    let i=0, j=arr1.length-1; 
    while(i<j){
        if(arr1[i]+arr1[j] > x){
            j--;
        }else if(arr1[i]+arr1[j] < x){
            i++;
        }else{
            resultArr.push([arr1[i], arr1[j]]);
            i++;j--;
        }

    }
    console.log(resultArr);
    //return resultArr;

}
movingPointer_findPairsWithGivenSum([1,2,3,4,5,6,7,8,9,11], 11);
movingPointer_findPairsWithGivenSum([-1,-2,3,4,5,5,6,7,8,9,11], 10);