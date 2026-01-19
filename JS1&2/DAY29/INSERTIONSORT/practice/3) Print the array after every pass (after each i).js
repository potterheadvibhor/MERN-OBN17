let arr1=[5, 4, 3, 2, 1]

function InsertionSort(arr)
{
  for(let i=0;i<arr.length-1;i++)
  {
    let j=i+1
    while(j>0 && arr[j]<arr[j-1])
    {
        let t=arr[j]
        arr[j]=arr[j-1]
        arr[j-1]=t
        j--
    }
console.log(arr)
  }
}

InsertionSort(arr1)