let arr1 = [7, 3, 5, 2, 9, 1]
let k1 = 4


function SelectionTillK(arr,k)
{
    for(let i=0;i<k;i++)
    {
        let m=i
        for(let j=i+1;j<k;j++)
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
return arr
}
console.log(SelectionTillK(arr1,k1))
