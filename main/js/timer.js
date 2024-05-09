////////////////////////////////////////ТАЙМЕР////////////////////////////////////////////////////
let focusOut = false;
let min = 0;
let hour = 0;
let sec = 0;

function init_timer() {

    let timer_id=setInterval(tick, 1000);

}

function tick() {
    if (focusOut) {
        let icon_pause=click_pause.firstElementChild
        let icon_play=icon_pause.nextElementSibling
        icon_pause.style.display='none'
        icon_play.style.display='flex'
        return
    }
    let time
    sec++;
    if (sec >= 60) { //задаем числовые параметры, меняющиеся по ходу работы программы
        min++;
        sec = sec - 60;
    }
    if (min >= 60) {
        hour++;
        min = min - 60;
    }
    if (sec < 10) { //Визуальное оформление
        if (min < 10) {
            if (hour < 10) {
                time ='0' + hour + ':0' + min + ':0' + sec;
            } else {
                time = hour + ':0' + min + ':0' + sec;
            }
        } else {
            if (hour < 10) {
                time = '0' + hour + ':' + min + ':0' + sec;
            } else {
                time = hour + ':' + min + ':0' + sec;
            }
        }
    } else {
        if (min < 10) {
            if (hour < 10) {
                time = '0' + hour + ':0' + min + ':' + sec;
            } else {
                time = hour + ':0' + min + ':' + sec;
            }
        } else {
            if (hour < 10) {
                time = '0' + hour + ':' + min + ':' + sec;
            } else {
                time = hour + ':' + min + ':' + sec;
            }
        }
    }
    document.getElementById('timer').innerHTML=time
}


window.addEventListener('visibilitychange', function() {
    let selector_board = document.querySelector(".su-board");
    selector_board.classList.add("hidden")
    icon_big_play.style.display='flex'
    focusOut = true;
})

init_timer();


let click_pause = document.getElementById("timer-pause");
let icon_pause=click_pause.firstElementChild
let icon_play=icon_pause.nextElementSibling
let icon_big_play = document.querySelector(".big-timer-pause")

icon_big_play.onclick=function (){
    let selector_board = document.querySelector(".su-board");
    focusOut = !focusOut;
    selector_board.classList.remove("hidden");
    icon_play.style.display='none'
    icon_pause.style.display='flex'
    icon_big_play.style.display='none'
}

click_pause.onclick =function(){
    let selector_board = document.querySelector(".su-board");
    focusOut = !focusOut;
    if (focusOut){
        selector_board.classList.add("hidden")
        icon_pause.style.display='none'
        icon_play.style.display='flex'
        icon_big_play.style.display='flex'

    }
    else{
        selector_board.classList.remove("hidden")
        icon_play.style.display='none'
        icon_pause.style.display='flex'
        icon_big_play.style.display='none'
    }

}
