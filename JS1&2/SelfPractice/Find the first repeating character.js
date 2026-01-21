let atr="abca"

for(let i=0;i<atr.length;i++)
{
    for(let j=i+1;j<atr.length;j++)
    {
         if(atr[i]===atr[j])
         {
console.log(atr[j])
             break;
         }
    }
}