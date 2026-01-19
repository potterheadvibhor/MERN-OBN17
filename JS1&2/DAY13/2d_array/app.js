let arr=[[1,2],
         [1,2,3,4,5,6,7,8,9,10],
         [3,4],
         [4,5],
         [7,8,9],
         [1,2,3,4,5,6,7,8,9,10]];  // 2d array

// for(let i=0;i<arr.length;i++)
    
// {  
//     let str=""
//     for(let j=0;j<arr[i].length;j++)
// {
//     str+=" "+arr[i][j]
// }
// console.log(str);
// }

let i=0
while(i<arr.length)
{
let str="";
let j=0;
while(j<arr[i].length)
{
    str+=" "+arr[i][j]
    j++;
}
console.log(str);
i++;
}