// document.body.addEventListener('DOMContentnLoaded', () => {
    //////////////////////////////////////////////////////////
    // GAME SETTINGS AND GLOBAL VARAIBLES

    //defining settings form
    // // this will be the value from the options selcted - general game settings
    let sizeSettingForm = document.getElementById('settings-form-size')
    let gameSize = parseInt(sizeSettingForm.value)

    sizeSettingForm.addEventListener('change', gameSelected)

    function gameSelected() {
        gameSize = parseInt(sizeSettingForm.value)
        console.log(gameSize)
        console.log('change')
        return gameSize
    }

    console.log(gameSize);
    //Basic Game Area variables
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

    //////////////////////////////////////////////////////////
    //WELCOME SCREEN
    //////////////////////////////////////////////////////////
    // TEMP - NEEDS MOVING TO THE SUBMIT EVENT ON SETTINGS FORM
    const userStart = document.querySelector('.start-game')
    const welcomeScreen = document.getElementById('welcome')

    userStart.addEventListener('click', () => {
        welcomeScreen.classList.remove('open')
        welcomeScreen.classList.add('hidden')
    })
// })
// need to attach this to the form submission, NOT the show/hide game button!
/**
 * Creates the grid area and gems dynamically when starting the game, based on the settings chosen.
 * Randomly selects a color from the gems available and applies an ID to the element
 */

function createGrid(gameSize) {
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
        // gridItem.classList.add(gemColors[gemRandomise]) This enabled iamges via class
        //Added Color as I was unable to find a good way to change the target gems class the dragged gems class
        //Using the background color property makes it easier to modify when the gem is dragged as it can be set more easily.
        gridItem.style.backgroundColor = gemColors[gemRandomise]
        grid.appendChild(gridItem)
        gemArray.push(gridItem)
        console.log(gameSize);


        //Add E.L for each gem so we know when the user is dragging a gem
        //Write Up How difficult this was to implement due to the E.L applying multiple times,
        //only working on even numbered items in the array (due to firing multiple times)

        let selectedGemID
        let selectedGemColor
        let gemBeingReplacedID
        let gemBeingReplacedColor

        for (let gem of gemArray) {
            gem.addEventListener('dragstart', dragStart);
            gem.addEventListener('dragover', dragOver)
            gem.addEventListener('dragenter', dragEnter)
            gem.addEventListener('dragleave', dragLeave)
            gem.addEventListener('dragend', dragEnd)
            gem.addEventListener('drop', dragDrop)
        }

        function dragStart() {
            console.log(this.id, 'dragstart')
            selectedGemID = parseInt(this.id)
            selectedGemColor = this.style.backgroundColor
        }

        function dragOver(e) {
            e.preventDefault()
            console.log(this.id, 'dragover')

        }

        function dragEnter(e) {
            e.preventDefault()
            console.log(this.id, 'dragenter')
        }

        function dragLeave() {
            console.log(this.id, 'dragleave')

        }

        function dragEnd() {
            console.log(this.id, 'dragend')
            //Check before the drop if the move will be valid
            let allowedMoves = [selectedGemID - 1, selectedGemID - gameSize, selectedGemID + 1, selectedGemID + gameSize]
            let validMove = allowedMoves.includes(gemBeingReplacedID)

            if (gemBeingReplacedID && validMove) {
                squareIdBeingReplaced = null
                console.log(validMove)
            } else if (gemBeingReplacedID && validMove === false) {
                gemArray[gemBeingReplacedID].style.backgroundColor = gemBeingReplacedColor
                gemArray[selectedGemID].style.backgroundColor = selectedGemColor
            } else gemArray[selectedGemID].style.backgroundColor = selectedGemColor
        }

        function dragDrop() {

            gemBeingReplacedColor = this.style.backgroundColor
            gemBeingReplacedID = parseInt(this.id)
            gemArray[selectedGemID].style.backgroundColor = gemBeingReplacedColor
            this.style.backgroundColor = selectedGemColor

            console.log(this.id, 'drop', gemBeingReplacedColor, selectedGemColor)
        }

        function gemFill() {
            // Replacement Gems when a match is made
        }

        // Five Rows and Columns are possible in harder games
        function matchFiveRow() {
            // Check Rows for a match of Five
        }

        function matchFiveCol() {
            // Check columns for a match of Five
        }

        function matchFourRow() {
            // Check Rows for a match of Four
        }

        function matchFourCol() {
            // Check columns for a match of Four
        }

        // Checking For three has to be done after Four for the scoring to work correctly.
        // Player should always get the highest match available
        function matchThreeRow() {
            // Check Rows for a match of Four
        }

        function matchThreeCol() {
            // Check columns for a match of Four
        }
    }
}