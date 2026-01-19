// //max from an aaray
// let arr1=[1,2,3,4,5,6,7,8,9]
// let Max1=-Infinity;    //0
// for(let item of arr1)
// {
//     if(item>max)
//     {
//         max=item;

//     }
   
// }
// console.log(Max1)

// let arr2=[-1,-2,-3,-4,-5,-6,-7,-8,-9]
// let Max=-Infinity;   //0
// for(let item of arr)
// {
//     Max=Math.max(Max,item);
// }
// console.log(Max)

// //min from an arry

// let arr3=[1,2,3,4,5,6,7,8,9]
// //let arr3=[-1,-2,-3,-4,-5,-6,-7,-8,-9]
// let Min=Infinity;   //0
// for(let item of arr3)
// {
//     Min=Math.min(Min,item);
// }
// console.log(Min)


//most iptimised min max way to find

let arr4=[1,2,3,4,56,6]
Min=Infinity;
Max=-Infinity;
for(let item of arr4)

{
Max=Math.max(Max,item);
Min=Math.min(Min,item);
}
console.log(Max)
console.log(Min)