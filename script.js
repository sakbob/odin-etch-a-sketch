const container = document.querySelector("#container");
let gridSize = 16;
let numGrids = 960 / gridSize;

function createGrid() {
    for (let i = 0; i < (gridSize ** 2); i++) {
        const div = document.createElement("div");
        div.classList.add("square");
        div.style.height = numGrids + "px";
        div.style.width = numGrids + "px";
        container.appendChild(div);
    }
}

function listener() {
    const box = document.querySelectorAll(".square");
    box.forEach(square => {
        square.addEventListener("mouseover", () => {
            square.style.backgroundColor = "black";
        })
    })
}

createGrid();
listener();


const but = document.querySelector(".size-button");

but.addEventListener("click", () => {
    while (1) {
        let tempGridSize = Number(prompt("How many squares per side would you like? (Max 100): "));

        if (tempGridSize == null || isNaN(tempGridSize) || tempGridSize > 100 || tempGridSize < 1) {
            alert("Please enter a valid number (Max 100)");
            continue;
        }

        gridSize = tempGridSize;
        numGrids = 960 / gridSize;
        container.replaceChildren();
        createGrid();
        listener();
        break;
    }
})