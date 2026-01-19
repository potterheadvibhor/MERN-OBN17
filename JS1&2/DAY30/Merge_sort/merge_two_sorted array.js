console.log("Merging two sorted Array")
let arr1=[1,3,5,7,9]
let arr2=[0,2,4,6,8,10]

//what if array are same
let arr3=[1,3,5,7,9]
let arr4=[1,3,5,7,9]

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

console.log("Array are deiffeent=",MergingTwoSortedArray(arr1,arr2))
console.log("siMilar Array =",MergingTwoSortedArray(arr3,arr4))
