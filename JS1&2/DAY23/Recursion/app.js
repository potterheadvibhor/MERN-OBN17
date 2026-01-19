function greet(n)
{
    if(n==5)
    {
    return ;
    }
    console.log("HELLO")
    n++;
    greet(n)

}
greet(1)

// function greet2(n)
// {
//     if(n==5)
//     {
//     return ;
//     }
//     console.log("HELLO")
//     greet2(n)
//      n++;

// }
// greet2(1)