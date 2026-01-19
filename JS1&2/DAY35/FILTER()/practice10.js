const users = [
{ name: "A", email: "a@gmail.com"},
{ name: "B", email: "" },
{ name: "C"}
];

console.log(users.filter((user)=> {return user.email}))