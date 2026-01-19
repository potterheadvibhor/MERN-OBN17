let num=12344567;
let digit=4;
let count=0;
while(num>0)
{
    let ndigit=num%10;
    if(ndigit===digit)
    {
      count++  
    }
    num=Math.floor(num/10)
}
console.log(count);