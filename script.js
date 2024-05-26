const container = document.querySelector(".canvas-container");
let gridSize = 16;
let numGrids = 960 / gridSize;
let transparentMode = false;
let rainbowMode = false;

function createGrid() {
    for (let i = 0; i < (gridSize ** 2); i++) {
        const div = document.createElement("div");
        div.classList.add("square");
        div.style.height = numGrids + "px";
        div.style.width = numGrids + "px";
        div.style.opacity = 0;
        container.appendChild(div);
    }
}

function listener() {
    const box = document.querySelectorAll(".square");
    box.forEach(square => {
        square.addEventListener("mouseover", () => {
            if (rainbowMode) {
                let red = Math.floor(Math.random() * 256);
                let green = Math.floor(Math.random() * 256);
                let blue = Math.floor(Math.random() * 256);
                square.style.backgroundColor = "rgb(" + red + "," + green + "," + blue + ")";
            }
            else {
                square.style.backgroundColor = "black";
            }

            if (transparentMode) {
                square.style.opacity = Number(square.style.opacity) + 0.1;
            }
            else {
                square.style.opacity = 1;
            }
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