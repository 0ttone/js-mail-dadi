/* creare var mailUser da prompt e subito inserire in html
Successivamente preparare array con 5 mail con scrittura estesa
senza ridurre e confrontare il dato - creare campo in html a prescindere dal 
check con console.log - per ora rendere tutto visibile in pagina
che sia valida o meno
*/

var mailUser = prompt ("Inserire email");

document.getElementById("mailUser").innerHTML = mailUser;

// array email da confrontare MALEDETTI APICI!!!!!!!!

var mailList = [ "pi@pi.com", "ci@pi.com", "di@pi.com", "effe@pi.com", "me@pi.com"];

// mostra tutte le mail presenti
document.getElementById("mailList").innerHTML = mailList;

// confronto ed esclusione


for (var i = 0; i < mailList.length; i++){
      if(mailList[i] === mailUser){
            document.getElementById("checkMail").innerHTML = "Sei nella lista";
      } else {
            document.getElementById("checkMail").innerHTML = "Non sei nella lista";
      }
}


// ============================================================================
// Generiamo due numeri con Math.floor d e confrontiamoli con if e if else


var randomUser = Math.floor(Math.random() * 6) + 1;
var randomComputer = Math.floor(Math.random() * 6) + 1;

// stampa risultati
document.getElementById("randomUser").innerHTML = randomUser;
document.getElementById("randomComputer").innerHTML = randomComputer;

// dichiara vittoria
if (randomUser > randomComputer) {
      document.getElementById("winner").innerHTML = "ha vinto l'utente";
} else if(randomComputer > randomUser) {
      document.getElementById("winner").innerHTML = "ha vinto il computer";
} else{
      document.getElementById("winner").innerHTML = "Pari";
}






