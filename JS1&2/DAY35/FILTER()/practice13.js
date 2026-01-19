const users = [
{ name: "Aman", age: 17},
{ name: "Riya", age: 21},
{ name: "Karan", age: 25}
];


console.log(
    users
        .filter((user)=>{ return user.age>18})
        .map((value)=>{return value.name})
)
