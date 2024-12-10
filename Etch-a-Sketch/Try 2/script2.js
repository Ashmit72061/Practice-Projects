const container = document.querySelector("#container");
createGrid(container,16);

//All Btns script
let color = "green";
const red = document.querySelector(".red");
red.addEventListener("click", () => {
    color = "red";
});
document.querySelector(".blue").addEventListener("click", () => {
    color = "blue";
});
document.querySelector(".green").addEventListener("click", () => {
    color = "green";
});
document.querySelector(".eraser").addEventListener("click", () => {
    color = "white";
});

document.querySelector(".grid").addEventListener("click", ()=>{
    let x  = prompt("No of Grid?")    
    createGrid(container,x);
});

document.querySelector(".clear").addEventListener("click", ()=>{
    const allGrid = container.querySelectorAll("*");
    for(box of allGrid){
        box.style.background = "white";
    }
});

/*
To create grid 
1. remove all pre existing boxes
2. create new box and add event listener to them at the same time
3. append those boxes
*/

function removeAllBoxes(){
    while(container.firstChild){
        container.firstChild.remove();
    }
}

function createGrid(container, noOfGrid){
    removeAllBoxes();

    // let noOfGrid = prompt("No of grid?");
    const widthOfContainer = container.clientWidth;
    const widthOfGrid = widthOfContainer / noOfGrid;
    let isMouseDown = false;
    for (let i = 1; i <= noOfGrid * noOfGrid; ++i) {
        const grid = document.createElement("div");
        grid.setAttribute("style", `width: ${widthOfGrid}px; border: 1px solid black; box-sizing: border-box;`);

        //Trying to add all event listeners in the same loop
        grid.addEventListener("mousedown", (e) => {
            isMouseDown = true;
            e.target.style.background = `${color}`;
        });
        grid.addEventListener("mouseup", () => isMouseDown = false);

        grid.addEventListener("mouseover", (e) => {
            if (isMouseDown === true) {
                e.target.style.background = `${color}`;
            }
        });

        container.appendChild(grid);
    }

}