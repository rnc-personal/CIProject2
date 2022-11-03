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
const gameSize = 8

const grid = document.getElementById('game-grid')
const tiles = []

function createGrid() {
    for(let i = 0; i < gameSize * gameSize; i++) {
    const gridItem = document.createElement('grid-item')
    grid.appendChild(gridItem)
    tiles.push(gridItem)
    }
}