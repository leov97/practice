function multiplesOf3Or5(number) {

    sum=0;
  
    for(let i=1; i<number; i++) {
        if(i%3===0 || i%5===0) {
            sum+=i;
        }
    }
  
  
    return sum;
  }
  

  console.log(multiplesOf3Or5(1000));