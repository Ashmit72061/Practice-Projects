const profileImg = document.querySelectorAll("img");
profileImg.forEach(img=>redirect(img));

function redirect(img){
    img.addEventListener("click", ()=>window.location.replace("watchingPage.html"))
}

// window.addEventListener("beforeunload", (event) =>{
// console.log(event.target);
// event.preventDefault();
// })
window.addEventListener("unload", (event) =>{
console.log(event.target);
event.preventDefault();
})