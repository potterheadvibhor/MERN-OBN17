const nums=[1,2,3,4,67,5,6]
var sortedSquares = function(nums) {

    var Squarearr=nums.map((num)=>{ return num*num})
    return Squarearr.sort(function(a, b){return a - b});
};

console.log(sortedSquares(nums))