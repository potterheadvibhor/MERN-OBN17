let arr=[1, 2, 2, 3, 4, 3, 5]
let setArr=new Set(arr)
console.log(Array.from(setArr))


console.log(
    arr.reduce(
        (accu,curr)=>{ 
            accu=Array.from(new Set(arr))
            return accu
        
        },[]))
