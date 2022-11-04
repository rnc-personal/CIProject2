// Settings (TO DO)

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
        // gridItem.setAttribute('draggable', true)
        gridItem.setAttribute('id', i)

        //Populate Grid with random Gems
        let gemRandomise = Math.floor(Math.random() * gemColors.length)
        gridItem.classList.add(gemColors[gemRandomise])
        grid.appendChild(gridItem)
        gemArray.push(gridItem)

        //Add E.L for each gem so we know when the user is dragging a gem
        //Write Up How difficult this was to implement due to the E.L applying multiple times,
        //only working on even numbered items in the array (due to firing multiple times)

        //Had to define all of the gem items again here to get a Nodelist back (rather than an Array)
        const allGems = document.querySelectorAll('.grid-item');

        allGems.forEach(gem => {
            gem.addEventListener('click', function gemSelect(event) {
                //This is critial to ensure that all items can be selected,
                //otherwise the click event propagates for all the  remaining items in the nodeList!
                event.stopImmediatePropagation();

                //Highlight Selected Gem
                this.classList.toggle('selected')
                selectedPair.push(gem)
                checkSelectedGems()
            });
        });
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

function checkSelectedGems() {
    //Check Which Gems are selected
    const selectedGem1 = document.getElementsByClassName('selected')[0]
    const selectedGem2 = document.getElementsByClassName('selected')[1]
    let invalidGem = document.getElementsByClassName('selected')[2]

    //Create a pair for moving and checking for a match
    //THis needs some thought. If more than 2 items are in the array, remove the last one, take off the selected class and show a message
    if (parseInt(selectedPair.length) >= parseInt(gemBlockCondition)) {
        console.log('Select Only 2 Gems!');
        if (invalidGem) {
            invalidGem.classList.remove('selected')
            selectedPair.pop(invalidGem)
        } else {
            console.log('invalid gem not found')
        }
    }



    console.log(selectedGem1, selectedGem2, invalidGem, selectedPair.length, typeof(selectedPair), gemBlockCondition, `Is block number the same as the array length: ${selectedPair.length >= gemBlockCondition}`)
}

//Moving Gems
    


// function gemMove(selectedPair, selectedGem1, selectedGem2) {
//     // Step 1
//     let temp = selectedPair[selectedGem1];
  
//     // Step 2
//     selectedPair[selectedGem1] = selectedPair[selectedGem2];
  
//     // Step 3
//     selectedPair[selectedGem2] = temp;
//   }
    
//   gemMove(selectedPair, selectedGem1, selectedGem2);
  
//   console.log(selectedPair); 