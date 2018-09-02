//sorted array, find pairs whose sum is x

// [1,2,3,4,5] 3 console.log[1,2]  i=0 j=l
//there can be duplicates - then, answer will have dups
//-ve numbers

//edge cases - undefined, length==0

function findPairs(arr, n) {

    let len = arr.length,
        j = len - 1,
        i = 0,
        arr1 = [];
    while (Math.abs(i - j) > 2) {
        let sum = arr[i] + arr[j];
        if (sum == n) {
            arr1.push([arr[i], arr[j]]);
            console.log(arr[i] + " " + arr[j])
            i++;
            j--;
        } else if (sum < n) {
            i++;
        } else {
            j--;
        }
    }
    return arr1;
}

console.log("------------------");
console.log(findPairs([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 11));
console.log("------------------");
console.log(findPairs([-2, -1, 0, 1, 2, 2, 4, 5, 6, 7, 8, 9, 10], 0));
console.log("------------------");
console.log(findPairs([-10, 1, 9, 10, 11], 10));