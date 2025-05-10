const gridContainer = document.querySelector("#container");
const maxWidth = 800;
const maxHeight = 800;
let gridNumber = 20;

for (let i = 0; i < gridNumber; i++){
    
    let newRow = document.createElement("div");
    newRow.style = "background-color: lightgreen; height: " + maxHeight/gridNumber + "px; border: 1px black solid; display: flex;";

    gridContainer.appendChild(newRow);
    addColumns(newRow);
    
}


function addColumns(row){
    for (let i = 0; i < gridNumber; i++){
        let newColumn = document.createElement("div");
        newColumn.style = "background-color: black; width: " + maxWidth/gridNumber + "px; border: 1px blue solid;"
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

