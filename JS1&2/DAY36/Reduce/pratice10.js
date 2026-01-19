let arr=[
  ["name", "Vibhor"],
  ["age", 21],
  ["city", "Indore"]
]



console.log(arr.reduce((obj,x)=>{
    obj[x[0]]=x[1]
    return obj
},{}))