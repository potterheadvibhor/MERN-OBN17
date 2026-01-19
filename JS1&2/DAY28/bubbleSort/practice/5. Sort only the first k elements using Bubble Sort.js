let arr1 = [5, 4, 3, 2, 1]
let k1 = 3

function TillK(arr,k){
    for(let i=0;i<k-1;i++)
    {
        let isSorted=false
        for(let j=0;j<k-1-i;j++)
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
            break
        }
    }
    return arr
}

console.log(TillK(arr1,k1))