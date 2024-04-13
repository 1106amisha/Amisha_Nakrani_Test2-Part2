// Function to generate table
function generateTable() {
    const numRows = parseInt(document.getElementById('t1').value);
    const numCols = parseInt(document.getElementById('t2').value);

    const addColumnButton = document.createElement('button');
    addColumnButton.textContent = 'Add Column';
    addColumnButton.id = 'b2';
    addColumnButton.onclick = addColumn;

    const addRowButton = document.createElement('button');
    addRowButton.textContent = 'Add Row';
    addRowButton.id = 'b3';
    addRowButton.onclick = addRow;

    // Remove all elements from the HTML body
    document.body.innerHTML = '';

    // Append Add Column and Add Row buttons to the body
    document.body.appendChild(addColumnButton);
    document.body.appendChild(addRowButton);

    // Create table element
    const table = document.createElement('table');
    table.style.borderCollapse = 'collapse';
    table.style.marginTop = '20px';

    // Create rows and columns for the table
    for (let i = 0; i < numRows; i++) {
        const row = document.createElement('tr');
        for (let j = 0; j < numCols; j++) {
            const cell = document.createElement('td');
            cell.textContent = `Row ${i}, Column ${j}`; 
            cell.style.border = '1px solid black'; 
            cell.style.padding = '10px';
            row.appendChild(cell);
        }
        table.appendChild(row);
    }

    document.body.appendChild(table);
}

// Function to add column to the table
function addColumn() {
    const rows = document.querySelectorAll('tr');
    
    rows.forEach(row => {
        const cell = document.createElement('td');
        cell.textContent = `Row ${row.rowIndex}, Column ${row.childElementCount}`; 
        cell.style.border = '1px solid black'; 
        cell.style.padding = '10px'; 
        row.appendChild(cell);
    });
}

// Function to add row to the table
function addRow() {
    const newRow = document.createElement('tr');
    const numCols = document.querySelector('tr').childElementCount;
    for (let i = 0; i < numCols; i++) {
        const cell = document.createElement('td');
        cell.textContent = `Row ${document.querySelectorAll('tr').length}, Column ${i}`; 
        cell.style.border = '1px solid black'; 
        cell.style.padding = '10px';
        newRow.appendChild(cell);
    }
    document.querySelector('table').appendChild(newRow);
}
