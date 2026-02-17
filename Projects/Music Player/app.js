const toggleBtn = document.getElementById("toggleBtn");
const aside = document.getElementById("aside");
const icon = toggleBtn.querySelector("i");

toggleBtn.addEventListener("click", () => {

    aside.classList.toggle("active");

    if (aside.classList.contains("active")) {
      
        icon.classList.remove("fa-arrow-right");
        icon.classList.add("fa-arrow-left");
    } else {

        icon.classList.remove("fa-arrow-left");
        icon.classList.add("fa-arrow-right");
    }

});



















