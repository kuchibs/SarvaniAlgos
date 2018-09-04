//Selection sort
[12, 8, 90, 1, 2, 4, 11] //1,2,3,4,8,11,12,90
//Logic find min and move it to the front
/*
function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let min = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min]) {
                min = j;
            }
            swap(arr, j, min);
        }
    }
    console.log(arr);
    return arr;
}*/

function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let min = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min]) {
                min = j;
            }
        }
        //now, we know the min at given i, swap
        if (i !== min) {
            console.log("Now, min=" + min + "_arr[min]" + arr[min] + "_i" + i + "_arr[i]" + arr[i])
            swap(arr, i, min);
        }
    }
    console.log(arr);
    return arr;

}

selectionSort([12, 8, 90, 1, 2, 4, 11]);

function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}