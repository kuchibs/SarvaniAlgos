//Given 2 strings. Write a program to determine if the first is anagram of second
//Example:  abcd is anagram of dcba

function isAnagram(str1, str2){
    
    if(str1==null || str2==null 
            || str1.length==0 || str2.length==0 
            || str1.length != str2.length){
        return false;
    }

    for(let a of str1){
        if(!str2.contains(a)){  /// time complexity = O(n^2) :( 
            return false;
        }
    }
    return true;

}

console.log("abcpqrwx", "bcaxwqpr");