let n=5;
let r=2;
let u=1;
let u2=1;
let u3=1;

for(let i=1;i<=n;i++)
{
    u=i*u;
}
for(let i=1;i<=r;i++)
{
    u2=i*u2;
}
 for(let j=n-r;j>0;j--)
    {
      u3=u3*j
    }
console.log(u/(u2*u3))