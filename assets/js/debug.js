for (let gem of gemArray) {
    gem.addEventListener('click', gemSelect)
    gem.addEventListener('dragstart', dragStart);
    gem.addEventListener('dragover', dragOver)
    gem.addEventListener('dragenter', dragEnter)
    gem.addEventListener('dragleave', dragLeave)
    gem.addEventListener('dragend', dragEnd)
    gem.addEventListener('drop', dragDrop)
}


//Tried alternative method but result is the same - click is registered multiple times depending on where it sits in the nodelist!

gemArray.forEach(gem => gem.addEventListener('dragstart', dragStart))
gemArray.forEach(gem => gem.addEventListener('dragover', dragOver))
gemArray.forEach(gem => gem.addEventListener('dragenter', dragEnter))
gemArray.forEach(gem => gem.addEventListener('dragleave', dragLeave))
gemArray.forEach(gem => gem.addEventListener('dragend', dragEnd))
gemArray.forEach(gem => gem.addEventListener('drop', dragDrop))