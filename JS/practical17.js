// variable 

const time = document.getElementById("time");
const greeting = document.getElementById("greeting");
const name = document.getElementById("name");
const dateshow = document.getElementById("dateshow");

//Event Listener


name.addEventListener("keypress", setName);
name.addEventListener("blur", setName);

// Function to show time

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

// Function to add Zero to time to always make it in two digit format

function addZero(n) {
    return (parseInt(n, 10) < 10 ? "0" : "") + n;
};

// Function to take name from local Storage.

function getName() {
    if (localStorage.getItem("myName") === null) {
        name.innerHTML = "YOUR NAME";
    } else {
        name.innerHTML = localStorage.getItem("myName");
    }
};

// Function to set name in local Storage.

function setName(e) {
    if (e.type === "keypress") {
        if (e.keyCode == 13) {
            localStorage.setItem('myName', e.target.innerHTML);
            name.blur();
        }
    } else { localStorage.setItem('myName', e.target.innerHTML); }
};

// Function to show greeting.

function showGreeting() {
    let today = new Date();
    let hour = today.getHours();
    if (hour < 12 && hour > 6) {
        const greet = "good Morning";
        let i = 0
            // make greeting in typing form.
        const typing = () => {
            if (i < greet.length) {
                greeting.innerHTML += greet.charAt(i);
                i++;

                setTimeout(typing, 500);
            }
        }
        typing();

        // greeting.innerHTML = "Good Morning";

        document.body.style.backgroundImage = "url('../img/goodmorning.jpg')";
        document.getElementById('time').style.color = "#6600cc";
        document.getElementById('greeting').style.color = "#00ccff";
        document.getElementById('name').style.color = "#0033cc";
    } else if (hour >= 12 && hour < 16) {

        // greeting.innerHTML = "Good AfterNoon";

        const greet = "good Afternoon";
        let i = 0
        const typing = () => {
            if (i < greet.length) {
                greeting.innerHTML += greet.charAt(i);
                i++;

                setTimeout(typing, 150);
            }
        }
        typing();
        document.body.style.backgroundImage = "url('../img/goodafternoon.jpg')";
        document.getElementById('time').style.color = "white";
        document.getElementById('greeting').style.color = "#009900";
        document.getElementById('name').style.color = "#0000ff";
    } else if (hour >= 16 && hour < 20) {
        const greet = "good evening";
        let i = 0
        const typing = () => {
            if (i < greet.length) {
                greeting.innerHTML += greet.charAt(i);
                i++;

                setTimeout(typing, 150);
            }
        }
        typing();

        // greeting.innerHTML = "Good Evening";

        document.body.style.backgroundImage = "url('../img/goodevening.jpg')";
        document.getElementById('time').style.color = "white";
        document.getElementById('greeting').style.color = "#ffff00";
        document.getElementById('name').style.color = "#0000ff";

    } else {

        //greeting.innerHTML = "Good Night";

        const greet = "good Night";
        let i = 0
        const typing = () => {
            if (i < greet.length) {
                greeting.innerHTML += greet.charAt(i);
                i++;

                setTimeout(typing, 500);
            }
        }
        typing();
        document.body.style.backgroundImage = "url('../img/goodnight.jpg')";
        document.getElementById('time').style.color = "white";
        document.getElementById('greeting').style.color = "orange";
        document.getElementById('name').style.color = "#00ffff";
        document.getElementById('dateshow').style.color = "white";
    }


};

// Function to Display day date, month and year.


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

// Function Calling

showtime();
getName();;
getName();
showGreeting();
showDate();