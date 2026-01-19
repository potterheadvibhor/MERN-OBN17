//Find the first character that appears exactly twice
let str="abcdeff"

function count_Frequency(str1){
    let mymap=new Map()
    for(let item of str1)
    {
        if(mymap.has(item))
        {
            mymap.set(item,mymap.get(item)+1)
        }
        else{
            mymap.set(item,1)
        }
    }
  return mymap
}

for(let item of str)
{
    if(count_Frequency(str).get(item)==2)
    {
        console.log(item)
        break;
    }
}
