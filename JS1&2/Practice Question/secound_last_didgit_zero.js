// let num=""+10011;
// let s=num.split("");
// console.log(typeof s)
// if((s.at(s.length-1))==0)
// {
//     console.log("Yes")
// }
// else{
//         console.log("No")
// }

let num=2014;
let count=0;
let flag=false;
while(count<=2)
{
    count++;
    let digit=num%10;
    if(count==2 && digit==0)
    {
        flag =true
       break;
        

    }
num=Math.floor(num/10);
    
}
if(flag)
{
    console.log("Yes");
}
else{
        console.log("No");

}




