
// block start

{
    var Block_a=1;
    let Block_b=3;
const Block_c=4;

console.log(Block_a)
console.log(Block_b)
console.log(Block_c)
}

//Block end

console.log(Block_a)   //will work as it acts as an Global varibale as decleared inside var
console.log(Block_b)     // will show error cannot be acces outside block
console.log(Block_c)