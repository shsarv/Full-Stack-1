var count = 0;

// disabling decrement button for count==0.

document.getElementById("decrement").disabled = true;
document.getElementById("decrement").style.backgroundColor = "#99003d";
document.getElementById("decrement").style.boxShadow = " 0 9px #260d0d";

// increment function

function increment() {

    //Activating decrement key for count>0.

    document.getElementById("decrement").disabled = false;
    document.getElementById("decrement").style.backgroundColor = " #ff0066";
    document.getElementById("decrement").style.boxShadow = " 0 9px #999";

    //Increasing count value

    count += 1;
    document.getElementById("counter").innerHTML = count;
}

//decrement Function

function decrement() {

    //check if count==0 then disable decrement button if not decrease the count value.

    if (count == 0) {
        document.getElementById("decrement").disabled = true;
        document.getElementById("decrement").style.backgroundColor = "#99003d";
        document.getElementById("decrement").style.boxShadow = " 0 9px #260d0d";

    } else {
        count -= 1;
        document.getElementById("counter").innerHTML = count;
        document.getElementById("decrement").style.backgroundColor = " #ff0066";
        document.getElementById("decrement").style.boxShadow = " 0 9px #999";
    }

    // for last time when count value goes to zero after decrementing, disabling the decrement key

    if (count == 0) {
        document.getElementById("decrement").disabled = true;
        document.getElementById("decrement").style.backgroundColor = "#99003d";
        document.getElementById("decrement").style.boxShadow = " 0 9px #260d0d";

    }
}