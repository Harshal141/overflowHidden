
let butt = document.querySelector('.random')
butt.addEventListener('click',
function(){
    let name = Math.floor((Math.random() * 10));
    let storage = ['subs/games/aim bot/index.html',
    'subs/games/aim bot/index.html',
    'subs/games/aim bot/index.html',
    'subs/games/aim bot/index.html',
    'subs/games/aim bot/index.html',
    'side.html',
    'side.html',
    'side.html',
    'side.html',
    'side.html'];
    let neww = storage[name];
    console.log(neww);
    window.open(neww,'_blank')
});