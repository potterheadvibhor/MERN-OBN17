/// sorting on array of objects

let users=[
    {name:"shubham",age:24,isPaid:true},
    {name:"gabbar",age:55,isPaid:false},
    {name:"shaktiman",age:40,isPaid:false},
    {name:"antman",age:20,isPaid:false},
    {name:"gangadhar",age:40,isPaid:true},
]

users.sort((a,b)=>a.name.localeCompare(b.name))
// users.sort((a,b)=>b.name.localeCompare(a.name))

// users.sort((a,b)=>a.age-b.age)
// users.sort((a,b)=>b.age-a.age)


// users.sort((a,b)=>a.isPaid-b.isPaid)
// users.sort((a,b)=>b.isPaid-a.isPaid)


console.log(users)