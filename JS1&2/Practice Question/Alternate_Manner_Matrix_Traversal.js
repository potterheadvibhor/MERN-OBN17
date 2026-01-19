let arr=[[7, 2, 3],
 [2, 3, 4],
 [5, 6, 1]]

 let n=arr.length;
 let str=""
 for(let i=0;i<n;i++)
    {
   if(i%2!=0)
    {
        str+=(arr[i].reverse()).join(" ")+" "
      
    }
    else
   {  
    str+=(arr[i].join(" "))+" "
   }
 }
 console.log(str);