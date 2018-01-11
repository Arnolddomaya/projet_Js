
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
  let nmbr1= document.monformulaire.recherche.value;
  nmbr= nmbr1.split(" ").join('+');
  let adress="https://www.google.fr/search?q="+nmbr;
  alert(adress);
  alert("Petit soucis: \n Vous ne pouvez pas être redirigé vers "+adress);
  self.location=adress;


}
setTimeout(popUp,10000);
function popUp(){
  alert("Viens faire un petit tour sur mon site!!!!");
 }


//setTimeout(mafonction, 2000);
