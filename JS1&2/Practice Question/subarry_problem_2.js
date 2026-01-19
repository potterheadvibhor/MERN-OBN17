let arr=[8,6,3,4,5,9,12,7,20,22,31, 38]
let n=4;
let count=0;
for(let i=0;i<arr.length-(n-1);i++)
{
    let tempArr=arr.slice(i,i+n)
    let tempMax=-Infinity
    let tempFlag=false
    for(let j=0;j<tempArr.length;j++)
    {
        if(tempArr[j]>tempMax)
{
            tempFlag=true;
            tempMax=tempArr[j]
        }
        else{
            tempFlag=false
            break;
        }

    }
    if(tempFlag)
    {
count++;
    }

}
console.log(count)