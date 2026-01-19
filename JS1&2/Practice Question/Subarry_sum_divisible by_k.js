let arr=[4,5,0,-2,-3,1]
k=5;
count=0;
for(let i=0;i<arr.length;i++)
{
    let temp=0;

    for(let j=i;j<arr.length;j++)
    {
        temp+= arr[j]
        if(temp%k==0)
        {
            count++;
        }
        
    }

}
    console.log(count);
