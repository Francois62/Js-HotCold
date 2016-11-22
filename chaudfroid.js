console.log("début js");
var random = Math.floor(Math.random()*101);
console.log(random);

function hotcold(){
var nombre = document.getElementById("number");
random
//var
//function bouton(){
//  function aleatoire(min, max){
  //  console.log("test"+random);
    var resultat = Math.abs(random - nombre);
//  while (saisie != aleatoire){
  //var indic = document.getElementById("help");
//  indic.style.color = "#99ccff";
//  indic.innerHTML=aleatoire;
  //if (saisie==null){
  //  document.getElementById("indic");
  //  indic.style.color = "red";
  //  indic.innerHTML="Veuillez entrer un nombre";
//  }

 if(resultat == 0){
   document.getElementById("indic").innerHTML="C'est gagné!!";
   alert("C'est Gagné!!!");
     }
//  else if (resultat<1 && resultat>100){
   //document.getElementById("indic").innerHTML="Il faut entrer un nombre entre 0 et 100";
//}
    else if (resultat <= 10){
    document.getElementById("indic").innerHTML="c'est chaud!";
  }
  else if (resultat <= 20){
  document.getElementById("indic").innerHTML="c'est chaud!";
}
    else if (resultat <= 30){
    document.getElementById("indic").innerHTML="c'est chaud!";
    }
    else if (resultat <= 40){
    document.getElementById("indic").innerHTML="c'est froid!";
    }
    else if (resultat <= 50){
    document.getElementById("indic").innerHTML="c'est froid!";
    }
    else if (resultat <= 60){
    document.getElementById("indic").innerHTML="c'est froid!";
    }
    else if (resultat <= 70){
      document.getElementById("indic").innerHTML="c'est froid!";
  }
  else if (resultat <= 80){
       document.getElementById("indic").innerHTML="c'est froid!";
  }
  else if (resultat <= 90){
       document.getElementById("indic").innerHTML="c'est froid!";
  }

  //else if (resultat <=100){
  //   document.getElementById("indic").innerHTML="c'est froid!";

  else {
    document.getElementById("indic").innerHTML="Erreur";
  }
}
console.log("fin js");
