let str="abc"
let arr=["ab","abd","cacb","cabef","acbcbcbcbcbcbcbca","hfsgfgujhfbydgfugfauigry"]

let ans=0

for(let item of arr)
{
    let isGoodString=true
    for(let i=0;i<item.length;i++)
    {
       if(!str.includes(item[i]))
       {
        isGoodString=false
         break;
    }}
    if(isGoodString==true)
    {
     ans++;
    }
    
}
console.log(ans)