A = [
  [1, 2, 3],
  [4, 5, 6]
]

B = [
  [7, 8],
  [9, 10],
  [11, 12]
]



let r1=A.length
let c1=A[0].length
let r2=B.length
let c2=B[0].length

if(c1!==r2)
{
    console.log("Not Posiible with this matrix")
}
else{
let MM=Array.from({length:r1},()=>Array(c2).fill(0))



for(let i=0;i<r1;i++)
{
    for(let j=0;j<c2;j++)
    {
        for(let k=0;k<c1;k++)
        {
            MM[i][j]+=A[i][k]*B[k][j]

        }
    }
}
console.log(MM) 
}


