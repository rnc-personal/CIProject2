// Settings (TO DO)

// let sizeSetting = document.getElementById('settings-form').options
// let gameSize = document.getElementById('settings-form').options.selectedIndex

// this will be the value from the options selcted - general game settings
const gameSize = 12
const grid = document.getElementById('game-grid')
const tiles = []

//The gems appearance can change but for referring to them, generic colors from the gems theme are used
// define what the other themes gems relate to (e.g 'Santa' = 'Blue)

const gems = [
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
    for(let i = 0; i < gameSize * gameSize; i++) {

        if (gameSize === 4 ) {
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

    let gemRandomise = Math.floor(Math.random() * gems.length)
    gridItem.classList.add(gems[gemRandomise])
    grid.appendChild(gridItem)
    tiles.push(gridItem)
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



