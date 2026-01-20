function PrintFibonacciSeries()
{
    p=0
    c=1
    console.log(p)
    console.log(c)
for(let i=1;i<8;i++)
{
    t=c
    c=p+c
    console.log(c)
    p=t
}
}
PrintFibonacciSeries()