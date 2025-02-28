const display = document.getElementById("result");

function updateDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value = "";
}

function calculate(){
    display.value = eval(display.value);
}