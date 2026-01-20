A = [1, 2, 3, 4]
B = [3, 4, 5, 6]


let myset= new Set(B)


for(let item of A)
{
    if(myset.has(item))
    {
        console.log(item)
    }
}