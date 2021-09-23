
const daysel = document.getElementById("days");
const hoursel = document.getElementById("hours");
const minutesel =document.getElementById("minutes");
const secondsel = document.getElementById("seconds");

const newYear = '1 Jan 2022';

function countdown(){
    const currentDate = new Date();
    const newYearDate = new Date(newYear);

    const totalModule = (newYearDate - currentDate) / 1000;

    const days = Math.floor(totalModule / 3600 / 24);
    const hour = Math.floor(totalModule / 3600) % 24;
    const minute = Math.floor(totalModule / 60) % 60;
    const seconds = Math.floor(totalModule % 60);


    daysel.innerHTML=days;
    hoursel.innerHTML=formatTime(hour);
    minutesel.innerHTML=formatTime(minute);
    secondsel.innerHTML=formatTime(seconds);
    console.log(days, hour, minute, seconds);

}
function formatTime(time){
    return time < 0 ? (`0${time}`) : time;
}

countdown();

setInterval(countdown, 1000);

