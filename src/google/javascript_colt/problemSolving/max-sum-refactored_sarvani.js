//sliding window
// [1,2,3,4,5,6,7,8,9,10], 3 --> [10,9,8] 
// [1,3,4,5,9,10,8,1,1] 4 --> [5,9,10,8]
//[] or null or length<n 

//[] or null or length<n 

//

//Assumptions: 
//3/n is consecutive numbers
//the array is not sorted
// there can be repeating elements.
//assuming positive integers

//edge cases with failure --> [] or null or length<n  or length equals n
//edge cases --> [1], 1(covered above); [],0(covered above)

//[1,3,4,5,9,10,8,1,1] 4 --> [5,9,10,8]


function getSmallerArray(arr,n){
    
    let len = arr.length;
    if(arr ==null || len<n || n==0 || arr.length==0){
        let ret = [];
        return ret ; 
    }
    if(len == n){
        return arr;
    }
    
    //sliding window approach 
    let maxSum = -Infinity, tmpTotal = 0; indx=0;
    for(let i=0; i<n; i++){
        console.log("i:" +i+ "_arr[i]" + arr[i]);
        tmpTotal= tmpTotal+arr[i];
        console.log("tmpTotal:" + tmpTotal);
    }
    maxSum = tmpTotal; 
    //1,2,3,4,5,6,7,8,9,10
    //1,2,3
    //  2,3,4
    for(let i=0;i<len-n; i++){
        tmpTotal = (tmpTotal - arr[i]+ arr[i+n]);
        maxSum = Math.max(maxSum, tmpTotal);
        indx=i+1;
        
    }
    console.log(indx + "__" + maxSum);

}

getSmallerArray([1,2,3,4,5,6,7,8,9,10],3);
