let n=5
//triangle
// for(let i=0;i<5;i++)
// {
//     row=""
// for(let j=0;j<5;j++)
// {
//   row+=" *"
// }
// console.log(row)
// }

//inverted triangle
// for(let i=0;i<n;i++)
// {
//     row=""
// for(let j=n-i;j>0;j--)
// {
//   row+=" *"
// }
// console.log(row)
// }

// inverted triangle with number
// for(let i=1;i<=5;i++)
// {
//     row=""
// for(let j=1;j<i+1;j++)
// {
//   row+=" "+j
// }
// console.log(row)
// for(let i=1;i<=5;i++)
// {
//     row=""
// for(let j=1;j<i+1;j++)
// {
//   row+=" "+i
// }
// console.log(row)
// }


// pyramid program
for(let i=0;i<n;i++)
{
    row=""
for(let j=0;j<n-i;j++)
{
  row+=" "
}
for(let k=0;k<=i;k++)
{
    if(i==k)
    {
row+=` ${i}${k}`
    }
    else if(k==0){
row+=` ${i}${k}`
    }
    else if(i==n-1){
row+=` ${i}${k}`
    }
    else{
        row+=" "
    }
   
}
console.log(row)
}
