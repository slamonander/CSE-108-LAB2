const display = document.getElementById("result");
let resetDisplay = false;

function updateDisplay(input){
    if (resetDisplay) {
        display.value = input;
        resetDisplay = false;
    } else {
        if (display.value === "0") {
            display.value = input;
        } else {
        display.value += input;
        }
    }
}

function operatorAppend (op) {
    if (resetDisplay) {
        display.value = display.value.slice(0, -1) + op;
    } else {
        display += op;
        resetDisplay = true;
    }
}

function clearDisplay(){
    display.value = "";
}

function calculate(){
    display.value = eval(display.value);
}