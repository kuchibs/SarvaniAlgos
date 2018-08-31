function recursiveSumTon(n){ 
//positive and negative
    
    if(n==0){
        return n;
    }
    if(n>0){
        return n+ recursiveSumTon(n-1);
    }else{
        return n+ recursiveSumTon(n+1);
    }
}

console.log("1__" + recursiveSumTon(5));
console.log("1__" + recursiveSumTon(-5));