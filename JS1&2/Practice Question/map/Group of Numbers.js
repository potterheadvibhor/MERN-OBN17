// You are given an array a that contains N integers. All the integers in the array may not be distinct. The number of repetitions of each integer in the array is represented by ri. Your task is to print the integers in the decreasing order of their occurrence in the array.

let arr1=[1,3,2,3,3,2,1]

function Group_of_Numbers(arr)
{
   
   let MyMap=new Map()
    for(let item of arr)
    {
 MyMap.set(item,(MyMap.get(item)||0)+1)
    }
   
return [...MyMap]
}
console.log(Group_of_Numbers(arr1))