function countChars(str){
    var result = {};
    //str = str.toLowerCase(); //do it char by char to reduce multiple iterations o(n) instead of O(2n) :) 
    for(var char of str){
        char = char.toLowerCase();
        if( (/[a-z0-9]/).test(char)){
            if(result[char] == undefined || result[char] == null){
               result[char] = 1;
            }else{
                result[char] += 1;
            }    
        }
        
    }

    return result;
}

console.log(countChars("Hello heeeeeeeeeeeeeee!"));