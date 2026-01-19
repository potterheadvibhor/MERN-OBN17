let arr=[5, 15, 25, 35, 45] 
let target = 30

function TargetExist(arr,target){

    let si=0
    let ei=arr.length-1
    while(si<=ei)
    {
        let mi=Math.floor((si+ei)/2)
        if(target===arr[mi])
            {
              return "yes"
            }
            else if(target<arr[mi])
            {
                  ei=mi-1
            }
            else{
                si=mi+1
            }
        
    }
    return -1

}

console.log(TargetExist(arr,target))