// Function to append values to the display
function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

// Function to clear the display
function clearDisplay() {
    document.getElementById('display').value = '';
}

// Function to delete the last character
function deleteLast() {
    let display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

// Function to calculate the result
function calculate() {
    let display = document.getElementById('display').value;
    try {
        document.getElementById('display').value = eval(display);
    } catch {
        document.getElementById('display').value = 'Error';
    }
}

function applyDisplayTransition() {
    const display = document.getElementById('display');
    display.classList.add('display-transition');
    setTimeout(() => {
        display.classList.remove('display-transition');
    }, 500);
}

// Function to handle "=" button click
function calculate() {
    try {
        const result = eval(document.getElementById('display').value);
        document.getElementById('display').value = result;
        applyDisplayTransition();
    } catch (e) {
        document.getElementById('display').value = 'Error';
    }
}

function clearDisplay() {
    document.getElementById('display').value = '';
    applyDisplayTransition();
}