const gridContainer = document.querySelector('#gridContainer');
const btn = document.querySelector('#btn');

// Declaration of the number of the starting grid
let numberOfContent = 16;

// declare a class for active function
let activeFunction = null;

startingGrid();

// the starter grid opened before any action
function startingGrid() {
    for (let i = 0; i < numberOfContent * numberOfContent; i++) {
        const content = document.createElement('div');
        content.classList.add('content');
        gridContainer.style.gridTemplateColumns = `repeat(${numberOfContent}, 1fr)`;
        gridContainer.style.gridTemplateRows = `repeat(${numberOfContent}, 1fr)`;
        gridContainer.appendChild(content);
};
mouseOverRandom();
}

// link buttons with functions
document.getElementById("randomColor").addEventListener("click", mouseOverRandom);
document.getElementById("blacken").addEventListener("click", mouseOverBlacken);
document.getElementById("darken").addEventListener("click", darkenMesh);

// as mouse is over a div, the function to change to random color is called
function mouseOverRandom(content) {
    newGrid(numberOfContent);
    if (activeFunction) {
        activeFunction.classList.remove("active");
      };
    
      activeFunction = document.getElementById("randomColor");
      activeFunction.classList.add("active");

const contents = document.querySelectorAll('.content');
contents.forEach((content) => {
    content.addEventListener('mouseover', () => {
        randomColorMesh(content)
    });
});
}

// as mouse is over a div, the function to change color to black is called
function mouseOverBlacken(content) {
    newGrid(numberOfContent);
    if (activeFunction) {
        activeFunction.classList.remove("active");
    };
    
      activeFunction = document.getElementById("blacken");
      activeFunction.classList.add("active");

    const contents = document.querySelectorAll('.content');
    contents.forEach((content) => {
        content.addEventListener('mouseover', () => {
            blackenMesh(content)
        });
    });
}

// each time mouse enter the mesh, color gets 10% darker
function darkenMesh() {
    newGrid(numberOfContent);
    if (activeFunction) {
        activeFunction.classList.remove("active");
    };
    
      activeFunction = document.getElementById("darken");
      activeFunction.classList.add("active");

    const contents = document.querySelectorAll('.content');
    contents.forEach((content) => {
        let brightness = 100;
        content.addEventListener('mouseenter', () => {
    
            brightness -= 10;
            content.style.filter = `brightness(${brightness}%)`;
        });
    });
}

// change color of content to black
function blackenMesh(content) {
    content.style.transition = "background-color 0.5s";
    content.style.backgroundColor = 'black';
}

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
}

// event click calls the function to generate new grid
btn.addEventListener('click', () => {
    let playerChoice = prompt('Type the number of grid mesh on a side! 100 is the limit.');
    numberOfContent = parseInt(playerChoice);

    if (isNaN(numberOfContent) || numberOfContent < 1 || numberOfContent > 100) {
        window.alert('Type a valid number between 1-100')
    }
    else {newGrid(numberOfContent)};
    mouseOverRandom();
});

// the function delete the existing grid to create a new one in place with the number typed by user
function newGrid(numberOfContent) {
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
    };

    for (let i = 0; i < numberOfContent * numberOfContent; i++) {
        const content = document.createElement('div');
        content.classList.add('content');
        gridContainer.style.gridTemplateColumns = `repeat(${numberOfContent}, 1fr)`;
        gridContainer.style.gridTemplateRows = `repeat(${numberOfContent}, 1fr)`;
        gridContainer.appendChild(content);
    };
}