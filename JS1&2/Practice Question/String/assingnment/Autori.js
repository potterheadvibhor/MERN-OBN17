let str="Knuth-Morris-Pratt"
let str2="";
for(let i=0;i<str.length;i++)
{
   if(str[i]>="A" && str[i]<="Z")
   {
   str2+=str[i];
   }
}
console.log(str2)