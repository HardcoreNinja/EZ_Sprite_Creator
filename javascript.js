function mouseOver(e){

    console.log(e);

   this.classList.toggle('squareOn');
}

    const container = document.querySelector('#container');

    for(let i = 0; i < 256; i++)
    {
        let square = document.createElement('div'); 
        square.classList.add('square'); 
        square.addEventListener("mouseover", mouseOver)
        square.style.text
        container.appendChild(square);
    }

