function same(arr1, arr2){

        if(arr1==null || arr2==null){

            return false;
        }else if (arr1.length != arr2.length){
            return false;
        }


        //find if arr2 has arr1 each value squared and multiplicity maintained.
        //Example [1,2,3] and [1,4,9] //true
        // [1,2,1] and [1,4] //false
        // [1,2,3] and [1,9,4] //false
        for(var i=0;i<arr1.length;i++){
            if(arr2[i] !== arr1[i]*arr1[i]){
                return false;
            }
        }

        return true;

}

console.log(same([2,4,76], [4,16,5776]));