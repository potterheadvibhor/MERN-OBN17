//Check if every user is active OR at least one user is active.
const users = [
  { name: "A", active: false },
  { name: "B", active: true }
];

console.log(users.some((item)=>{ return item.active== true}))
