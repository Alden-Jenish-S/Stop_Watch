const display = document.getElementById("display");
let timer = null;
let startTime = 0;
let elaspedTime = 0;
let running = false;

function start(){
    if(!running){
        startTime = Date.now() - elaspedTime;
        timer = setInterval(update, 10);
        running = true;
    }
}
function stop(){
    if(running){
        clearInterval(timer);
        elaspedTime = Date.now() -startTime;
        running = false;
    }
}
function reset(){
    clearInterval(timer);
    startTime = 0;
    elaspedTime  = 0;
    running = false;
    display.textContent  = "00:00:00:00";
}
function update(){
    const curr = Date.now();
    elaspedTime = curr - startTime;

    let hr = Math.floor(elaspedTime / (1000 * 60 * 60));
    let min = Math.floor(elaspedTime/(1000 * 60) % 60);
    let sec = Math.floor(elaspedTime/1000 % 60);
    let milSec = Math.floor(elaspedTime % 1000 / 10);

    hr = String(hr).padStart(2,"0");
    min = String(min).padStart(2,"0");
    sec = String(sec).padStart(2,"0");
    milSec = String(milSec).padStart(2,"0");

    display.textContent = `${hr}:${min}:${sec}:${milSec}`;
}