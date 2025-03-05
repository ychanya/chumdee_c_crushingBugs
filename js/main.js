let theButtons = document.querySelectorAll('#buttonHolder img'),
puzzleBoard = document.querySelector('.puzzle-board'),
puzzlePieces = document.querySelectorAll('.puzzle-pieces img'),
dropZones = document.querySelectorAll('.drop-zone'),
draggedPiece;


function changeBGImage() {
    puzzleBoard.style.backgroundImage = `url(images/backGround${this.id}.jpg)`;
    resetPieces(this.id);
}
function resetPieces(id){
    dropZones.forEach (zone => {
        if (zone.children.length > 0) 
            puzzlePiecesContainer.appendChild(zone.firstChild);
        });

        puzzlePieces[0].src = `images/topLeft${id}.jpg`;
        puzzlePieces[1].src = `images/topRight${id}.jpg`;
        puzzlePieces[2].src = `images/bottomLeft${id}.jpg`;
        puzzlePieces[3].src = `images/bottomRight${id}.jpg`;
}
function handleStartDrag() {
    console.log('started dragging this piece: ', this);
    draggedPiece = this;
}

function handleDragOver(e) {
    e.preventDefault(); 
	console.log('you dragged over me');
}

function handleDrop(e) {
    e.preventDefault();
    console.log('dropped something on me');
    this.appendChild(draggedPiece);
}


theButtons.forEach(button => button.addEventListener('click', changeBGImage));

puzzlePieces.forEach(piece => piece.addEventListener('dragstart', handleStartDrag));

dropZones.forEach(zone => zone.addEventListener('dragover', handleDragOver));

dropZones.forEach(zone => zone.addEventListener('drop', handleDrop));