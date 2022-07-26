/*Variables======================================================================*/
let color = 'black';


/*Clear Button=================================================================*/
function clear() {
    const squares = document.querySelectorAll('.square');
    squares.forEach(square => square.style.backgroundColor = "transparent");
}

const clearButton = document.querySelector('#clearButton');
clearButton.addEventListener("mousedown", clear);

/*Create 16x16 Grid=============================================================*/
function mouseOver() {
    if (this.style.backgroundColor === "transparent")
        this.style.backgroundColor = color;
    else if (this.style.backgroundColor !== "transparent")
        this.style.backgroundColor = "transparent";
}

function drawGrid() {
    const container = document.querySelector('#container');

    for (let i = 0; i < 256; i++) {
        let square = document.createElement('div');
        square.classList.add('square');
        square.addEventListener("mouseover", mouseOver)
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




