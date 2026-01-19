 let arr=[6,5,4,3,2,1]

//  worst case
// for(let i=0;i<arr.length-1;i++)
// {
//     let j=i+1
//     while(j>0)
//     {
//         console.log("ok")
//         if(arr[j],arr[j-1])
//         {
//          let temp=arr[j]
//          arr[j]=arr[j-1]
//          arr[j-1]=temp
//         }
//     j--
//     }

// }


// best case 
for(let i=0;i<arr.length-1;i++)
{
    let j=i+1
    while(j>0 && arr[j]<arr[j-1])
    {
       
         let temp=arr[j]
         arr[j]=arr[j-1]
         arr[j-1]=temp
        
    j--
    }

}

console.log(arr)