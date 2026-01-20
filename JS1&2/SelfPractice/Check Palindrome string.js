let atr="7857"


function reverseString(str)
{

let si=0
let ei=str.length-1
let check=false
while (si<=ei)
{
    if(str[si]===str[ei])
        {
          check=true
          si++
          ei--
        }
        else{
            return false
        }
    
}
return check
}

console.log(reverseString(atr))