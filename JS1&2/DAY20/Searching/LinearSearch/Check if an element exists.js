let arr1=["apple", "banana", "mango"]
let t = "grape"

function LinearSearch(arr,target){
    for(let i=0;i<arr.length;i++)
{
    if(arr[i]==target)
    {
        return i
    }
}
return -1
}
console.log(LinearSearch(arr1,t))