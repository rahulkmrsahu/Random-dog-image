let url = "https://dog.ceo/api/breeds/image/random";
let generate = document.getElementById('btn');
let box = document.getElementById("card-box")


generate.addEventListener("click", () => {
    fetch(url).then(data => data.json())
        .then((data) => {
            if (data.status == "success") {
                box.insertAdjacentHTML("beforeend", `<img src='${data.message}'>`);

            }
        })
})

