//Checking if the given number is odd or even and also positive or negative
let number =48;
(number>0)
        ?((number%2==0)?console.log("even,positive"):console.log("odd,positive"))
        :((number%2==0)?console.log("even,negative"):console.log("odd,negative"));