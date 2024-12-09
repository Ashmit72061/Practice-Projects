let noOfGrid = prompt("No of grid?");
const container = document.querySelector("#container");

// const widthOfContainer = container.getBoundingClientRect().width - 4;
const widthOfContainer = container.clientWidth;
const widthOfGrid = widthOfContainer/noOfGrid;
console.log(`${widthOfContainer}`);

console.log(widthOfGrid);

for(let i = 1; i <= noOfGrid*noOfGrid;++i){
    const grid = document.createElement("div");
    // grid.innerHTML = i;
    grid.setAttribute("style", `width: ${widthOfGrid}px; border: 2px solid black; box-sizing: border-box;`);
    container.appendChild(grid);
}

let color = "green";
const red = document.querySelector(".red");
red.addEventListener("click", ()=>{
    color = "red";
});
document.querySelector(".blue").addEventListener("click", ()=>{
    color = "blue";
});

const allGrid = container.querySelectorAll("*");
for(box of allGrid){

    box.addEventListener("mouseover", (e)=>{
        e.target.style.background = `${color}`;
    });
}

function reload() {
    location.reload();
}

document.querySelector(".grid").addEventListener("click", reload);