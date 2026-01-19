//explicit
let a=0;
let b="0";

console.log(typeof(a))   // typeof() to find the type of datatype 

let aInString=String(a);
console.log(typeof(aInString))   // typeof() to find the  

let aInBollean=Boolean(a)
console.log(typeof(aInBollean))   // typeof() to find the  
console.log("a in Boolean "+aInBollean)   // in js if we are changing ANY NUMBER OTHER THAN 0 TO BOOLEAN THEN we will get true but only in case of 0 we will get false

let bInBollean=Boolean(b)
console.log(typeof(aInBollean))   // typeof() to find the  
console.log("B in Boolean "+bInBollean)   // in js if we are changing ANY NUMBER OTHER THAN 0 TO BOOLEAN THEN we will get true but only in case of 0 we will get false

let bInNumber=Number(b)
console.log(typeof(bInNumber))   // typeof() to find the  
console.log("B in Number "+bInNumber)   // in js if we are changing ANY NUMBER OTHER THAN 0 TO BOOLEAN THEN we will get true but only in case of 0 we will get false


//implicit 

console.log(1+"1");   
console.log(true+1);    //1+1  
console.log(false + 1);   //0+1
console.log(true+"Hello");   
console.log(false+"1");   

let w="20";
let c="10";


console.log(w+c);  

// implicit type conversion in js this will be a number type at last here will be done the calculation 
console.log(w-c);
console.log(typeof(w-c));    
console.log(w*c);
console.log(w/c);
console.log(w%c);

let d="hjk";
console.log(w+d);   
console.log(w-d);      //NaN




console.log(Number(true));
console.log(Number(false));
console.log(Number("false"));


