// menu click incon hide and show
var navlinks = document.getElementById("navlinks"); // Movido para fora das funções para que seja acessível em ambas.

function showMenu(){
    navlinks.style.right = "0";
}

function hideMenu(){
    navlinks.style.right = "-200px";
}
