function createMatrixInput(rows, cols, containerId) {
    const container = document.getElementById(containerId);
    container.innerHTML = '';

    for (let i = 0; i < rows; i++) {
        const row = document.createElement('div');
        row.className = 'matrix-row';

        for (let j = 0; j < cols; j++) {
            const cell = document.createElement('input');
            cell.type = 'number';
            cell.className = 'matrix-cell';
            // Corrected: Populate cell with the sum of i + j
            cell.value = i + j;
            row.appendChild(cell);
        }

        container.appendChild(row);
    }
}


// Get matrix values from user input
function getMatrixValues(rows, cols, containerId) {
    const matrix = [];
    const container = document.getElementById(containerId);

    for (let i = 0; i < rows; i++) {
        const row = [];
        const rowDiv = container.children[i];

        for (let j = 0; j < cols; j++) {
            const cellInput = rowDiv.children[j];
            row.push(parseFloat(cellInput.value));
        }

        matrix.push(row);
    }

    return matrix;
}

// Multiply two matrices
function multiply(matrixA, matrixB) {
    const m = matrixA.length;
    const n = matrixA[0].length;
    const p = matrixB[0].length;

    const result = [];

    for (let i = 0; i < m; i++) {
        const row = [];
        for (let j = 0; j < p; j++) {
            let sum = 0;
            for (let k = 0; k < n; k++) {
                sum += matrixA[i][k] * matrixB[k][j];
            }
            row.push(sum);
        }
        result.push(row);
    }
    
    return result;
}
function displayResult(result) {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = ''; // Clear previous result
    for (let i = 0; i < result.length; i++) {
        const rowDiv = document.createElement('div');
        rowDiv.className = 'result-row';
        for (let j = 0; j < result[i].length; j++) {
            const cellDiv = document.createElement('div');
            cellDiv.className = 'result-cell';
            cellDiv.textContent = result[i][j];
            rowDiv.appendChild(cellDiv);
        }
        resultDiv.appendChild(rowDiv);
    }
}
// Calculate the result and display it
// Function to perform calculation and display the result
function calculateResult() {
    const rowsA = parseInt(document.getElementById('rowsA').value);
    const colsA = parseInt(document.getElementById('colsA').value);
    const rowsB = parseInt(document.getElementById('rowsB').value);
    const colsB = parseInt(document.getElementById('colsB').value);

    if (colsA !== rowsB) {
        alert("Number of columns in Matrix A must be equal to the number of rows in Matrix B.");
        return;
    }

    createMatrixInput(rowsA, colsA, 'matrixA');
    createMatrixInput(rowsB, colsB, 'matrixB');

   /* const matrixA = getMatrixValues(rowsA, colsA, 'matrixA');
    const matrixB = getMatrixValues(rowsB, colsB, 'matrixB');

    const result = multiply(matrixA, matrixB);

    // Display the result in the result div
    displayResult(result); */

    // Define cal function inside calculateResult function's scope
    function cal() {
    const matrixA = getMatrixValues(rowsA, colsA, 'matrixA');
    const matrixB = getMatrixValues(rowsB, colsB, 'matrixB');

        const result = multiply(matrixA, matrixB);
        displayResult(result);
    }

    // Call the cal function when needed
    cal();
}

// Display the result in the result div







// Call calculateResult when the "Calculate" button is clicked
document.querySelector('setmatrices').addEventListener('click', calculateResult);
// Call cal when the "Calculate" button is clicked

document.getElementById('#Calculate').addEventListener('click', cal);



