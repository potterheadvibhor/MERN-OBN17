// let arr1=[1, 2, 3, 5, 4]   //almost sorted
// let arr1=[9, 7, 5, 3, 1]    //reverse sorted
//  let arr1=[1,3,5,7,9]    //sorted array sorte

 let arr1=[4, 2, 4, 3, 2]   //array with duplicates
//  let arr1=[10, 1, 7, 3, 2]    //Mixed Small and Large Values

function selectionSort(arr){
for(let i=0;i<arr.length-1;i++)
{
    let minIndex=i;
    for(j=i+1;j<arr.length;j++)
    {
        if(arr[j]<arr[minIndex])
            {
                minIndex=j 
            }
    }
    let t=arr[i]
    arr[i]=arr[minIndex]
    arr[minIndex]=t
}
return arr
}
console.log(selectionSort(arr1))