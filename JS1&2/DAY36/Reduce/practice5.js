let arr=["a", "b", "a", "c", "b", "a","d", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a", "a"]
let setArr= new Set(arr)
let arr2=Array.from(setArr)


console.log(
    arr2.reduce(
        (accu,current,index)=>{
            let count=0
            for(let i=0;i<arr.length;i++)
            {
                if(current===arr[i])
                {
                  count++
                  
                }
            }
            accu[current]=count
            // console.log(accu)
            return accu
            },{}
    ))