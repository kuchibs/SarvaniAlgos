function mergeSort(arr) {
    if (arr.length === 0 || arr.length === 1) {
        return arr;
    }
    let mid = Math.ceil(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));
    return merge(left, right);

}

//merge([100, 200], [1, 2, 3, 5, 6])
console.log(mergeSort([6, 1, 100, 2, 5, 200, 3]));




// Merges two already sorted arrays
function merge(arr1, arr2) {
    let results = [];
    let i = 0;
    let j = 0;
    while (i < arr1.length && j < arr2.length) {
        if (arr2[j] > arr1[i]) {
            results.push(arr1[i]);
            i++;
        } else {
            results.push(arr2[j])
            j++;
        }
    }
    while (i < arr1.length) {
        results.push(arr1[i])
        i++;
    }
    while (j < arr2.length) {
        results.push(arr2[j])
        j++;
    }
    return results;
}