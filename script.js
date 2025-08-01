const container = document.querySelector(".container");
container.style.display = "flex";
container.style.width = "512px";
container.style.height = "512px";
container.style.flexWrap = "wrap";

// create a 32px sized box 256 times to create a 16x16 grid
for (let i = 0; i < 256; i++) {
    const grid = document.createElement("div");
    grid.classList.add("grid");
    grid.style.border = "1px solid black";
    grid.style.width = "32px";
    grid.style.height = "32px";
    grid.style.boxSizing = "border-box";
    grid.addEventListener("mouseover", (e) => {
        e.target.style.backgroundColor = "red";
    })
    container.appendChild(grid);
}

// 
const btn = document.querySelector("#btn");
btn.addEventListener("click", (e) => {
    const size = prompt("How big do you want the grid to be? (px)");
    const totalSize = size * size;
    const oldGrid = document.querySelectorAll(".grid");
    oldGrid.forEach(grid => {
        grid.remove();
    })

    for (let i = 0; i < totalSize; i++) {
        const grid = document.createElement("div");
        grid.classList.add("grid");
        grid.style.border = "1px solid black";
        grid.style.width = "32px";
        grid.style.height = "32px";
        container.style.width = `${32 * size}px`;
        container.style.height = `${32 * size}px`;
        grid.style.boxSizing = "border-box";
        grid.addEventListener("mouseover", (e) => {
            e.target.style.backgroundColor = "red";
        })
        container.appendChild(grid);
    }
})