let array =[1,2,3,4,5,5,6]
let target=50

function LinearSearching(arr,t){

    for(let i=0;i<arr.length;i++)
    {
        if(arr[i]===t)
        {
            return i
        }
       
    }
    return -1

}

console.log("Index of Target=",LinearSearching(array,target))
