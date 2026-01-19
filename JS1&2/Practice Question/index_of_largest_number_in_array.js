let arr=[95993 ,54227, 6879, 9963, 26071, 34980]

let max=-Infinity

    for(let j=0;j<arr.length;j++)
    {
       if(arr[j]>max)
       {
        
            max=arr[j]
       }
    }

console.log(arr.indexOf(max));
console.log(max);

//by using inbuilt Method
// console.log(arr.indexOf(Math.max(...arr)))