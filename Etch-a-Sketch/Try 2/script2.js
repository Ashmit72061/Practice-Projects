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
    grid.setAttribute("style", `width: ${widthOfGrid}px; border: 1px solid black; box-sizing: border-box;`);
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
document.querySelector(".eraser").addEventListener("click", ()=>{
    color = "white";
});

let isMouseDown = false;

const allGrid = container.querySelectorAll("*");
for(box of allGrid){

    box.addEventListener("mousedown", (e)=> {
        isMouseDown = true;
        e.target.style.background = `${color}`;
    });
    box.addEventListener("mouseup", ()=> isMouseDown = false);

    box.addEventListener("mouseover", (e)=>{
        if(isMouseDown === true){
            e.target.style.background = `${color}`;
        }
    });
}

function reload() {
    location.reload();
}

document.querySelector(".grid").addEventListener("click", reload);

function clear(){
    for(dibba of allGrid){
        dibba.style.background = "white";
        console.log(dibba);
    }
}

document.querySelector(".clear").addEventListener("click", clear);


function removeAllBoxes(){
    for(dibba of allGrid){
        dibba.remove();
    }
}

/*
To change no of grid 
    1. remove all pre existing boxes
    2. create new box and add event listener to them at the same time
    3. append those boxes
*/