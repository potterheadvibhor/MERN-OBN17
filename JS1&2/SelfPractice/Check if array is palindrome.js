let arr1=[1,2,4,4,2,1]

function polindrome(arr)
{
    let si=0
    let ei=arr.length-1
    while(si<ei)
    {
        if(arr[si]!==arr[ei])
        {
            return false
        }
        si++
        ei--
    }
    return true
}
console.log(polindrome(arr1))