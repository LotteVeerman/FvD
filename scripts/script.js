// JavaScript Document


// menu openen met hamburger button
var openButton = document.querySelector("header > button");

openButton.addEventListener("click", openMenu);

function openMenu() {  
  var deNav = document.querySelector("nav");
  deNav.classList.add("toonMenu");
}


// menu sluiten met de sluit button 
var sluitButton = document.querySelector("nav button");

sluitButton.addEventListener("click", sluitMenu);

function sluitMenu() {
  var deNav = document.querySelector("nav");
  deNav.classList.remove("toonMenu");
}


// menu sluiten met escape 
window.addEventListener("keydown", handleKeydown);

function handleKeydown(event) {
  if (event.key == "Escape") {
    var deNav = document.querySelector("nav");
    deNav.classList.remove("toonMenu");
  }
}



// tabjes in het menu
function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
  }

  // Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();





// fotogallerij detail pagina
function changeFoto(fotoSrc) {
  document.getElementById('main').src = fotoSrc;
  if (fotoSrc.includes("images/foto19-mobile.jpg")){
    fotoIndex = 1;
    return false;
  }
  if (fotoSrc.includes("images/foto20-mobile.jpg")){
    fotoIndex = 2;
    return false;
  }
  if (fotoSrc.includes("images/foto21-mobile.jpg")){
    fotoIndex = 3;
    return false;
  }
  if (fotoSrc.includes("images/foto22-mobile.jpg")){
    fotoIndex = 4;
    return false;
  }
  if (fotoSrc.includes("images/foto23-mobile.jpg")){
    fotoIndex = 5;
    return false;
  }
  if (fotoSrc.includes("images/foto24-mobile.jpg")){
    fotoIndex = 6;
    return false;
  }
  if (fotoSrc.includes("images/foto25-mobile.jpg")){
    fotoIndex = 7;
    return false;
  }
}




let fotoIndex = 1;

function linksaf() {
  if (fotoIndex == 1) {
    document.getElementById('main').src = "images/foto25-mobile.jpg";
    fotoIndex = 7;
    return false;
  }
  if (fotoIndex == 2) {
    document.getElementById('main').src = "images/foto19-mobile.jpg";
    fotoIndex = 1;
    return false;
  }
  if (fotoIndex == 3) {
    document.getElementById('main').src = "images/foto20-mobile.jpg";
    fotoIndex = 2;
    return false;
  }
  if (fotoIndex == 4) {
    document.getElementById('main').src = "images/foto21-mobile.jpg";
    fotoIndex = 3;
    return false;
  }
  if (fotoIndex == 5) {
    document.getElementById('main').src = "images/foto22-mobile.jpg";
    fotoIndex = 4;
    return false;
  }
  if (fotoIndex == 6) {
    document.getElementById('main').src = "images/foto23-mobile.jpg";
    fotoIndex = 5;
    return false;
  }
  if (fotoIndex == 7) {
    document.getElementById('main').src = "images/foto24-mobile.jpg";
    fotoIndex = 6;
    return false;
  }
}

function rechtsaf() {
  if (fotoIndex == 1) {
    document.getElementById('main').src = "images/foto20-mobile.jpg";
    fotoIndex = 2;
    return false;
  }
  if (fotoIndex == 2) {
    document.getElementById('main').src = "images/foto21-mobile.jpg";
    fotoIndex = 3;
    return false;
  }
  if (fotoIndex == 3) {
    document.getElementById('main').src = "images/foto22-mobile.jpg";
    fotoIndex = 4;
    return false;
  }
  if (fotoIndex == 4) {
    document.getElementById('main').src = "images/foto23-mobile.jpg";
    fotoIndex = 5;
    return false;
  }
  if (fotoIndex == 5) {
    document.getElementById('main').src = "images/foto24-mobile.jpg";
    fotoIndex = 6;
    return false;
  }
  if (fotoIndex == 6) {
    document.getElementById('main').src = "images/foto25-mobile.jpg";
    fotoIndex = 7;
    return false;
  }
  if (fotoIndex == 7) {
    document.getElementById('main').src = "images/foto19-mobile.jpg";
    fotoIndex = 1;
    return false;
  }
}

// wishlist knop
function wishlist(){
  document.getElementById('wishlist').classList.toggle("liked");
  document.getElementById("textbutton").innerHTML = "VERWIJDER VAN WISHLIST";

  if (document.getElementById('heart').src.includes("images/heart-line.svg")) {
    document.getElementById('heart').src = "/images/heart-full.svg";
    return false;
  }
  if (document.getElementById('heart').src.includes("images/heart-full.svg")) {
    document.getElementById('heart').src = "/images/heart-line.svg";
    return false;
  }
}