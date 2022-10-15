let box = document.querySelector('.container');
let height = window.innerHeight-200;
let width = window.innerWidth-100;
let count = 0;
let clock = []

if(localStorage.getItem('best') == undefined){
    let show = document.querySelector('.high')
    show.textContent = 'High Score: '+0;
}
else{
    let show = document.querySelector('.high')
    show.textContent = 'High Score: '+localStorage.getItem('best') ;
}

box.addEventListener('click',function(){
    var today = new Date();
    today = today.getTime();
    if(count< 10){
        let x = Math.floor((Math.random() * width)+50);
        let y = Math.floor((Math.random() * height)+150);
        clock.push(today);
        console.log(today)
        box.style.left= `${x}`+'px' ;
        box.style.top= `${y}`+'px';
        count ++;   
        console.log(clock)
    } 
    else{
        let diff = clock[clock.length - 1] - clock[0]
        window.alert( 'Your Score : '+diff);
        if (localStorage.getItem('best') == undefined){
            localStorage.setItem('best',diff);
        }
        else{
            if (localStorage.getItem('best') > diff){
                localStorage.setItem('best',diff)
                
            }
        }
        location.reload();
    }
});

