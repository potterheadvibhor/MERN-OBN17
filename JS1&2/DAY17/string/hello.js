let str="JavaScript Is Fun"
let str2=""
for(let i=0;i<str.length;i++)
{
    if(str[i]>="a" && str[i]<="z")
    {
        str2+=str[i].toUpperCase()
    }
    else if(str[i]>="A" && str[i]<="Z")
     {
        str2+=str[i].toLowerCase()
    }
    else
    {
       str2+=str[i]
    }
}

console.log(str2)