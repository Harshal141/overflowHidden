
let url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";

let butt = document.querySelector('.butt');
butt.addEventListener('click',function(){
    fetch(url)
    .then(data => data.json())
    .then(item =>{
        let joke = document.querySelector('.joke');
        joke.textContent = `${item.joke}`;
    })
})

fetch(url)
.then(data => data.json())
.then(item =>{
    let joke = document.querySelector('.joke');
    joke.textContent = `${item.joke}`;
})



