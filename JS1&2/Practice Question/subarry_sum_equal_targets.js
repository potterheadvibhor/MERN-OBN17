let arr=[1,2,3,0,-1,1]
let flag=false;
let target =0
for(let i=0;i<arr.length;i++)
{
    let temp=0;

    for(let j=i;j<arr.length;j++)
    {
        temp+= arr[j]
        if(temp==target)
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