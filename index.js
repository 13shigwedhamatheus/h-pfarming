
//Copyright full year adjustment
const copyright = document.getElementById('copyright');
copyright.textContent = new Date().getFullYear();


//Hero header nav About drop-down menu
document.getElementById("main-drop").addEventListener("mouseenter", function (){
    document.querySelector(".dropdown").style.display = "block";
})
document.getElementById("main-drop").addEventListener("mouseleave", function (){
    document.querySelector(".dropdown").style.display = "none";
})

//@media screens menu button activations

//opening the menu button
document.getElementById("open-menu-btn").addEventListener('click',() =>{
    document.querySelector("#hero header nav ul").style.display = "block";
})

//closing the menu button
document.getElementById("close-menu-btn").addEventListener("click", () =>{
    document.querySelector("#hero header nav ul").style.display = "none";
})