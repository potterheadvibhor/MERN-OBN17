let arr1 = [10, 4, 7, 1, 9]

let k1 = 4


function SelectionTillK(arr,k)
{
    for(let i=0;i<=1;i++)
    {
        let m=i
        for(let j=i+1;j<arr.length;j++)
        {
            if(arr[m]>arr[j])
            {
                m=j
            }
        }
        if(m!==i)
        {    
        let t= arr[m]
        arr[m]=arr[i]
        arr[i]=t
    }
    
    }
    return arr[1]

}
console.log(SelectionTillK(arr1,k1))
