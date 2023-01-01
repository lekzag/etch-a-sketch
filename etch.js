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
function mouseOver(content) {
const contents = document.querySelectorAll('.content');
contents.forEach((content) => {
    content.addEventListener('mouseover', () => {
        randomColorMesh(content)
    });
});
}
mouseOver();

// change color of content to black
function blackenMesh(content) {
    content.style.transition = "background-color 0.5s";
    content.style.backgroundColor = 'black';
};

// generate random color
function randomColor() {
    colorHex = '#' + Math.floor(Math.random()*16777215).toString(16);
    // return colorHex;
}

// change mesh color to random
function randomColorMesh(content) {
    randomColor();
    content.style.transition = "background-color 0.5s";
    content.style.backgroundColor = colorHex;
};

// change color to get darker 10%
function darkenMesh() {
const contents = document.querySelectorAll('.content');

contents.forEach((content) => {
    let brightness = 100;
    content.addEventListener('mouseenter', () => {

        brightness -= 10;
        content.style.filter = `brightness(${brightness}%)`;
    });
});
};

// darkenMesh();

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