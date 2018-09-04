//lets do insertion sort once again

function insertionSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let pos = i + 1;
        for (let j = i; j >= 0; j--) {
            if (arr[i + 1] < arr[j]) {
                pos = j;
            }
        }
        let tmp = arr[i + 1];
        arr.splice(i + 1, 1);
        arr.splice(pos, 0, arr[i + 1]);
    }

    console.log(arr);
    return arr;
}


insertionSort([8, 92, 45, 12, 6, 1]); //1,6,8,12,45,92