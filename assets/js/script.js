// Settings (TO DO)

// let sizeSetting = document.getElementById('settings-form').options
// let gameSize = document.getElementById('settings-form').options.selectedIndex

// this will be the value from the options selcted - general game settings
const gameSize = 12
const grid = document.getElementById('game-grid')
const gemArray = []

//The gems appearance can change but for referring to them, generic colors from the gems theme are used
// define what the other themes gems relate to (e.g 'Santa' = 'Blue)

const gemColors = [
    'red',
    'green',
    'blue',
    'yellow'
]

// need to attach this to the form submission, NOT the show/hide game button!
/**
 * Creates the grid area and gems dynamically when starting the game, based on the settings chosen.
 * Randomly selects a color from the gems available and applies an ID to the element
 */

function createGrid() {
    for (let i = 0; i < gameSize * gameSize; i++) {

        if (gameSize === 4) {
            grid.classList.add('small-grid')
        } else if (gameSize === 8) {
            grid.classList.add('med-grid')
        } else if (gameSize === 12) {
            grid.classList.add('large-grid')
        }

        const gridItem = document.createElement('div')
        gridItem.classList.add('grid-item')
        gridItem.setAttribute('draggable', true)
        gridItem.setAttribute('id', i)

        let gemRandomise = Math.floor(Math.random() * gemColors.length)
        gridItem.classList.add(gemColors[gemRandomise])
        grid.appendChild(gridItem)
        gemArray.push(gridItem)
    }
}

// TEMP - NEEDS MOVING TO THE SUBMIT EVENT ON SETTINGS FORM
const showHide = document.querySelector('.temp')
const welcomeScreen = document.getElementById('welcome')

showHide.addEventListener('click', () => {

    welcomeScreen.classList.remove('open')
    welcomeScreen.classList.add('hidden')
    createGrid()
})

//Moving Gems

for (gem of gemArray) {
    gem.addEventListener('dragstart', dragStart);
    gem.addEventListener('dragover', dragOver)
    gem.addEventListener('dragenter', dragEnter)
    gem.addEventListener('dragleave', dragLeave)
    gem.addEventListener('dragend', dragEnd)
    gem.addEventListener('drop', dragDrop)
}

function dragStart() {
    console.log((this.id, 'dragstart'))
}

function dragOver() {
    console.log((this.id, 'dragover'))
}

function dragEnter() {
    console.log((this.id, 'dragenter'))
}

function dragLeave() {
    console.log((this.id, 'dragleave'))
}

function dragEnd() {
    console.log((this.id, 'dragend'))
}

function dragDrop() {
    console.log((this.id, 'drop'))
}