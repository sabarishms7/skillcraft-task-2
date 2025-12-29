let display = document.getElementById("display");

function append(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = "";
}

function deleteChar() {
    display.value = display.value.slice(0, -1);
}

function toggleSign() {
    if (display.value) {
        display.value = String(-parseFloat(display.value));
    }
}

function calculate() {
    try {
        display.value = eval(display.value) || "";
    } catch {
        display.value = "Error";
        setTimeout(() => clearDisplay(), 800);
    }
}

// Keyboard support
document.addEventListener("keydown", (e) => {
    if (/[0-9+\-*/.%]/.test(e.key)) append(e.key);
    if (e.key === "Enter") calculate();
    if (e.key === "Backspace") deleteChar();
    if (e.key === "Escape") clearDisplay();
});