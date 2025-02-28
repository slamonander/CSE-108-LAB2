const display = document.getElementById("result");
let resetDisplay = false;
let highlight = null;

let previousResult = null;
let previousOp = null;

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
    previousOp = op;
}

function clearDisplay(){
    display.value = "";
    resetDisplay = false;

    previousResult = null;
    previousOp = null;

    removeHighlight();
}

function calculate(){
    const currentResult = parseFloat(display.value);
    if (previousResult === null) {
        previousResult = currentResult;
    } else {
        if (previousOp) {
            switch (previousOp) {
                case "-":
                    previousResult -=currentResult;
                    break;
                case "+":
                    previousResult +=currentResult;
                    break;
                case "*":
                    previousResult *= currentResult;
                    break;
                case "/":
                    if (currentResult !== 0) {
                    previousResult /=currentResult;
                    } else {
                display.value = "Error"
                return;
            } break;
        }
        }
    }

    display.value = previousResult;

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

