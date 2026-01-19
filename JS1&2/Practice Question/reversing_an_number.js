let a=121456;
x=0;

while(a>0)
{
temp=a%10;
a=Math.floor(a/10);
x=(x*10)+temp
}
console.log(x)
