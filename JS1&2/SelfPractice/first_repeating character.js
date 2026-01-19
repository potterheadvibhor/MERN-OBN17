let str1="abca"

function count_Frequency(str){
    let myMap=new Map()

    for(let item of str)
    {
        if(myMap.has(item)){
            myMap.set(item,myMap.get(item)+1)
        }
        else{
            myMap.set(item,1)
        }
    }
    return myMap
}

let myMap2=(count_Frequency(str1))


for(let item of str1)
{
    if(myMap2.get(item)>1)
    {
        console.log(item)
        break;
    }

}