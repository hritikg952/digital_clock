
const hour = document.querySelector('.hour');
const minute = document.querySelector('.minute');
const second = document.querySelector('.sec');

function setDate(){
    var d = new Date();
    hour.innerHTML = d.getHours();
    minute.innerHTML = d.getMinutes();
    second.innerHTML = d.getSeconds();
}

setInterval(setDate, 1000)



