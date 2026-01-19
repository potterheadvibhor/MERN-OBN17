let arr=[1,2,6,10,18,54]
let n=arr.length
for(let i=0;i<n-2;i++)
{
    for(let j=i+1;j<n-1;j++)
    {
        for(let k=j+1;k<n;k++)
        {
            if((arr[j]**2) === (arr[k]*arr[i]))
            {
                console.log(arr[i]," ",arr[j]," ",arr[k])
            }
        }
    }
}


