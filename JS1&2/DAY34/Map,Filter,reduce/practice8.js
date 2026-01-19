const phones = ["9876543210", "9123456789"];

console.log(phones.map((Phone_No)=>{

return `******${Phone_No.slice(6)}`
}))
