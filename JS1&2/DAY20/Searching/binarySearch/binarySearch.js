function binarySearch1(arr,target)
{
let si=0;
let ei=arr.length-1;
while(si<=ei)
{
    let mid=Math.floor((si+ei)/2)

    if(arr[mid]== target)
    {
     return mid;
    }
    else if(arr[mid]<target)
    {
     si=mid+1;
    }
    else{
        ei=mid-1;
    }
}
return -1
}

function binarySearch2(arr,target)
{
let si=0;
let ei=arr.length-1;
while(si<=ei)
{
    let mid=Math.floor((si+ei)/2)

    if(arr[mid]== target)
    {
     return mid;
    }
    else if(arr[mid]<target)
    {
             ei=mid-1;

    }
    else{
        si=mid+1;
    }
}
return -1
}

console.log(binarySearch1([1,2,3,4,5,6],389))
console.log(binarySearch2([6,5,4,3,2,1],3))