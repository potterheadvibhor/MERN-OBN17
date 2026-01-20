let n=30

function printPrimeNumber(N)
{
    let arr=[2]
  for(let i=3;i<=N;i++)
  {
    let isPrime=true
    for(let j=2;j<i;j++)
    {
        if(i%j==0)
        {
            isPrime=false
            break
        }
    }
    if(isPrime)
    {
        arr.push(i)
    }
  }
  return arr
}
console.log((printPrimeNumber(n)).join(" "))