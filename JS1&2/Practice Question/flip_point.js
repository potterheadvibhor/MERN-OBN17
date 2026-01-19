const arr = [1,2,3,4,5,5];
let  n=arr.length;
let s=(arr.reduce((a,b)=>a+b,0));
if( n<2|| s%2!==0)
{
 console.log("Not Possible")
}
else{
    let h=s/2;
let temp=0;
let tempArr="";
let count=0;
let j=0
for(let i=0;i<n-1;i++)
{
  tempArr+=(arr[i])+" ";
    temp+=arr[i]
    if(temp===h)
    {
        count++;
console.log(tempArr);
j=i;
break;
    }
}
if(count===1)
{
    console.log((arr.slice(j+1,n)).join(" "))
}
else
{
console.log("Not Possible")
}
   

}