const display = document.getElementById("result");

function updateDisplay(input){
    if (display.value === "0") {
        display.value = input;
    } else {
    display.value += input;
    }
}


function clearDisplay(){
    display.value = "";
}

function calculate(){
    display.value = eval(display.value);
}