//array is list or collection of data
// in js arrays are hetrogenious
//array length is the total no on element present inside an array
//array are zero index that means its start  at 0
//last elements presnt at the length-1
//How to declare an Array

let arr=[1,2,3,4,5,6,7];
// //let arr=[1,'a',"Hello",true,['a','b','c']];   // in js arrays are hetrogenious
console.log(arr);
console.log(arr.length);   //array length is the total no on element present inside an array
console.log(typeof(arr.length));
console.log(typeof(arr[0]));
console.log(typeof(arr[1]));
console.log(typeof(arr[2]));
console.log(typeof(arr[3]));
console.log(arr[arr.length-1]);   // in order to access an element of aarar
console.log(arr[arr.length]);   // in order to access an element of aarar


//accessimg the element from the aary
for(let i=0;i<arr.length;i++)
{
console.log(arr[i]);
}

// //print the reverse arry
for(let i=arr.length-1;i>=0;i--)
{
console.log(arr[i]);
}

//for off loop

for(let item of arr)
    {
        console.log(item);
    }
