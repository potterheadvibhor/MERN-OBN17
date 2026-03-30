// const url = "https://dog.ceo/api/breeds/image/random";

const button = document.getElementById("button");
const imageContainer = document.getElementById("image_container");

// button.addEventListener("click", () => {

//     fetch(url)
//         .then((res) => res.json())
//         .then((data) => {

//             // Clear previous image
//             imageContainer.innerHTML = "";

//             // Create image element
//             const img = document.createElement("img");

//             img.src = data.message;
//             img.style.width = "300px";

//             imageContainer.appendChild(img);
//         })
//         .catch(() => {
//             console.log("Failed to fetch image");
//         });
// });





// async function getData()
// {
//     const res=await fetch("https://dog.ceo/api/breeds/image/random")
//     const data=await res.json()
//     console.log(data)
// }


// getData()/0


button.addEventListener("click", async() => {
const res=await fetch("https://dog.ceo/api/breeds/image/random")
    const data=await res.json()
    imageContainer.innerHTML = "";

            // Create image element
            const img = document.createElement("img");

            img.src = data.message;
            img.style.width = "300px";

            imageContainer.appendChild(img);
});