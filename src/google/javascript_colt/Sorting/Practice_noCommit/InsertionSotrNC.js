function insertionSort(arr) {
    //left side is sorted - colt style

    for (let i = 1; i < arr.length; i++) {
        let currentVal = arr[i];
        for (var j = i - 1; j >= 0 && currentVal < arr[j]; j--) {
            arr[j + 1] = arr[j];
        }
        arr[j + 1] = currentVal;
    }
    console.log(arr);
}

insertionSort([8, 1, 65, 12, 3, 0, 23]); //0,1,3,8,12,23,65


//1,2,3,0,8,5