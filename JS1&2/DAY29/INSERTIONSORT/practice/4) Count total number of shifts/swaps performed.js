let arr1=[3,1,2,5,4]

function TotalNumberSwapsshift(arr)
{
    let shiftCount=0
for(let i=0;i<arr.length-1;i++)
{
    let j=i+1
    
    while(j>0 && arr[j]<arr[j-1])
    {
        shiftCount++
        let t=arr[j]
        arr[j]=arr[j-1]
        arr[j-1]=t
        j--
    }
}
return shiftCount
}

console.log(TotalNumberSwapsshift(arr1))