function areThereDuplicates() {
  // good luck. (supply any arguments you deem necessary.)
  
  console.log(arguments.length + "__" + arguments[0]);
  //frequency counter pattern
  let obj = {};
  for(let i=0;i<arguments.length; i++){
      if(obj[arguments[i]]){
          return true;
      }else{
         obj[arguments[i]] = 1;  
      }
  }
  
  return false;
  
  

}


areThereDuplicates(1,2,3,4,5,5)
