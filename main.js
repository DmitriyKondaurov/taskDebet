const fillButton = document.querySelector('[data-fill-btn]');
const runButton = document.querySelector('[data-run-btn]');
const widthTableEl = document.querySelector('[data-table-width]');
const heightTableEl = document.querySelector('[data-table-height]');

const addTableEl = (rowNumber, table) => {
  const newTrEl = document.createElement('tr');
  const newTdEl = document.createElement('td');
  for (let i = 0; i < 5; i++) {
    const indexTdEl = newTdEl.cloneNode(true);
    const valueTdEl = newTdEl.cloneNode(true);
    indexTdEl.textContent = rowNumber * 5 + i;
    newTrEl.appendChild(indexTdEl);
    newTrEl.appendChild(valueTdEl);
  }
  document.body.querySelector(`[${table}]`).append(newTrEl);
}

for (let i = 0; i < 20; i++){
  addTableEl(i, 'data-table-height');
  addTableEl(i, 'data-table-width');
}

