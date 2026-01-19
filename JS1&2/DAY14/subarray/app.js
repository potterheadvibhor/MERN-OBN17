let arr=[1,2,3,4,5,6,7,8,9,10]
k=10;
n=4;
for(let i=0;i<arr.length;i++)
{
    let temp=0;
    let count=0;

    for(let j=i;j<arr.length;j++)
    {
        count++;
        temp+= arr[j]
        if(temp== k && count==n)
        {
            console.log("yes");
            return
        }
        
    }

}
            console.log("no");

