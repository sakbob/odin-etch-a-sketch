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
        console.log("Created Square #" + (i + 1));
    }
}

createGrid();
const box = document.querySelectorAll(".square");

box.forEach(square => {
    square.addEventListener("mouseover", () => {
        square.style.backgroundColor = "black";
    })
})