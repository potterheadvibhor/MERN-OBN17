function print(n)
{
  if(n==6)
  {
    return
  }
  console.log(n)
  print(++n)
}

print(1)