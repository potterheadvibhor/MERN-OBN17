// const heading=document.getElementById("mainHeading")
// heading.setAttribute("class","FirstHeading")
// heading.setAttribute("style","background-color:red")
// console.log(heading.getAttribute("class"))

// heading.innerText="Munni Badnam hui"

const mesage=document.querySelector("#mainHeading")
const name=prompt("Enter your name")
mesage.innerHTML=`welcome,${name}`