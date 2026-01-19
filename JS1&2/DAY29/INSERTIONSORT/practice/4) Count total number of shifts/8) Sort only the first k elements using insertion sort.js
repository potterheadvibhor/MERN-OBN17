let arr1 = [9, 7, 5, 3, 1, 2, 4]
let k1 = 5

function sort_till_k(arr,k)
{
    for(let i=0;i<k-1;i++)
    {
        let j=i+1
        while(j>0  && arr[j-1]>arr[j])
        {
            let t=arr[j]
            arr[j]=arr[j-1]
            arr[j-1]=t
            j--
        }
    }
    return arr
}
console.log(sort_till_k(arr1,k1))