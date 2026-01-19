// let arr1=[1, 2, 3, 5, 4]   //almost sorted
let arr1=[9, 7, 5, 3, 1]    //reverse sorted
//  let arr1=[1,3,5,7,9]    //sorted array sorte

// let arr1=[4, 2, 4, 3, 2]   //array with duplicates
//  let arr1=[10, 1, 7, 3, 2]    //Mixed Small and Large Values
let countI=0
let countJ=0
let bubbleSort=(arr)=>
{
    for(let i=0;i<arr.length-1;i++)
{
    countI++
    let isSorted=true;
    for(let j=0;j<arr.length-1-i;j++)
    {
        countJ++
        if(arr[j]<arr[j+1])
        {
            isSorted=false
            let temp=arr[j]
            arr[j]=arr[j+1]
            arr[j+1]=temp
        }
    }
    if(isSorted==true)
    {
        break;
    }
}
console.log("I: ",countI)
console.log("j: ",countJ)
return arr
}
console.log(bubbleSort(arr1))
