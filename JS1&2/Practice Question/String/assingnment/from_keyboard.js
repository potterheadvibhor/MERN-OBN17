let mySet=new Set("qwertyuiop")
let mySet2=new Set("asdfghjkl")
let mySet3=new Set("zxcvbnm")
let str="peter"
let check=false;
if(mySet.has(str[0])){
    for(let item of str)
{
    if(mySet.has(item))
    {
        check=true;
    }
    else{
        check=false
        break;
    }
}}
else if(mySet2.has(str[0])){
    for(let item of str)
{
    if(mySet2.has(item))
    {
        check=true;
    }
    else{
        check=false
        break;
    }
}}
else if(mySet3.has(str[0])){
    for(let item of str)
{
    if(mySet3.has(item))
    {
        check=true;
    }
    else{
        check=false
        break;
    }
}
}

if(check)
{
  console.log(str)
}