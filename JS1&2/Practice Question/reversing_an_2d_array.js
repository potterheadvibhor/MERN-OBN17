let arr=[[1,2,3],[4,5,6],[7,8,9]]
for(let item of arr)
{
    let si=0
    let ei=item.length-1

    while(si<ei)
    {
        let temp=item[si]
       item[si]=item[ei]
         item[ei]=temp

         si++;
         ei--;
    }

}


// for(let i=0;i<arr.length;i++)
// {
//     let si=0
//      let ei=arr[i].length-1
//       while(si<ei)
//     {
//         let temp=arr[i][si]
//        arr[i][si]=arr[i][ei]
//         arr[i][ei]=temp

//          si++;
//          ei--;
//     }
// }
 console.log(arr)



 