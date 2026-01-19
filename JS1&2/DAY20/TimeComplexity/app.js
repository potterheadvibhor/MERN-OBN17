// let n=10;
// console.log(n);    // time complexity is O(1)


// for(let i=0;i<n;i++)
// {
// console.log(i)
// }       // time Complexity is O(n)


// let arr=[1,2,3,4,5,6]
// for(let i=0;i<arr.length;i++)
// {
//   console.log(arr[i]);       //time complexity is O(n)
// }


// let arr2=[[1,2,7],
//           [3,4,8],
//         [5,6.9]]

// for(let i=0;i<arr.length;i++)
// {
// for(let j=0;j<arr[i].length;j++)
// {
//   console.log(arr[i][j]);
// }
// }                                  //time complexity is O(n^2)


// for(let i=0;i<n;i++)
// {  console.log(i);
//  }
// for(let j=0;j<n;j++)
// {  console.log(j);
// }                                //time complexity is O(n+n) that is  O(n)
              


// let arr3=[1,2,3,4,5]
// let si=0;
// let ei=arr3.length-1;

// while(si<ei)
// {
//     let temp=arr3[si];
//      arr3[si]=arr3[ei];
//      arr3[ei]=temp;
//      si++;
//      ei--
// }
// console.log(arr3)            // time complexity is O(n/2)  that is O(n)



//star pattern

let n1=5;

for(let i=1;i<=n1;i++)
{
    let str=""
    for(let j=1;j<=i;j++)
    {
      str+="* "
    }
    console.log(str)
}                            //time complexity of this is o(n^2)
            
