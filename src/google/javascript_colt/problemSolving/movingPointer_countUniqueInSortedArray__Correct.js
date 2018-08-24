//count unique values... Increment count if the number is unique, else, skip
//[1,1,1,1,1,1,1,1,1,1,2,2,2,3] --> 3

function countUniqueValues(arr){
    let i=0, j=0, count=0;
    while(i<arr.length){
        j=i+1;
        if(j<arr.length && arr[i]==arr[j]){
            i++;
            j++;
        }else{
            count++;
            i++;
            j++;
            
        }
        
    }
    return count;
    
    
}