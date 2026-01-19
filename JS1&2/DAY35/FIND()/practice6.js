const nums = [3, 7, 11, 15, 18, 21, 22];

console.log(nums.find((n,index)=>{ return (nums[index-1]%2 !==0 && nums[index+1]%2==0)}))