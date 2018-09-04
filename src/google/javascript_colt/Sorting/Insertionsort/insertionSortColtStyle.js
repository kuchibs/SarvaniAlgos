//insertion sort
insertionSort([5, 4, 2, 8, 1]);

function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let currentVal = arr[i];
        for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
            arr[j + 1] = arr[j];
        }
        arr[j + 1] = currentVal; ///?????
    }
    console.log(arr);
    return arr;
}