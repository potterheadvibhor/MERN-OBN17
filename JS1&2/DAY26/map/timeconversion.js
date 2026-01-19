let str="12:05:39AM"
if((str.split(":")[2]).split("")[2]=="P"){
    if(str.split(":")[0]!=12)
    {
let a=12+parseInt(str.split(":")[0])
console.log(a+":"+str.split(":")[1]+":"+(str.split(":")[2]).split("")[0]+(str.split(":")[2]).split("")[1])
    }
    else{
        console.log(str.split(":")[0]+":"+str.split(":")[1]+":"+(str.split(":")[2]).split("")[0]+(str.split(":")[2]).split("")[1])
    }

}
else{
    if(str.split(":")[0]!=12)
    {
            console.log(str.split(":")[0]+":"+str.split(":")[1]+":"+(str.split(":")[2]).split("")[0]+(str.split(":")[2]).split("")[1])

    }
    else
    {
        
        console.log("00"+":"+str.split(":")[1]+":"+(str.split(":")[2]).split("")[0]+(str.split(":")[2]).split("")[1])}
}