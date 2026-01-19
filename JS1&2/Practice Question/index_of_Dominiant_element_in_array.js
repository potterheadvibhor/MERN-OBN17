let arr=//[249, 443, 695, 725, 3308, 109, 804]
// [7, 1, 0, 3]
[1, 2, 9,16, 9,4]
Max=Math.max(...arr);
let flag=false;
for(let i=0;i<arr.length;i++)
{
if(Max>=(2*arr[i]) && Max != arr[i])
{
   
    console.log("From if",arr[i]);
    flag=true;
}
else if(Max != arr[i])
    {
    console.log("From Else",arr[i]);

    flag=false;
    break;

}
}
if(flag)
{
   console.log(arr.indexOf(Max))
}
else{
    console.log(-1);
}