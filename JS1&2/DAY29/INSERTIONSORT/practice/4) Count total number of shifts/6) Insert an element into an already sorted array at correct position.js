
let sortedArr = [1, 3, 5, 7, 9]
let x = 6

function InsertElement(arr,k)
{
    arr.push(k)
    
   let j=arr.length-2
   
   while(j>=0 && arr[j]<k)
   {
    arr[j+1]=aar[j]
    j--
   }
    arr[j+1]=k
    return arr
}
console.log(InsertElement(sortedArr,x))