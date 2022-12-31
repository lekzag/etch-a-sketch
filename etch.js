const gridContainer = document.querySelector('#gridContainer');
const btn = document.querySelector('#btn');

// Declaration of the number of the starting grid
let numberOfContent = 16;

startingGrid();

// the starter grid opened before any action
function startingGrid() {
    for (let i = 0; i < numberOfContent * numberOfContent; i++) {
        const content = document.createElement('div');
        content.classList.add('content');
        gridContainer.style.gridTemplateColumns = `repeat(${numberOfContent}, 1fr)`;
        gridContainer.style.gridTemplateRows = `repeat(${numberOfContent}, 1fr)`;
        gridContainer.appendChild(content);
}};

// as mouse is over a div, the function to change color is called
const contents = document.querySelectorAll('.content');
contents.forEach((content) => {
    content.addEventListener('mouseover', () => {
        changeColor(content)
    });
});

// change color of content
function changeColor(content) {
    content.style.transition = "background-color 0.5s";
    content.style.backgroundColor = 'blue';
};

// event click call the function to generate new grid
btn.addEventListener('click', () => {
    let playerChoice = prompt('Type the number of grid mesh on a side! 100 is the limit.');
    numberOfContent = parseInt(playerChoice);

    if (isNaN(numberOfContent) || numberOfContent < 1 || numberOfContent > 100) {
        window.alert('Type a valid number between 1-100')
    }
    else {newGrid(numberOfContent)};
});

// the function delete the existing grid to create a new one in place with the number typed by user
function newGrid(numberOfContent) {
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
    }

    for (let i = 0; i < numberOfContent * numberOfContent; i++) {
        const content = document.createElement('div');
        content.classList.add('content');
        gridContainer.style.gridTemplateColumns = `repeat(${numberOfContent}, 1fr)`;
        gridContainer.style.gridTemplateRows = `repeat(${numberOfContent}, 1fr)`;
        gridContainer.appendChild(content);
    }

    const contents = document.querySelectorAll('.content');
    contents.forEach((content) => {
        content.addEventListener('mouseover', () => {
            changeColor(content);
        });
    });
};