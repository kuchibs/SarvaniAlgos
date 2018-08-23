function countChars(str){
    var result = {};

    for(var i=0; i<str.length; i++){
        if(result[str[i]] == undefined || result[str[i]] == null){
            result[str[i]] = 1;
        }else{
            result[str[i]] += 1;
        }
    }


    return result;
}

console.log(countChars("Hello"));