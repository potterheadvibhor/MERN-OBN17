let arr=[0,0,0]
//[3, 4, -7, 3, 1, 3, 1, -4, -2, -2]
let flag=false;
for(let i=0;i<arr.length;i++)
{
for(let j=i;j<arr.length;j++)
{
    let temp_Arr=arr.slice(i,j+1)
    let sum=0
    for(let item of temp_Arr)
    {
        sum+=item;
}
if(sum===0)
{
    flag=true
console.log(`Subarray found from Index ${i} to ${j}`)
}

 }
}
if(flag==false)
{
    console.log("-1");
}