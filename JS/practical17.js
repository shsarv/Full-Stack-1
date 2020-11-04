//
const time = document.getElementById("time");
const greeting = document.getElementById("greeting");
const name = document.getElementById("name");
//

//
function showtime() {
    let today = new Date();

    let hour = today.getHours();

    let min = today.getMinutes();

    let sec = today.getSeconds();

    const amPm = hour >= 12 ? "PM" : "AM";

    hour = hour % 12 || 12;

    time.innerHTML = `${addZero(hour)}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)} ${amPm}`;

    setTimeout(showtime, 1000);

    if (hour >= 4 && hour < 12 && amPm === "AM") {
        greeting.innerHTML = "Good Morning";
        document.body.style.backgroundImage = "url('../img/goodmorning.jpg')";
        document.getElementById('time').style.color = "#6600cc";
        document.getElementById('greeting').style.color = "#00ccff";
        document.getElementById('name').style.color = "#0033cc";
    }
    //
    else if ((hour >= 1 && hour <= 3 && amPm === "PM") || (hour == 12 && amPM === "PM")) {
        greeting.innerHTML = "Good AfterNoon";
        document.body.style.backgroundImage = "url('../img/goodafternoon.jpg')";
        document.getElementById('time').style.color = "white";
        document.getElementById('greeting').style.color = "#009900";
        document.getElementById('name').style.color = "#0000ff";
    }
    //
    else if (hour > 3 && hour <= 7 && amPm === "PM") {
        greeting.innerHTML = "Good Evening";
        document.body.style.backgroundImage = "url('../img/goodevening.jpg')";
        document.getElementById('time').style.color = "white";
        document.getElementById('greeting').style.color = "#ffff00";
        document.getElementById('name').style.color = "#0000ff";
    }

    //
    else if ((hour > 7 && hour < 12 && amPm === "PM") || ((hour == 12 || (hour >= 1 && hour < 4)) && amPm === "AM")) {
        greeting.innerHTML = "Good Night";
        document.body.style.backgroundImage = "url('../img/goodnight.jpg')";
        document.getElementById('time').style.color = "white";
        document.getElementById('greeting').style.color = "orange";
        document.getElementById('name').style.color = "#00ffff";
    }
}
//

function addZero(n) {
    return (parseInt(n, 10) < 10 ? "0" : "") + n;
}
//

showtime()