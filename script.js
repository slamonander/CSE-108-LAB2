const display = document.getElementById("result");
let resetDisplay = false;
let highlight = null;

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

    removeHighlight();
}

function operatorAppend (op, buttonElement) {
    if (resetDisplay) {
        display.value = display.value.slice(0, -1) + op;
    } else {
        display.value += op;
        resetDisplay = true;
    }

    highlightOp(buttonElement);
}

function clearDisplay(){
    display.value = "";
    resetDisplay = false;
    removeHighlight();
}

function calculate(){
    display.value = eval(display.value);

    resetDisplay = true;
    removeHighlight();
}

function highlightOp(buttonElement) {
    removeHighlight();
    buttonElement.classList.add("highlighted");
    highlight = buttonElement;
}

function removeHighlight() {
    if (highlight) {
        highlight.classList.remove("highlighted");
        highlight = false;
    }
}