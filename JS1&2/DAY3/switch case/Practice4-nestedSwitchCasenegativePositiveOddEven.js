number=0;
switch(number>0)
{
  case true:
       switch(number%2)
       {
        case true:
            console.log("Positive,even")
            break;
        default:
            console.log("Positive,odd")

       }
       break;

  default:
    switch(number%2)
       {
        case true:
            console.log("Negative,even")
            break;
        default:
            console.log("Negative,odd")

       }
       

}

