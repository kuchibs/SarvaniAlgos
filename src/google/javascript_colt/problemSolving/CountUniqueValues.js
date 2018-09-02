// count unique values in sorted array 
//[1,2,2,2,3,3,3,3,4,5,6,7,8] --> //8
//[] //0
//[0,0,0,0,0,0,1] //2

function countUnique(arr) {
    if (arr.length == 0) {
        return 0;
    }
    let i = 0,
        len = arr.length,
        count = 1;
    while (i < len) {
        j = i + 1;
        if (j < len && arr[i] !== arr[j]) {
            count++;
        }
        i++;
        j++;
    }
    return count;
}

console.log(countUnique([1, 2, 2, 2, 3, 3, 3, 3, 4, 5, 6, 7, 8]));