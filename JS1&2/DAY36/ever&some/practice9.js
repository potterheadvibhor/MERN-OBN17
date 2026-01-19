//Check if all ages are above 18 AND some ages are above 60.
const ages = [25, 30, 65, 40];

console.log(ages.every((age)=>{ return age>18}) && ages.some((age)=>{ return age>60}))