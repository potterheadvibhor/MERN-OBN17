const users = [
{ firstName: "shubham", lastName: "kashyap" },
{ firstName: "rohit", lastName: "sharma" }
]

console.log(users.map((user)=>
{
     return user.firstName[0].toUpperCase()+user.firstName.slice(1)+" "+user.lastName[0].toUpperCase()+user.lastName.slice(1) 
}))