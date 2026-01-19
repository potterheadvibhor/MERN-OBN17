let arr1=[1, 2, 3, 4, 5]

function TotalComparison(arr){

    let totalComparison=0
    for(let i=0;i<arr.length-1;i++)
    {

        let j=i+1
        while(j>0 )
        {
            totalComparison++
            if(arr[j]<arr[j-1])
            {
                
        let t= arr[j]
        arr[j]=arr[j-1]
        arr[j-1]=t
         j--
    }
    else{
        break
    }
       
        }  
      }
      return totalComparison
}
console.log(TotalComparison(arr1))