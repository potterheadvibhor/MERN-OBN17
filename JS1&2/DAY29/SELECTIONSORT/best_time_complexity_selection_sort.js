console.log("Selection sort");

let arr=[99,32,56,-10,0,-99,100]

for(let i=0;i<arr.length-1;i++)
{
    let minIndex=i;
    for(let j=i+1;j<arr.length;j++)
    {
        if(arr[minIndex]>arr[j])
        {
              minIndex=j;
        }
        if(minIndex !==i){
        let temp=arr[i]
         arr[i]=arr[minIndex]
         arr[minIndex]=temp}
    }
}
console.log(arr)