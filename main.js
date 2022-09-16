const fillButton = document.querySelector('[data-fill-btn]');
const runButton = document.querySelector('[data-run-btn]');
const widthTableEl = document.querySelector('[data-table-width]');
const heightTableEl = document.querySelector('[data-table-height]');
let rectanglesList = [];

const addTableEl = (rowNumber, table) => {
  const newTrEl = document.createElement('tr');
  const newTdEl = document.createElement('td');
  for (let i = 0; i < 5; i++) {
    const indexTdEl = newTdEl.cloneNode(true);
    const valueTdEl = newTdEl.cloneNode(true);
    indexTdEl.textContent = (rowNumber * 5 + i).toString();
    // indexTdEl.textContent = (rowNumber * 5 + i).toString();
    newTrEl.appendChild(indexTdEl);
    newTrEl.appendChild(valueTdEl);

  }
  table.append(newTrEl);
}

const buildTables = () => {
  for (let i = 0; i < 20; i++){
    addTableEl(i, widthTableEl);
    addTableEl(i, heightTableEl);
  }
}

const getRandom = () => Math.floor(Math.random() * 99) + 1;

const fillArrays = () => {
  for (let i = 0; i < 100; i++){
    const rectangle = {};
    rectangle.height = getRandom();
    rectangle.width = getRandom();
    rectanglesList.push(rectangle);
    fillHtmlTables(i);
  }
  console.log(rectanglesList)
}

const fillHtmlTables = (index) => {
  widthTableEl.children[Math.floor(index / 5)].children[index % 5 * 2 + 1].textContent = rectanglesList[index].width;
  heightTableEl.children[Math.floor(index / 5)].children[index % 5 * 2 + 1].textContent = rectanglesList[index].height;
}

buildTables();

fillButton.addEventListener('click', fillArrays);
