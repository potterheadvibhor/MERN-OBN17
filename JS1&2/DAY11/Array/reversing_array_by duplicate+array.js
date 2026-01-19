let arr=[1,2,34,5,67]
let arr2=[]

//by using unshift
// for(let i=0;i<arr.length;i++)
// {
//     arr2.unshift(arr[i]);

// }
// console.log(arr2);

//by using push

// for(let i=arr.length-1;i>=0;i--)
// {
//     arr2.push(arr[i]);

// }
// console.log(arr2);

//using pop
n=arr.length;
for(let i=1;i<=n;i++)
{
    arr2.push(arr.pop())
    //console.log(arr.length);
}
console.log(arr2);
