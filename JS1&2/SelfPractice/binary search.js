let arr1=[1,2,3,4,5,6]
let t=6
function BinarySearch(arr,target){
let si=0;
let ei=arr.length-1
    while(si<=ei)
{
    let m=Math.floor((si+ei)/2)
    if(arr[m]===target)
    {
        return m
    }
    else if(arr[m]<target)
    {
        si=m+1
    }
    else
    {
        ei=m-1
    }
}
return -1
}
console.log(BinarySearch(arr1,t))