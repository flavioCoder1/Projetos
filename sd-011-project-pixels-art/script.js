// CORES DA PALETA

const black = document.querySelectorAll('.color')[0];
black.style.backgroundColor = 'black';

const green = document.querySelectorAll('.color')[1];
green.style.backgroundColor = 'green';

const blue = document.querySelectorAll('.color')[2];
blue.style.backgroundColor = 'blue';

const yellow = document.querySelectorAll('.color')[3];
yellow.style.backgroundColor = 'yellow';

// CRIA TABELA DE PIXELS

const pixelBoard = document.getElementById('pixel-board');

for (let indexRow = 0; indexRow < 5; indexRow += 1) {
  const pixelLine = document.createElement('div');
  pixelLine.className = 'pixelLine';
  pixelBoard.appendChild(pixelLine);
  for (let indexColl = 0; indexColl < 5; indexColl += 1) {
    const pixelCell = document.createElement('div');
    pixelCell.className = 'pixel';
    pixelLine.appendChild(pixelCell);
    pixelCell.style.backgroundColor = 'white';
  }
}

// ADICIONAR COR SELECIONADA DA PALETA

const paletteColors = document.querySelector('#color-palette');

function selectColor() {
  paletteColors.addEventListener('click', (event) => {
    const color = document.querySelector('.selected');
    if (event.target.id !== 'color-palette') {
      color.classList.remove('selected');
      event.target.classList.add('selected');
    }
  });
}

selectColor();
// COLORIR PIXEL
pixelBoard.addEventListener('click', (event) => {
  const selectedColor = document.querySelector('.selected').id;
  if (event.target.className === 'pixel') {
    const pixelSelected = event.target;
    pixelSelected.style.backgroundColor = selectedColor;
  }
});

// BOTAO DE LIMPAR

const cleartableButton = document.getElementById('clear-board');

cleartableButton.innerText = 'Limpar';

cleartableButton.addEventListener('click', () => {
  const pixel = document.querySelectorAll('.pixel');
  for (let index = 0; index < pixel.length; index += 1) {
    pixel[index].style.backgroundColor = 'white';
  }
});
