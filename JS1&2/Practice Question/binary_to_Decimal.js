let s="0010"
let bol=Number(s)
console.log(bol);
let dec=0;


for(let i=0;bol>0;i++){
   let digit=bol%10;
   dec+= digit*(2**i)
   bol=Math.floor(bol/10);
}
console.log(dec);


//

// let s="100"
// let arr=s.split("");
// let dec=0;

// console.log(arr)
// for(let i=0;i<arr.length;i++)
// {
//     dec+= Number(arr[i])*(2**i)
// }
// console.log(dec);



