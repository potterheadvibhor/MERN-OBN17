//Check if all marks are above 40 AND some marks are above 90.
const marks = [55, 92, 70, 88];

console.log(marks.some((mark)=>{ return mark>40 && mark<90 }))