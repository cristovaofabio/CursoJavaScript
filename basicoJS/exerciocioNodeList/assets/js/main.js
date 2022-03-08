const paragrafosDiv = document.querySelector('.paragrafos');
const paragrafosP = paragrafosDiv.querySelectorAll('p');

const estilosBody = getComputedStyle(document.body);
const backgroundColorBody = estilosBody.backgroundColor;
console.log(backgroundColorBody);
for(let elemento of paragrafosP){
    elemento.style.backgroundColor = backgroundColorBody;
    elemento.style.color = '#FFFFFF';
}