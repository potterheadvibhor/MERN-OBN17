let a=56;
let b=3;
let c=0.5;
let d=-5;
let e=-100;

//problem 1
console.log("parseInt=",parseInt(a/b));
console.log("Only the decimal part=",(a/b)-parseInt(a/b));   //2-2.5
  
/*
parseInt= 33
Only the decimal part= 0.3333333333333357
*/


//problem 2
console.log("Last digit of two digit number=",(a%10));
/*
Last digit of two digit number= 6
*/

//problem 3
//method 1
console.log("first digit of two digit number Method 1=",parseInt(a/10));

//Method 2
let x=(a-(a%10))/10;
console.log("first digit of two digit number Method 2=",x);


/*
first digit of two digit number Method 1= 5
first digit of two digit number Method 2= 5
*/
