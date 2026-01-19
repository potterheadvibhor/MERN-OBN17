let n=6
let arr= []
let i=1
 while(i<=n)
 {
    if(i%3==0 && i%5==0)
    {
arr.push("FizzBuzz");
    }
    if(i%3==0)
      { 
        arr.push("Fizz");
    }
    else if(i%5==0)
      { 
        arr.push("Buzz");
    }
    else{
         arr.push(i.toString());
    }
       i++;
 }

 console.log(arr)