let day=1

// which day of the week
switch(day)
{
  case 1:
       console.log("Monday")
       break;
  case 2:
       console.log("Tuesday")
       break;
  case 3:
       console.log("Wednesday")
       break;
  case 4:
       console.log("Thursday")
       break;
  case 5:
       console.log("Friday")
       break;
  case 6:
       console.log("Saturday")
       break;
  default:
       console.log("Sunday")


}

// odd or even
let number1=11
switch(number1%2)
{
  case 0:
       console.log("even")
       break;
 
  default:
       console.log("odd")


}


// by nested switch case


//wrong
let number2=0
switch(number2>0)
{
  case true:
       switch(number2%2)
       {
        case true:
            console.log("Positive,even")
            break;
        default:
            console.log("Positive,odd")

       }
       break;

  default:
    switch(number2%2)
       {
        case true:
            console.log("Negative,even")
            break;
        default:
            console.log("Negative,odd")

       }
       

}

