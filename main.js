
let centre = document.getElementById("elemCentre");
let bouton = document.getElementById("click");


//Dans cette fonction on fait apparaitre les elements centraux
// et disparaitre le bouton "click"
function apparition(){
  centre.style.display='block';
  bouton.style.display='none';
}
bouton.onclick = function(){
  apparition();
}

function google(){
  document.location.href="https://www.google.fr/";
}

function redir(){
  let nmbr= document.monformulaire.recherche.value;
  let adress="https://www.google.fr/";
  google;
}
setTimeout(popUp,3000);

function popUp(){
  alert("Viens faire un petit tour sur mon site!!!!");
 }


//setTimeout(mafonction, 2000);
