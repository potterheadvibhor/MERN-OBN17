let arr=[[1,2,3],
         [4,5,6],
         [7,8,9]];
         
for(let row=0;row<arr.length;row++)
{
    let coloumnSum=0;
    let rowSum=0;
    for(let coloumn=0;coloumn<arr[row].length;coloumn++)
    {
        rowSum+=arr[row][coloumn]
        coloumnSum+=arr[coloumn][row]
    }
    console.log(`Sum of Row ${row}`,rowSum)
    console.log(`Sum of Coloumn `,coloumnSum)
}