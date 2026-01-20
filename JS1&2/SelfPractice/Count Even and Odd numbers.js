let arr1=[1, 2, 3, 4, 5, 6]


function countEvenOdd(arr)
{
    let Obj={}
    let countEven=0
    let countOdd=0
    for(let i=0;i<arr.length;i++)
    {
        if(arr[i]%2===0)
        {
           countEven++
        }
        else{
            countOdd++
        }
    }
    Obj.Even=countEven
    Obj.odd=countOdd
    return Obj
}

console.log(countEvenOdd(arr1))