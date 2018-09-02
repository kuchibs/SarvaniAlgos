//There are 2 strings s1 and s2. Find if s1 is inside s1 and how many times.

// abcdefghi abc //result =1
//11111ababababc  ab  //result = 4
//abababab  zz   // -1
//ab babababa    //-1
//ab undefined  //-1

function findStr(s1, s2) {
    //logic s2 window in s1
    // find index of s2 in s1  //start slinding
    if (!s1 || !s2 || s2.length > s1.length) {
        return 0;
    }
    let n = s1.indexOf(s1.slice(0));
    let lenS2 = s2.length,
        count = 0;
    for (let i = n; i < s1.length - lenS2; i++) {
        //console.log(s1.slice(i, i + lenS2));
        if (s2 === (s1.slice(i, i + lenS2))) {
            count++;
        }
    }
    return count;

}
console.log(findStr("qwerty", "qw"));
console.log(findStr("qweqwqwqqwrty", "qw"));
console.log(findStr("qwertyqw", "qe"));
//s1 12appp345678
//s1 34 n6 6,8
console.log(findStr());
console.log(findStr("abc"));
console.log(findStr("a", "abc"));


console.log(findStr());