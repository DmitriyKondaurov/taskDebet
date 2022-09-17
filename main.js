const recWidthsList = []
const recHeightsList = []
const clearButton = document.querySelector('[data-clear-btn]');
const fillButton = document.querySelector('[data-fill-btn]');
const runButton = document.querySelector('[data-run-btn]');
const widthBiggerEl = document.querySelector('[data-width]');
const heightBiggerEl = document.querySelector('[data-height]');
const longestDiagonalEl = document.querySelector('[data-diagonal]');
const widthTableEl = document.querySelector('[data-table-width]');
const heightTableEl = document.querySelector('[data-table-height]');

const addTableEl = (rowNumber, table) => {
  const newTrEl = document.createElement('tr');
  const newTdEl = document.createElement('td');
  for (let i = 0; i < 5; i++) {
    const indexTdEl = newTdEl.cloneNode(true);
    const valueTdEl = newTdEl.cloneNode(true);
    indexTdEl.textContent = (rowNumber * 5 + i).toString();
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
    recWidthsList.push(rectangle.width);
    recHeightsList.push(rectangle.height);
    fillHtmlTables(i);
  }
}

const fillHtmlTables = (index) => {
  widthTableEl.children[Math.floor(index / 5)].children[index % 5 * 2 + 1].textContent = recWidthsList[index];
  heightTableEl.children[Math.floor(index / 5)].children[index % 5 * 2 + 1].textContent = recHeightsList[index];
}

// This is a main function for solve the task
const calculate = (widthArray, heightArray) => {

  const rectanglesList = widthArray.map((element, index) => {
    const height = heightArray[index];
    const width = element;
    const rectangleNumber = index;
    return {rectangleNumber, height, width}
  })

  const widthBigger = rectanglesList
    .filter((rectangle) => rectangle.width > rectangle.height)
    .length

  const heightBigger = rectanglesList
    .filter((rectangle) => rectangle.width < rectangle.height)
    .length

  // const equal = rectanglesList.filter((rectangle) => rectangle.width === rectangle.height)
  // console.log(rectanglesList);

  const longestDiagonal = rectanglesList.reduce((acc, curr) => {
    const diagonal = Math.sqrt((curr.height * curr.height) + (curr.width * curr.width));
    if (acc < diagonal) {
    return curr.rectangleNumber;
    } else return acc;
  },0)

  widthBiggerEl.setAttribute('value', widthBigger);
  heightBiggerEl.setAttribute ('value', heightBigger);
  longestDiagonalEl.setAttribute ('value', longestDiagonal);
}

fillButton.addEventListener('click', fillArrays);

runButton.addEventListener('click', () => {
  if (recWidthsList.length > 1 && recHeightsList.length > 1) {
    return calculate(recWidthsList, recHeightsList);
  } else alert('Fill arrays first please!')
});

clearButton.addEventListener('click', () => {
  document.location.reload();
})

buildTables();
