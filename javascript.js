/*Create 16x16 Grid=============================================================*/
const container = document.querySelector('#container');

function mouseOver(e) {
    console.log(e);
    this.classList.toggle('squareOn');

}
for (let i = 0; i < 256; i++) {
    let square = document.createElement('div');
    square.classList.add('square');
    square.addEventListener("mouseover", mouseOver)
    square.style.text
    container.appendChild(square);
}

/*Clear Button=============================================================*/
function clear() {
    const squares = document.querySelectorAll('.squareOn');
    squares.forEach(square => square.classList.toggle('squareOn'));
}
const clearButton = document.querySelector('#clearButton');
clearButton.addEventListener("mousedown", clear);
