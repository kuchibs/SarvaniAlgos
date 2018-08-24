//count unique values in a sorted array
// [1,1,1,1,1,2,2,2,3,4,5,22]  {1:5, 2:3, 3:1, 4:1, 5:1, 22:1}
//[] {0:0}
//console.log(23);
function countUniqueInSortedArray(arr){
    
    //console.log(1);
    if(arr==null || arr.length==0){
        return {0:0};
    }
    
    let uniqueCounter = {}, i=0;
    let count =0;
    while(i < arr.length){
        let j = i+1; 

        if(arr[i] == arr[j]){
            i++;
            j++; 
            count++;
        }else{
            count++;
            uniqueCounter[arr[i]]=count;
            i=j;
            j++;
            count=0;
        }
    }
    //console.log(uniqueCounter);
    return uniqueCounter;
}

countUniqueInSortedArray([-500, -1, -1,2,3,3,3,3,3,3,3,3,3,3,3,3,3,4,5,5,6,99]);
countUniqueInSortedArray([]);//
countUniqueInSortedArray([-500, -1, -1,-1,-1]);
countUniqueInSortedArray([-500]);
countUniqueInSortedArray([-1, -1,-1,-1]);
