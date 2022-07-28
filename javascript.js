/*Variables======================================================================*/
let paintColor = 'black';
let containerSize = 480;
let squaresPerRow = 16;
let numSquares = Math.pow(squaresPerRow, 2);
let squarePixelSize = (containerSize / squaresPerRow) - 2;
let hideGridBool = false;

/*Clear Button=================================================================*/
function clear() {
    const squares = document.querySelectorAll('.square');
    squares.forEach(function (square) {
        square.style.backgroundColor = "transparent";
        square.style.borderColor = "white";
    });
}

const clearButton = document.querySelector('#clearButton');
clearButton.addEventListener("mousedown", clear);

/*Create 16x16 Grid=============================================================*/
function mouseDown() {
    if (this.style.backgroundColor === "transparent") {
        this.style.backgroundColor = paintColor;
        this.style.borderColor = paintColor;
    }
    else if (this.style.backgroundColor !== "transparent") {
        this.style.backgroundColor = "transparent";

        if (hideGridBool)
            this.style.borderColor = "transparent";
        else if (!hideGridBool)
            this.style.borderColor = "white";
    }
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

/*Hide Grid Button=====================================================================*/
const hideGridButton = document.querySelector('#hideGridButton');

function hideGrid() {
    hideGridBool = !hideGridBool
    const squares = document.querySelectorAll('.square');

    if (hideGridBool) {
        squares.forEach(function (square) {
            if (square.style.backgroundColor === 'transparent')
                square.style.borderColor = 'transparent';
        });
    }
    else if (!hideGridBool) {
        squares.forEach(function (square) {
            if (square.style.backgroundColor === 'transparent')
                square.style.borderColor = 'white';
        });
    }
}

hideGridButton.addEventListener('mousedown', hideGrid);

/*Preview Modal========================================================================*/
// Get the modal
var modal = document.getElementById("previewModal");

// Get the button that opens the modal
var btn = document.getElementById("downloadButton");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function () {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

/*CSS to Image Converter=================================================================*/
document.getElementById("downloadButton").addEventListener("click", function () {
    html2canvas(document.getElementById("container"), { backgroundColor: null }).then(function (canvas) {
        document.getElementById("previewImg").appendChild(canvas);
    })
});

/*Paint Color Picker==================================================================*/
function changeColor(e) {
    //console.log("Paint Color: " +  e.target.value);
    paintColor = e.target.value;
}

const colorPicker = document.querySelector('#paintColorPicker');
colorPicker.addEventListener('input', changeColor);

/*Slider========================================================================*/
function adjustSize(e) {
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

