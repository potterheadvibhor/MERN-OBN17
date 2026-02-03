const mybtn = document.getElementById("mybtn")
const heading = document.getElementById("heading")
const mydiv = document.getElementById("mydiv")

// Single click
mybtn.addEventListener("click", () => {
    heading.textContent = "You Clicked me"
})

// Double click not working on chrome
mybtn.addEventListener("dblclick", () => {
    heading.textContent = "You Double Clicked me"
})

//mouseevent
mydiv.addEventListener("mouseenter", () => {
    mydiv.innerText = "mounse Enter"
})
mydiv.addEventListener("mouseleave", () => {
    mydiv.innerText = "mounse leave"
})
