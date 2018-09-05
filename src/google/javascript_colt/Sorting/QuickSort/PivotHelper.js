//pivot helper

function pivotHelper(arr) {
    let pi = 0;
    console.log(arr);
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < arr[0]) {
            swap(arr, pi + 1, i);
            pi++;
            console.log(arr);
        }
    }

    swap(arr, 0, pi);
    //returns pivot index
    console.log(arr);
    console.log(pi);
    return pi;
}
pivotHelper([52, 4, 5, 11, 99, 55, 23, 54, 0]); //5

function swap(arr, i, j) {
    let tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;

}