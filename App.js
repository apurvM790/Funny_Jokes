const show = document.getElementById("joke")
const button = document.getElementById("butt")

const url = "https://v2.jokeapi.dev/joke/Any?type=single"

const value = ()=>{
    show.classList.remove("fade")
    fetch(url)
    .then((data)=>data.json())
    .then((item)=>{
        console.log(item.joke);
        show.innerHTML = `${item.joke}`
        show.classList.add("fade")
    });
}

button.addEventListener("click",value)
value();