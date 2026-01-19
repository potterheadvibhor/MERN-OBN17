let arr1=[5, 4, 3, 2, 1]


function SelectionSortMInimum(arr)
{
    let count=0
    for(let i=0;i<arr.length-1;i++)
    {
        let m=i
        for(let j=i+1;j<arr.length;j++)
        {
            if(arr[m]>arr[j])
            {
                m=j
            }
        }
        // console.log(arr[m])
        if(m !== i)
        {
            count++
            let t=arr[m]
            arr[m]=arr[i]
            arr[i]=t
        }
 
    }
   return count
}

console.log(SelectionSortMInimum(arr1))