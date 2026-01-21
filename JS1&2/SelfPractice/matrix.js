// let mat = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]
// ];


// let n=mat.length;
// let i=0
// let row=0
// while(i<n)
// {
//     let j=0
        

//     while(j<mat[i].length)
//     {
//         if(i==j)
//       {
//         row +=(mat[i][j])
//     }
//        j++
//     }
    
//     i++

// }
//     console.log(row)

// let A = [
//   [1, 2],
//   [3, 4]
// ];

// let B = [
//   [5, 6],
//   [7, 8]
// ];
// let sum=[]

// if(A.length===B.length)
// {
//     let i=0
//     while(i<A.length)
//     {
//         let j=0
//         let arsum=[]
//         while(j<A[i].length){

//            arsum.push(A[i][j]+B[i][j])
// j++
//         }
//         i++
//         sum.push(arsum)
//     }
// }
// console.log(sum)


//transpose of matrix

// A = [
//   [1, 2, 3],
//   [4, 5, 6]
// ]
// let row=A.length
// let col=A[0].length
// let T=Array.from({length:col},()=>Array(row).fill(0))

// for(let i=0;i<A.length;i++)
// {
    
//     for(let j=0;j<A[i].length;j++)
//     {
//         T[j][i]=A[i][j]
//     }
// }

// console.log(T)

let M = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
let sum=0
if(M.length === M[0].length){
    for(let i=0;i<M.length;i++)
    {
        sum+=M[i][i]
    }
}
console.log(sum)

let sam=Array.from({length:2},()=>Array(3).fill(0))

console.log(sam)