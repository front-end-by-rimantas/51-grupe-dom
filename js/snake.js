import { header } from './header.js';
header('snake');

const formDOM = document.forms[0];
const [widthDOM, heightDOM] = formDOM.querySelectorAll('input');
const [widthNoteDOM, heightNoteDOM] = formDOM.querySelectorAll('.note');
const worldDOM = document.getElementById('world');
const cellSize = 48;

const snakePosition = {
    x: 0,
    y: 0,
};
const chickenPosition = {
    x: 2,
    y: 2,
};

function renderWorld(width, height) {
    worldDOM.innerHTML = `<div class="row">${'<div class="cell"></div>'.repeat(width)}</div>`.repeat(height)
        + '<img class="chicken" style="top: 96px; left: 96px;" src="./chicken.png" alt="Chicken">'
        + '<img class="snake" style="top: 0px; left: 0px;" src="./snake-round.png" alt="Snake">';

    const snakeDOM = document.querySelector('.snake');
    const chickenDOM = document.querySelector('.chicken');

    snakeDOM.style.top = (snakePosition.y * cellSize) + 'px';
    snakeDOM.style.left = (snakePosition.x * cellSize) + 'px';

    chickenDOM.style.top = (chickenPosition.y * cellSize) + 'px';
    chickenDOM.style.left = (chickenPosition.x * cellSize) + 'px';
}

function gameOfSnakeAndChicken() {
    const { clientHeight, clientWidth } = worldDOM;

    const width = Math.floor(clientWidth / cellSize);
    const height = Math.floor(clientHeight / cellSize);

    // uzpildome forma su perskaiciuota informacija pagal ekrano dydi
    widthDOM.value = width;
    widthDOM.max = width;
    widthNoteDOM.textContent = 'max plotis: ' + width;

    heightDOM.value = height;
    heightDOM.max = height;
    heightNoteDOM.textContent = 'max aukštis: ' + height;

    renderWorld(width, height);
}

gameOfSnakeAndChicken();

window.addEventListener('resize', gameOfSnakeAndChicken);

window.addEventListener('keyup', event => {
    console.log(event.key);
});

formDOM.addEventListener('submit', event => {
    event.preventDefault();

    const newWidth = widthDOM.value;
    const newHeight = heightDOM.value;

    renderWorld(newWidth, newHeight);
});