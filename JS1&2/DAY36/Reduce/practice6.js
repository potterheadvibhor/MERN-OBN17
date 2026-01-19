let arr=[[1, [2]], [3, 4], [5]]


console.log(arr.reduce((accu,curr)=>{ 
    for(let i=0;i<curr.length;i++)
    {
accu[accu.length]=curr[i]
    }
    
    return accu},[]))
