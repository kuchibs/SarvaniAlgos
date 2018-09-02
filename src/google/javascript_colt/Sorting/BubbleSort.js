//write bubble sort algo
//2,5,121,67,12, 3  --> 2,3,12,67,121
//empty --> emply

function bubbleSort(arr) {

    for (let i = arr.length; i > 0; i--) {
        let noSwaps = true;
        for (let j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1);
                noSwaps = true;
            }
        }
        if (noSwaps) break;
    }

    console.log(arr);
    return arr;
}

function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}


bubbleSort([3, 2, 1]);
bubbleSort([72, 8, 2, -100, 1, 0, 12]); //-100, 0,1,2,8,12,72