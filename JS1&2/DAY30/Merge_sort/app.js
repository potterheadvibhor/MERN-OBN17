function MergingTwoSortedArray(a1,a2)
{
    let ans=[]
    let i=0
    let j=0
while(i<a1.length && j<a2.length)
{
    if(a1[i]<a2[j])
    {
         ans.push(a1[i])
         i++;
    }
    else
    {
 ans.push(a2[j])
         j++;
    }
}
 while(i<a1.length)
 {
    ans.push(a1[i])
         i++;
 }
 while(j<a2.length)
 {
    ans.push(a2[j])
         j++;
 }

    return ans
}

function mergeSort(arr)
{
    if(arr.length==1)
    {
        return arr
    }
    let mid=Math.floor(arr.length/2)-1
    let left=mergeSort(arr.slice(0,mid+1))
    let right=mergeSort(arr.slice(mid+1))
    return MergingTwoSortedArray(left,right)
}
console.log(mergeSort([100,-10,-1,9,99,88,22,-11]))