// Settings (TO DO)

// let sizeSetting = document.getElementById('settings-form').options
// let gameSize = document.getElementById('settings-form').options.selectedIndex

// function gameSelected(gameSize) {
      

//     if (gameSize === 0) {
//         console.log('easy mode')
//     } else if (gameSize === 1) {
//         console.log('normal')
//     } else if (gameSize === 2) {
//         console.log('hard mode')
//     }
// }

// this will be the value fro the options selcted
const gameSize = 4

const grid = document.getElementById('game-grid')
const tiles = []

/**
 * Creates the grid area and gems dynamically when starting the game, based on the settings chosen
 */

// need to attach this to the form submission, NOT the show/hide game button!
function createGrid() {
    for(let i = 0; i < gameSize * gameSize; i++) {
    const gridItem = document.createElement('div')
    gridItem.classList.add('grid-item')
    grid.appendChild(gridItem)
    tiles.push(gridItem)
    }
}

// tempory - REMOVE ME!
const showHide = document.querySelector('.temp')
const welcomeScreen = document.getElementById('welcome')

showHide.addEventListener('click', () => {

    welcomeScreen.classList.remove('open')
    welcomeScreen.classList.add('hidden')
    createGrid()
})



