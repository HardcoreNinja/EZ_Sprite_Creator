function mouseDown(e){

    console.log(e);


   this.classList.toggle('squareOn');
}

function mouseOut(e){
    console.log(e);
    this.classList.remove('squareOn');
}
    const container = document.querySelector('#container');

    for(let i = 0; i < 256; i++)
    {
        let square = document.createElement('div'); 
        square.classList.add('square'); 
        square.addEventListener("mousedown", mouseDown)
        square.style.text
        container.appendChild(square);
    }

