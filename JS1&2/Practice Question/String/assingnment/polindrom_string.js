let str="race a car"
let str3=""
for(let i=0;i<str.length;i++)
{
   if(str[i].toLowerCase()>="a" && str[i].toLowerCase()<="z" )
   {
    str3+=str[i].toLowerCase()
   }
}

let str2=""
for(let i=str.length-1;i>=0;i--)
{
   if(str[i].toLowerCase()>="a" && str[i].toLowerCase()<="z" )
   {
    str2+=str[i].toLowerCase()
   }
}
(str2===str3)?console.log(1):console.log(0)