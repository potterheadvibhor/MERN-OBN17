let arr=[1,2,3,4,5,6,7,8,9,10]
k=10;
n=4;
for(let i=0;i<arr.length;i++) //arr.length =n
{
    let temp=0;
    let count=0;
    //let temparr=[];

    for(let j=i;j<arr.length;j++)  //arr.length =n
    {
        count++;
        //temparr.push(arr[j])
        temp+= arr[j]
        if(temp== k && count==n)   
        //if (temp== k && temparr.length==n)
        //if(sum==s && len==n)
        {
            console.log("yes");
            return;
        }
        if(count>n)
        {
            break;
        }
        
    }

}
            console.log("no");