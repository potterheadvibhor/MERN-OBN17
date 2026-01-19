const users = [
  { id: 1, name: "Aman",age:17 },
  { id: 2, name: "Riya",age:18 },
  { id: 3, name: "Kunal",age:21 }
];

console.log(users.map((value)=>
{
   return value.name
}))

console.log(...users)

let users2=(users.map((user)=>
{
    return{
        ...user,
        isAdult:user.age>=18
    }
}))
console.log(users2)