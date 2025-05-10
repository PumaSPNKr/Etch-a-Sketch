const gridContainer = document.querySelector("#container");
const maxWidth = 960;
const maxHeight = 960;
let gridNumber = 20;

const resetButton = document.querySelector("#resetButton");
resetButton.addEventListener('click', (e) => {
    promptUser();
})

function promptUser(){
    let gridSize = parseInt(prompt("Enter a number between 1-100 for grid size."));

    while (isNaN(gridSize) || gridSize < 1 || gridSize > 100){
        gridSize = parseInt(prompt("Enter a number between 1-100 for grid size."));
    }
    
    initializeGrid(gridSize);
}

function initalizeGrid(gridSize){
    
}

for (let i = 0; i < gridNumber; i++){
    
    let newRow = document.createElement("div");
    newRow.style = "background-color: lightgreen; height: " + maxHeight/gridNumber + "px; border: 1px black solid; display: flex;";

    gridContainer.appendChild(newRow);
    addColumns(newRow);
    
}


function addColumns(row){
    for (let i = 0; i < gridNumber; i++){
        let newColumn = document.createElement("div");
        newColumn.style = "background-color: black; width: " + maxWidth/gridNumber + "px; border: 1px blue solid; margin: -1px;"
        newColumn.classList.toggle("grid");
        row.appendChild(newColumn);

        newColumn.addEventListener("mouseover", (e) => {
            let letters = "0123456789ABCDEF";
            let color = "#";
            for (let j = 0; j < 6; j++){
                color += letters[Math.floor(Math.random() * 16)];
            }

            newColumn.style.backgroundColor = color;
        } )
    }
}

