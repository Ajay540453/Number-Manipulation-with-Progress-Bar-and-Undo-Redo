let number = 0;
let history = [];
let historyIndex = -1;

function updateNumberDisplay() {
    const numberDisplay = document.getElementById('numberDisplay');
    numberDisplay.textContent = number;
    updateProgressBar();
}

function updateProgressBar() {
    const progressBar = document.getElementById('progressBar');
    const percent = (number / 150) * 100;
    progressBar.style.width = percent + '%';
}
function addToHistory(operation) {

    history = history.slice(0, historyIndex + 1);
    historyIndex++;
    history.push(operation);
}

function undo() {
    if (historyIndex >= 0) {
        const lastOperation = history[historyIndex];
        if (lastOperation === 'add') {
            number--;
        } else if (lastOperation === 'subtract') {
            number++;
        }
        historyIndex--;
        updateNumberDisplay();
    }
}

function redo() {
    if (historyIndex < history.length - 1) {
        historyIndex++;
        const operationToRedo = history[historyIndex];
        if (operationToRedo === 'add') {
            number++;
        } else if (operationToRedo === 'subtract') {
            number--;
        }
        updateNumberDisplay();
    }
}

function subtractOne() {
    if (number > 0) {
        number--;
        addToHistory('subtract');
        updateNumberDisplay();
    }
}

function addOne() {
    if (number < 150) {
        number++;
        addToHistory('add');
        updateNumberDisplay();
    }
}
