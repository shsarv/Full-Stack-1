// Initialization

const form1 = document.getElementById("form1");
const form2 = document.getElementById("form2");
const form3 = document.getElementById("form3");

// for next and back button
const next1 = document.getElementById("next1");
const next2 = document.getElementById("next2");
const back1 = document.getElementById("back1");
const back2 = document.getElementById("back2");

const progress = document.getElementById("progress");


// Event Handler

next1.onclick = function() {
    form1.style.left = "-61.5vh";
    form2.style.left = "5.5vh";
    progress.style.width = "33vh";
}
next2.onclick = function() {
    form2.style.left = "-61.5vh";
    form3.style.left = "5.5vh";
    progress.style.width = "49vh";
}

back1.onclick = function() {
    form1.style.left = "5.5vh";
    form2.style.left = "61.5vh";
    progress.style.width = "16.4vh";

}
back2.onclick = function() {
    form2.style.left = "5.5vh";
    form3.style.left = "61.5vh";
    progress.style.width = "33vh";

}