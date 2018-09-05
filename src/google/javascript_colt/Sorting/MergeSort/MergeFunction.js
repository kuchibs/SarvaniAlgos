function merge(arr1, arr2) {
    let arr = [];
    let i = 0,
        j = 0;
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            arr.push(arr1[i]);
            i++;
        } else if (arr2[j] < arr1[i]) {
            arr.push(arr2[j]);
            j++;
        } else {
            arr.push(arr1[i]);
            i++;
            arr.push(arr2[j]);
            j++;
        }
    }

    if (arr1.length - i > 0) {
        arr.push(...arr1.slice(i, arr1.length));
    }

    if (arr2.length - j > 0) {
        arr.push(...arr2.slice(j, arr2.length));
    }

    console.log(arr);

}

merge([8, 10, 12], [1, 2, 9, 15]);