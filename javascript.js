/*Variables======================================================================*/
let color = 'black';
let containerSize = 480;
let squaresPerRow = 16;
let numSquares = Math.pow(squaresPerRow, 2);
let squarePixelSize = (containerSize / squaresPerRow) - 2;

/*Clear Button=================================================================*/
function clear() {
    const squares = document.querySelectorAll('.square');
    squares.forEach(square => square.style.backgroundColor = "transparent");
}

const clearButton = document.querySelector('#clearButton');
clearButton.addEventListener("mousedown", clear);

/*Create 16x16 Grid=============================================================*/
function mouseDown() {
    if (this.style.backgroundColor === "transparent")
        this.style.backgroundColor = color;
    else if (this.style.backgroundColor !== "transparent")
        this.style.backgroundColor = "transparent";
}

function drawGrid() {
    const container = document.querySelector('#container');

    for (let i = 0; i < numSquares; i++) {
        let square = document.createElement('div');
        square.classList.add('square');
        square.style.width = squarePixelSize.toString() + "px";
        square.style.height = squarePixelSize.toString() + "px";
        square.style.borderWidth = "1px";
        square.addEventListener("mousedown", mouseDown)
        container.appendChild(square);
    }
    clear();
}

window.onload = drawGrid();


/*Color Picker==================================================================*/
function changeColor(e) {
    color = e.target.value;
}

const colorPicker = document.querySelector('#colorPicker');
colorPicker.addEventListener('change', changeColor);

/*Slider========================================================================*/
function adjustSize(e){
    //console.log(e.target.value);
    const container = document.querySelector('#container');

    while (container.firstChild) {
        container.removeChild(container.firstChild);
}
    containerSize = 480;    
    squaresPerRow = e.target.value; 
    numSquares = Math.pow(squaresPerRow, 2);
    squarePixelSize = (containerSize / squaresPerRow) - 2;

    drawGrid();
}
const slider = document.querySelector('#gridSize');
slider.addEventListener('input', adjustSize);

