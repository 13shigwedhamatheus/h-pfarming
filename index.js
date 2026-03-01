
//Copyright full year adjustment
const copyright = document.getElementById('copyright');
copyright.textContent = new Date().getFullYear();


//Hero header nav About drop-down menu
function openDropDown(){
    const drop = document.querySelector(".dropdown");
    //document.getElementById("main-drop").addEventListener("mouseenter", function (){
    if (drop.style.display == "block"){
        document.querySelector(".dropdown").style.display = "none";
    }
    else{
        document.querySelector(".dropdown").style.display = "block";
    }    
    //})
}

/*function closeNav(){

    //document.getElementById("main-drop").addEventListener("mouseleave", function (){
        document.querySelector(".dropdown").style.display = "none";
    //})
}*/

//@media screens menu button activations

//opening the menu button
/*document.getElementById("open-menu-btn").addEventListener('click',() =>{
    document.querySelector("#hero header nav ul").style.display = "block";
})*/
function openNav(){

    const nav = document.querySelector('#hero header nav ul');
    const opensvg = 'align-justify.svg';
    const closesvg = 'xmark.svg';
    const navbtnsvg = document.getElementById('navsvg');

    if (nav.style.display == 'block'){
        document.querySelector("#hero header nav ul").style.display = "none";
        navbtnsvg.setAttribute('src',opensvg)
    }
    else{
        document.querySelector("#hero header nav ul").style.display = "block";
        navbtnsvg.setAttribute('src',closesvg)
        
    }
}

//closing the menu button
/*document.getElementById("close-menu-btn").addEventListener("click", () =>{
    document.querySelector("#hero header nav ul").style.display = "none";
})*/