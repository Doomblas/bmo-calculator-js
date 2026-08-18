const beforeCursor = document.querySelector(".before-cursor");
const afterCursor = document.querySelector(".after-cursor");
const face = document.querySelector(".face");

const buttons = document.querySelectorAll(".buttons button");
const actionButtons = document.querySelectorAll(".action-buttons button");
const dpadButtons = document.querySelectorAll(".dpad button");

const faceStates = [
    "normal",
    "happy",
    "multiply",
    "divide",
    "subtract",
    "thinking",
    "full",
    "surprised",
    "error"
];

let expression = "";
let cursorPosition = 0;
let justCalculated = false;
let faceTimer = null;

function updateDisplay() {
    const text = expression || "0";

    if (expression === "") {
        beforeCursor.textContent = "0";
        afterCursor.textContent = "";
        return;
    }

    beforeCursor.textContent = text.slice(0, cursorPosition);
    afterCursor.textContent = text.slice(cursorPosition);
}

function setFace(state, duration = null) {
    clearTimeout(faceTimer);

    face.classList.remove(...faceStates);
    face.classList.add(state);

    if (duration !== null) {
        faceTimer = setTimeout(() => {
            updateFaceFromExpression();
        }, duration);
    }
}

function updateFaceFromExpression() {
    if (expression === "Error") {
        setFace("error");
        return;
    }

    if (expression.length >= 12) {
        setFace("full");
        return;
    }

    setFace("normal");
}

function reactToOperator(operator) {
    if (operator === "×") {
        setFace("multiply", 650);
        return;
    }

    if (operator === "÷") {
        setFace("divide", 650);
        return;
    }

    if (operator === "−") {
        setFace("subtract", 650);
        return;
    }

    if (operator === "+") {
        setFace("happy", 650);
    }
}

function insertValue(value) {
    if (justCalculated) {
        expression = "";
        cursorPosition = 0;
        justCalculated = false;
        setFace("normal");
    }

    expression =
        expression.slice(0, cursorPosition) +
        value +
        expression.slice(cursorPosition);

    cursorPosition += value.length;

    updateDisplay();
    updateFaceFromExpression();
}

function insertOperator(operator) {
    if (expression === "" || expression === "Error") {
        return;
    }

    if (justCalculated) {
        justCalculated = false;
        cursorPosition = expression.length;
        setFace("normal");
    }

    const previousCharacter = expression[cursorPosition - 1];

    if (["+", "−", "×", "÷"].includes(previousCharacter)) {
        return;
    }

    expression =
        expression.slice(0, cursorPosition) +
        operator +
        expression.slice(cursorPosition);

    cursorPosition++;

    updateDisplay();
    reactToOperator(operator);
}

function insertDecimal() {
    if (justCalculated) {
        expression = "";
        cursorPosition = 0;
        justCalculated = false;
        setFace("normal");
    }

    const leftSide = expression.slice(0, cursorPosition);
    const currentNumber = leftSide.split(/[+\−×÷]/).pop();

    if (currentNumber.includes(".")) {
        return;
    }

    if (
        currentNumber === "" ||
        ["+", "−", "×", "÷"].includes(expression[cursorPosition - 1])
    ) {
        insertValue("0.");
        return;
    }

    insertValue(".");
}

function clearCalculator() {
    expression = "";
    cursorPosition = 0;
    justCalculated = false;

    setFace("normal");
    updateDisplay();
}

function deleteLast() {
    if (
        cursorPosition === 0 ||
        expression === "" ||
        expression === "Error"
    ) {
        return;
    }

    expression =
        expression.slice(0, cursorPosition - 1) +
        expression.slice(cursorPosition);

    cursorPosition--;
    justCalculated = false;

    updateDisplay();
    updateFaceFromExpression();
}

function moveCursorLeft() {
    if (cursorPosition > 0 && expression !== "Error") {
        cursorPosition--;
        updateDisplay();
    }
}

function moveCursorRight() {
    if (
        cursorPosition < expression.length &&
        expression !== "Error"
    ) {
        cursorPosition++;
        updateDisplay();
    }
}

function processResult(result) {
    if (!Number.isFinite(result)) {
        expression = "Error";
        cursorPosition = expression.length;
        justCalculated = true;

        setFace("error");
        updateDisplay();
        return;
    }

    expression = String(result);
    cursorPosition = expression.length;
    justCalculated = true;

    if (Math.abs(result) >= 1000000) {
        setFace("surprised", 1200);
    } else {
        setFace("happy", 900);
    }

    updateDisplay();
}

function calculate() {
    if (expression === "" || expression === "Error") {
        return;
    }

    const evaluableExpression = expression
        .replaceAll("×", "*")
        .replaceAll("÷", "/")
        .replaceAll("−", "-");

    setFace("thinking");

    setTimeout(() => {
        try {
            const result = Function(
                `"use strict"; return (${evaluableExpression})`
            )();

            processResult(result);
        } catch {
            expression = "Error";
            cursorPosition = expression.length;
            justCalculated = true;

            setFace("error");
            updateDisplay();
        }
    }, 450);
}

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.textContent;

        if (["÷", "×", "−"].includes(value)) {
            insertOperator(value);
            return;
        }

        if (value === "C") {
            clearCalculator();
            return;
        }

        if (value === "←") {
            deleteLast();
            return;
        }

        if (value === ".") {
            insertDecimal();
            return;
        }

        insertValue(value);
    });
});

actionButtons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.textContent;

        if (value === "+") {
            insertOperator("+");
            return;
        }

        if (value === "=") {
            calculate();
        }
    });
});

dpadButtons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.textContent;

        if (value === "◀") {
            moveCursorLeft();
            return;
        }

        if (value === "▶") {
            moveCursorRight();
        }
    });
});

updateDisplay();
setFace("normal");