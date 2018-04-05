var textboja = document.querySelector("h3");
var boja1=document.querySelector("#boja1");
var boja2=document.querySelector("#boja2");
var pozadina=document.querySelector("body");
function vrijednostboje() {
    pozadina.style.background="linear-gradient(to right, "+ boja1.value + ", " + boja2.value +")";
    textboja.textContent=pozadina.style.background + ";";
}
    

boja1.addEventListener("input",vrijednostboje);
boja2.addEventListener("input",vrijednostboje);