function linearSearch(arr,target)
{
    for(i=0;i<arr.length;i++)
    {
        if(arr[i]== target)
        {
           return i;
        }
    }
     return -1;
}

console.log(linearSearch([1,2,3,4,5,6,7,87,6],2))     // time complexity of this  is O(n) beacuse worst case the loop will run till n when it not find or it find at last