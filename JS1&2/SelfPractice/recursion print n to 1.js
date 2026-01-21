function print1(n)
{
  if(n<1)
  {
    return
  }
  console.log(n)
  n--;
  print1(n)
}
print1(5)