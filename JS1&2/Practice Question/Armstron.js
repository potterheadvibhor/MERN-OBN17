function solve(arr, n) {
  let ans=0
  for(let i=0;i<n-3;i++){
    let isIncreasing=true
    for(let j=i;j<i+3;j++){
      if(arr[j]>=arr[j+1]){
        isIncreasing=false
        break
      }
    }
    if(isIncreasing==true){
      ans++
    }
  }
  console.log(ans)
}
