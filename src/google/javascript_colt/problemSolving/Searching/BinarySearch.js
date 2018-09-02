function binarySearch(arr, val) {
    let i = 0;
    j = arr.length - 1;
    while (i < j) {

        let med = Math.ceil(((i + j) / 2));

        if (arr[med] < val) {
            i = med;
        } else if (arr[med] > val) {
            j = med;
        } else {
            return med;
        }
    }
    return -1;
}


console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 9));
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5));
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 23));
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 5));
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 6));