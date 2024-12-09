const container = document.querySelector("#container");

let i = 1;
let x = prompt("No of grid?");
const gridWidth = (container.offsetWidth - 8)/x;
console.log(gridWidth);
document.querySelector("#noOfGrid").addEventListener("click", (e)=>{
    let y = prompt("No of grid?");
    createNewGrid(y);
});
while(i <=x*x){
    const gridBox = document.createElement("div"); 
    gridBox.setAttribute("style", `width: ${gridWidth}px; border: 1px solid black; box-sizing:border-box`);
    container.appendChild(gridBox);
    ++i;
}

// --------A try to make it so that whenever btn is clicked the grid get reset-------//

// document.querySelector("#noOfGrid").addEventListener("click", (e)=>{
//     let y = prompt("No of grid?");
//     createNewGrid(y);
// });

// function createNewGrid(x){
//     // Remove Previous grid
//     document.querySelector("#container").innerHTML = "";
//     container.appendChild;

//     // Create New
//     while(i <=x*x){
//         const gridBox = document.createElement("div");    
//         gridBox.setAttribute("style", `width: ${gridWidth}px; border: 1px solid black; box-sizing:border-box`);
//         container.appendChild(gridBox);
//         ++i;
//     }
// }

let selectedColor = "green";

function color(event){
    // event.target.backgroundcolor = "red";
    event.target.style.background = selectedColor;
}


const grid = document.querySelectorAll("#container>*");
for(box of grid){
    document.querySelector("#red").addEventListener("click", ()=>{
        selectedColor = "red";
    });
    document.querySelector("#blue").addEventListener("click", ()=>{
        selectedColor = "blue";
    });

    box.addEventListener("mouseover", (e)=>{
        e.target.style.background = `${selectedColor}`;
    })
}
