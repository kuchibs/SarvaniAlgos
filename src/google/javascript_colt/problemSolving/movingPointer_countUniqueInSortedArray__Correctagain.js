//count unique values in a sorted array
// [1,1,1,1,1,2,2,2,3,4,5,22] = 6
  //i
    //j

function countUnique(arr){

let j=1,count=1;
for(let i=0; i<arr.length; i++){
    
    if(j<arr.length && arr[i] !== arr[j]){
        count ++; 
        j++;
    }else{
        j++;
    }
}

//console.log(count);
return count;
}


//countUnique([1,2,3,4]);
//countUnique([1,2,3,4,4,4,4,5,6,7,8,10,10,100]);
countUnique([1,2,3,9,9])