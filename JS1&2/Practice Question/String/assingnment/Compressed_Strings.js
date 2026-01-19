let str="aabbciuy"
let str2="";
let i=0;
while(i<str.length)
{
    
    let count=0
    let isBlockended=false
   for(let j=i;j<str.length;j++ )
   {
   
      if(str[i]===str[j])
      {
    count+=1;
      }
    else
      {
str2+=(count===1)?str[i]:str[i]+count;
i=j;
isBlockended=true
break;
    }
      }
      if(!isBlockended)
      {
str2+=(count===1)?str[i]:str[i]+count;
break;
      }
   }
   console.log(str2)

