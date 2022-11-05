//////////////////////////////////////////////////////////
// GAME SETTINGS AND GLOBAL VARAIBLES

// let sizeSetting = document.getElementById('settings-form').options
// let gameSize = document.getElementById('settings-form').options.selectedIndex

// this will be the value from the options selcted - general game settings
const gameSize = 4
const grid = document.getElementById('game-grid')
const gemArray = []

let selectedPair = []
let gemBlockCondition = 3
//The gems appearance can change but for referring to them, generic colors from the gems theme are used
// define what the other themes gems relate to (e.g 'Santa' = 'Blue)

const gemColors = [
    'red',
    'green',
    'blue',
    'yellow'
]

//////////////////////////////////////////////////////////

// need to attach this to the form submission, NOT the show/hide game button!
/**
 * Creates the grid area and gems dynamically when starting the game, based on the settings chosen.
 * Randomly selects a color from the gems available and applies an ID to the element
 */

function createGrid() {
    for (let i = 0; i < gameSize * gameSize; i++) {

        //Checking Settings to know how large the grid should be
        if (gameSize === 4) {
            grid.classList.add('small-grid')
        } else if (gameSize === 8) {
            grid.classList.add('med-grid')
        } else if (gameSize === 12) {
            grid.classList.add('large-grid')
        }

        //Setting Up Items in the Grid
        const gridItem = document.createElement('div')
        gridItem.classList.add('grid-item')
        gridItem.setAttribute('draggable', true)
        gridItem.setAttribute('id', i)

        //Populate Grid with random Gems
        let gemRandomise = Math.floor(Math.random() * gemColors.length)
        gridItem.classList.add(gemColors[gemRandomise])
        grid.appendChild(gridItem)
        gemArray.push(gridItem)

        //Add E.L for each gem so we know when the user is dragging a gem
        //Write Up How difficult this was to implement due to the E.L applying multiple times,
        //only working on even numbered items in the array (due to firing multiple times)

        let selectedGemID
        let selectedGemType 
        let gemBeingReplacedID
        let gemBeingReplacedType
        
        gemArray.forEach(gem => gem.addEventListener('dragstart', dragStart))
        gemArray.forEach(gem => gem.addEventListener('dragover', dragOver))
        gemArray.forEach(gem => gem.addEventListener('dragenter', dragEnter))
        gemArray.forEach(gem => gem.addEventListener('dragleave', dragLeave))
        gemArray.forEach(gem => gem.addEventListener('dragend', dragEnd))
        gemArray.forEach(gem => gem.addEventListener('drop', dragDrop))

    function dragStart() {}
    console.log(this.id, 'dragstart')

    }

    function dragOver() {
        console.log(this.id, 'dragover')

    }

    function dragEnter() {
        console.log(this.id, 'dragenter')
    }

    function dragLeave() {
        console.log(this.id, 'dragleave')

    }

    function dragEnd() {
        console.log(this.id, 'dragend')

    }

    function dragDrop() {
        console.log(this.id, 'drop')

    }

}


//WELCOME SCREEN
//////////////////////////////////////////////////////////
// TEMP - NEEDS MOVING TO THE SUBMIT EVENT ON SETTINGS FORM
const showHide = document.querySelector('.temp')
const welcomeScreen = document.getElementById('welcome')

showHide.addEventListener('click', () => {

    welcomeScreen.classList.remove('open')
    welcomeScreen.classList.add('hidden')
    createGrid()
})