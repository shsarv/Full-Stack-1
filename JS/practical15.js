var button = document.getElementById("increment"),
    count = 0;
button.onclick = function() {
    count += 1;
    button.innerHTML = count;
};
var button = document.getElementById("decrement"),
    count = 0;
button.onclick = function() {
    if (count > 0) {
        document.getElementById("decrement").disabled = false;
        count -= 1;
        button.innerHTML = count;
    }
};
var button = document.getElementById("counter"),
    count = 0;
button.onclick = function() {
    // count -= 1;
    button.innerHTML = count;
};