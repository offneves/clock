const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById( 'seconds');

const clock = setInterval(function time(){
    let dateToday = new Date();

    let h = dateToday.getHours();
        if (h < 10) h = '0' + h;

    let m = dateToday.getMinutes();     
        if (m < 10) m = '0' + m;

    let s = dateToday.getSeconds();
        if (s < 10) s = '0' + s;

    hours.textContent = h;
    minutes.textContent = m;
    seconds.textContent = s;

});