let arr1=[1, 2, 3, 5, 4]

function CountPasses(arr)
{
    let countpass=0
    for(let i=0;i<arr.length-1;i++)
    {
        countpass++
        let isSorted=false
        for(let j=0;j<arr.length-1-i;j++)
        {
          if(arr[j]>arr[j+1])
          {
           let t=arr[j]
           arr[j]=arr[j+1]
           arr[j+1]=t 
           isSorted=true
        }
        }
        if(!isSorted)
        {
            return countpass
        }

    }
}
console.log(CountPasses(arr1))