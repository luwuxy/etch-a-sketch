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

    // initial brightness
    let brightness = 100;
    grid.addEventListener("mouseover", (e) => {
        // randomize each rgb value
        e.target.style.backgroundColor = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
        // progressively darken the brightness of each grid
        e.target.style.filter = `brightness(${brightness}%)`;
        if (brightness !== 0) {
            brightness -= 10;
        }
    });
    container.appendChild(grid);
}

const btn = document.querySelector("#btn");
// onclick, prompt for the size
btn.addEventListener("click", (e) => {
    const size = prompt("How big do you want the grid to be per row/column? (max: 100)");
    if (size > 100) {
        alert("Maximum value is 100 pixels!");
        return;
    }
    if (isNaN(size) || size <= 0) {
        alert("Please input a valid number between 1 and 100!");
        return;
    }

    const totalSize = size * size;
    // remove each grid
    const oldGrid = document.querySelectorAll(".grid");
    oldGrid.forEach(grid => {
        grid.remove();
    })

    container.style.width = `${32 * size}px`;
    container.style.height = `${32 * size}px`;

    // initiate same loop to create grid
    for (let i = 0; i < totalSize; i++) {
        const grid = document.createElement("div");
        grid.classList.add("grid");
        grid.style.border = "1px solid black";
        grid.style.width = "32px";
        grid.style.height = "32px";
        grid.style.boxSizing = "border-box";

        let brightness = 100;
        grid.addEventListener("mouseover", (e) => {
            e.target.style.backgroundColor = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
            e.target.style.filter = `brightness(${brightness}%)`;
            if (brightness !== 0) {
                brightness -= 10;
            }
        });
        container.appendChild(grid);
    }
})