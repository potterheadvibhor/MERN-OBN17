let arr=[3,4,-7,3,1,3,1,-4,-2,-2]
let flag=false;
for(let i=0;i<arr.length;i++)
{
    let temp=0;

    for(let j=i;j<arr.length;j++)
    {
        temp+= arr[j]
        if(temp==0)
        {
            falg=true;
            console.log(`Subarry found from Index ${i} to ${j}`)
        }
        
    }
}
if(flag==false)
{
    console.log(-1);

}
   
