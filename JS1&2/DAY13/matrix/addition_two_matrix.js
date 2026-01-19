let arr=[[1,2,3],
         [4,5,6],
         [7,8,9]];
let arr2=[[1,2,3],
         [4,5,6],
         [7,8,9]]

if(arr.length==arr2.length)
{
    for(let row=0;row<arr.length;row++)
{
    if(arr[row].length===arr2[row].length)
{
    for(let coloumn=0;coloumn<arr[row].length;coloumn++)
{
arr[row][coloumn]=arr[row][coloumn]+arr2[row][coloumn]
}
}
}
console.log(arr)
}

