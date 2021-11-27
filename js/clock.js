const myclock = document.querySelector(".myclock");


function clocktime() {
    const today = new Date();
    const hour = String(today.getHours()).padStart(2,"0");
    const min = String(today.getMinutes()).padStart(2,"0");
    const sec = String(today.getSeconds()).padStart(2,"0");
    myclock.innerText = `Now time ${hour}:${min}:${sec}`;
}


clocktime();
setInterval(clocktime, 1000);

