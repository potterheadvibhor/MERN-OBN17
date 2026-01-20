let arr=[5, 1,1, 2, 3, 2, 4]

function findfirstduplicate(arr){
    for(let i=0;i<arr.length;i++)
{
    let t=arr[i]
     for(let j=i+1;j<arr.length;j++)
     {
        if(t===arr[j])
            {
                return i
            }
        
     }
}
return -1
}


console.log(findfirstduplicate(arr))