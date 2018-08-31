function sameFrequency(int1, int2){
  //typical examples -> 
  //edge cases --> null, one empty, both empty, same length
  let str1 = "" +int1, str2= ""+ int2;

 
    if(str1 ===undefined || str2 === undefined || str1.length!==str2.length){
        return false;
    }  
  //Approach -> 2 consec for
  //char count iin str1
  let obj1 = buildObject(str1), obj2=buildObject(str2);
  console.log(obj1);
  
  //compare objs
  for(let s in obj1){
      if(!obj2[s]){
          return false;
      }
  }
  return true;
  
  
}

function buildObject(str){
    let obj = {};
    for(let i=0; i<str.length; i++){
      if(obj[str[i]]){
          obj[str[i]] = obj[str[i]]+ 1;
      }else{
          obj[str[i]] = 1;
      }
     }
     console.log(obj);
     return obj;
     
}

sameFrequency(123,321);