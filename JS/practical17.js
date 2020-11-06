//
const time = document.getElementById("time");
const greeting = document.getElementById("greeting");
const name = document.getElementById("name");
const dateshow = document.getElementById("dateshow");
//
name.addEventListener("keypress", setName);
name.addEventListener("blur", setName);

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


}
//

function addZero(n) {
    return (parseInt(n, 10) < 10 ? "0" : "") + n;
};
//
function getName() {
    if (localStorage.getItem("myName") === null) {
        name.innerHTML = "YOUR NAME";
    } else {
        name.innerHTML = localStorage.getItem("myName");
    }
};

function setName(e) {
    if (e.type === "keypress") {
        if (e.keyCode == 13) {
            localStorage.setItem('myName', e.target.innerHTML);
            name.blur();
        }
    } else { localStorage.setItem('myName', e.target.innerHTML); }
};

function showGreeting() {
    let today = new Date();
    let hour = today.getHours();
    if (hour < 12 && hour > 6) {
        greeting.innerHTML = "Good Morning";
        document.body.style.backgroundImage = "url('../img/goodmorning.jpg')";
        document.getElementById('time').style.color = "#6600cc";
        document.getElementById('greeting').style.color = "#00ccff";
        document.getElementById('name').style.color = "#0033cc";
    } else if (hour >= 12 && hour < 16) {
        greeting.innerHTML = "Good AfterNoon";
        document.body.style.backgroundImage = "url('../img/goodafternoon.jpg')";
        document.getElementById('time').style.color = "white";
        document.getElementById('greeting').style.color = "#009900";
        document.getElementById('name').style.color = "#0000ff";
    } else if (hour >= 16 && hour < 20) {
        greeting.innerHTML = "Good Evening";
        document.body.style.backgroundImage = "url('../img/goodevening.jpg')";
        document.getElementById('time').style.color = "white";
        document.getElementById('greeting').style.color = "#ffff00";
        document.getElementById('name').style.color = "#0000ff";
    } else {
        greeting.innerHTML = "Good Night";
        document.body.style.backgroundImage = "url('../img/goodnight.jpg')";
        document.getElementById('time').style.color = "white";
        document.getElementById('greeting').style.color = "orange";
        document.getElementById('name').style.color = "#00ffff";
    }

};

function showDate() {
    let today = new Date();
    let datename = today.getUTCDate();
    var month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
    let monthname = month[today.getMonth()];
    let yearname = today.getFullYear();
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var dayName = days[today.getDay()];
    dateshow.innerHTML = `${dayName}<span> , <span>${datename}<span>-<span>${monthname}<span>-<span>${yearname}`;
}

showtime();
getName();;
getName();
showGreeting();
showDate();