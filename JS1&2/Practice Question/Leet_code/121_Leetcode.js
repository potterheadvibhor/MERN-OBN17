let arr1 = [7,6,4,3,1]
var maxProfit = function(arr) {
    let minElement= Math.min(...arr)
let maxElement=0;

for(let i=arr.indexOf(minElement)+1;i<arr.length;i++)
{
     maxElement=Math.max(maxElement,arr[i])
}
if(maxElement<=minElement)
{
return 0;
}
else{
    return (maxElement-minElement);
}

}

console.log(maxProfit(arr1))