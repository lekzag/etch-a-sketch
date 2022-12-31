const gridContainer = document.querySelector('#gridContainer');
const btn = document.querySelector('#btn');

startingGrid();

// the starter grid opened before any action
function startingGrid() {
    for (let i = 0; i < 16 * 16; i++) {
        const content = document.createElement('div');
        content.classList.add('content');
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
    let playerChoice = prompt('Type the number of grid cases on a side! 100 is the limit.');
    let sizeChosen = parseInt(playerChoice);
    console.log(sizeChosen);
    newGrid(sizeChosen);

});
