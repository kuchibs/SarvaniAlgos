//Insertion sort

function insertionSort(arr) {

    //logic - take fist portion as sorted. Pick next element and palce. Now, till that element, consider sorted
    for (let i = 0; i < arr.length - 1; i++) {
        let pos = i + 1;
        for (let j = i; j >= 0; j--) {
            if (arr[i + 1] < arr[j]) {
                pos = j;
            }
        }
        let temp = arr[i + 1];
        arr.splice(i + 1, 1);
        //console.log("BEFORE___" + arr);
        arr.splice(pos, 0, temp);
        //console.log("After__" + arr);
    }
    console.log(arr);
    return arr;
}
insertionSort([5, 2, 8, 1, 9, 3, 11]); //1,2,3,5,8,9,11  //len = 7
// 2,5,8,1,9,3,11