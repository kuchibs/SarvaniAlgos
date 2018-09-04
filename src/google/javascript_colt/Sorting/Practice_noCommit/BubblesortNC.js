function bubbleSort(arr) {

    for (let i = arr.length; i > 0; i--) {
        for (let j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1)
            }
        }

    }
    console.log(arr);
    return arr;
}


bubbleSort([9, 3, 8, 2, 0, 1]); //0,1,2,3,8,9


function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}