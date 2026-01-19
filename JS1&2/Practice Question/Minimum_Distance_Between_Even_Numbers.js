// let arr=[85387,60493,16650, 41423, 2363, 90028]
// let arr2=[]
// for(let i=0;i<arr.length;i++)
// {
// if(arr[i]%2==0 && arr[i]>0)
// {
//    arr2.push(i)
// }
// }
    
// if(arr2.length>1)
// {
// let min=Infinity;
// for(let i=0;i<arr2.length-1;i++)
// {
//     for(let j=i+1;j<arr2.length;j++)
//     {
//        if((Math.abs(arr2[i]-arr2[j]))<min)
//        {
// min=(Math.abs(arr2[i]-arr2[j]));
//        }
//     }

// }
// console.log(min);
// }
// else{
//     console.log("-1");

// }


//function ArrayProblem6(n, arr) {
 let arr=[85387,60493,16650, 41423, 2363, 90028]

  let ans = Infinity;
  for (let i = 0; i < arr.length - 1; i++)
     {
    for (let j = i + 1; j < arr.length; j++) 
        {
      if (arr[i] % 2 == 0 && arr[j] % 2 == 0 && arr[i] > 0 && arr[j] > 0) 
        {
        ans = Math.min(ans, j - i);
      }
    }
  }
  return ans == Infinity ? -1 : ans;

