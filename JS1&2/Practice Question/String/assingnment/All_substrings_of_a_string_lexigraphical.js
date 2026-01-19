let str="abccbc"
let tempStr2=""
let mySet=new Set();
for(let i=0;i<str.length;i++)
{    
    for(let j=i+1;j<=str.length;j++)
{
    let tempStr=str.slice(i,j)
    if(tempStr.length===1)
    {
    mySet.add(tempStr)
    }
    else if(tempStr===tempStr.split("").reverse().join(""))
    {
mySet.add(tempStr)
    }
}
}

for(let item of Array.from(mySet).sort())
{
    console.log(item)
}


