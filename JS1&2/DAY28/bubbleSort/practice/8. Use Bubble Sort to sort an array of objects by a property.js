let obj1 =[
  { name: "A", score: 50 },
  { name: "B", score: 30 },
  { name: "C", score: 40 }
]

function SortanObject(arr){

    for(let i=0;i<arr.length-1;i++)
    {
        let isSorted=false
        for(let j=0;j<arr.length-1-i;j++)
        {
            if(arr[j].score>arr[j+1].score)
            {
              let t=arr[j]
              arr[j]=arr[j+1]
              arr[j+1]=t
              isSorted=true
            }
        }
        if(!isSorted)
        {
            return arr
        }
    }
}
console.log(SortanObject(obj1))
