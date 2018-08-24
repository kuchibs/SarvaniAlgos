function validAnagram(str1, str2){
  // add whatever parameters you deem necessary - good luck!
  if(str1==null || str2==null
    || str1.length==0 || str2.length==0
    || str1.length!= str2.length){
        return false;
  }
  
  //solution: 
  //trying for O(n) solution: find obj count of str1; for str2 loop and delete obj count of str1 OR 3n --> obj count of str1 and obj count of str2 and compare them
  let freqCount1 = {}
  let freqCount2 = {}
  for(let a of str1){
      freqCount1[a] = (freqCount1[a] || 0)+1;
  }
  for(let a of str2){
      freqCount2[a] = (freqCount2[a] || 0)+1;
  }
  console.log(freqCount1);
  console.log(freqCount2);
  //check counts are equal:
  for(let key in freqCount1){
      if(freqCount2[key] !== freqCount1[key] ){
          return false;
      }
  }
  return true;
  
}

console.log(validAnagram("rat", "car"));
console.log(validAnagram("aaz", "zza"));
console.log(validAnagram("anagram", "nagaram"));
console.log(validAnagram("awesome", "awesom"));
console.log(validAnagram("qwertyuiop", "poiuytrewq"));

