const players = ["Virat", "Rohit", "Dhoni"];

console.log(players.map((player,index)=>
{
     return `${index+1}. ${player}`
}))