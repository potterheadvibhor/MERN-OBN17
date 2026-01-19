// for(let i=1;i<=5;i++)
// {
//     let str="";
//     for(let j=i;j>=1;j--)
//         {
//             str+=""+String.fromCharCode(i+64);

//     }
//    console.log(str); 
// }
// let count=1;
// for(let i=1;i<=4;i++)
// {  
//     let str="";
//     for(let j=i;j>=1;j--)
//         {
//            //str+=""+String.fromCharCode(count+64);
//            str+=""+count;
           
//            count++;
//     }  
//    console.log(str); 
// }

//  for(let i=1;i<=5;i++)
// {  
//     let count =5;
//     let str="";
//     for(let j=i;j>=1;j--)
//         {
//            //str+=""+String.fromCharCode(count+64);
//            str+=" "+count;
           
//            count--;
//     }  
//    console.log(str); 
// }

// let n=5;

// for(let i=1;i<=n;i++)
// {
//     let str="";
//   for(let j=1;j<=n-i;j++)
//   {
//     str+=" ";
//   }
//   for(let k=1;k<=i;k++)
//     {
//         str+="*";

//     }
//     console.log(str);
// }

// let n=5;
// for(let i=1;i<=n;i++)
// {
    
//     let str="";
  
//     for(let j=1;j<=n-i;j++)
//   {
//     str+=" ";
//   }

//   for(let k=1;k<i;k++)
//     {
//         str+="*";
//     }
    
   
//     console.log(str);
// }


// let  i=1;
// while(i<=5)
// {

// if(i== 4)
// {
//     i++;
// continue
// }
// console.log(i)
// i++;
// }



let m=0;
let n=1000;

for(let i=m;i<=n;i++)
{
  
    let num=""+i;
    let arr=num.split("");
           // console.log(arr);

    let sum=0;
    for(let j=0;j<arr.length;j++)
    {
        
        sum+=(+arr[j])**arr.length;

    }
                   // console.log(sum);

    if(sum===i)
    {
        console.log(i);
    }
}