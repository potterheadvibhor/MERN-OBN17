function toggle_character(str)
{
    let str2=""
    for(let i=0;i<str.length;i++)
    {
        
      if(str[i] === str[i].toLowerCase())
      {
        str2+=str[i].toUpperCase()
      }
      else if(str[i] === str[i].toUpperCase())
      {
       str2+=str[i].toLowerCase()
      }
      else{
        str2+=str[i]
      }
    }
return str2
}

console.log(toggle_character("helloAbc2"))