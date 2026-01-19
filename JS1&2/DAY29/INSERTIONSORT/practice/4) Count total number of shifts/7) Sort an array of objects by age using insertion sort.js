let obj1=[
  { name: "A", age: 30 },
  { name: "B", age: 20 },
  { name: "C", age: 25 }
]

function sortthearrayofobject(arr)
{
    for(let i=0;i<arr.length-1;i++)
{
    let j=i+1
    while(j>0 && arr[j-1].age>arr[j].age)
    {
       let t=arr[j-1]
       arr[j-1]=arr[j]
        arr[j]=t
        j--
    }
}
return arr}
console.log(sortthearrayofobject(obj1))

