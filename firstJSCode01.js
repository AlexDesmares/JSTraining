console.log("Il était une Fois, le JavaScript");
console.log("Bonjour en JavaScript !");
// Cette ligne est un commentaire : elle n'est pas exécutée
console.log("Faisons quelques calculs.");
console.log(4 + 7);
console.log(12 / 0);
console.log("Au revoir !");
/* Un commentaire 
sur plusieurs
lignes */
 
// Un commentaire sur une seule ligne

// Nom et age
console.log("Nom : Alex");
console.log("Age : 37 ans -- sans commentaire s'il vous plait");

// Un peu de calcul
console.log(6 + 3);
console.log(6 - 3);
console.log(6 * 3);
console.log(6 / 3);

// Tests
console.log(4 + 5);
console.log("4 + 5");
console.log("4" + "5");

let a; //variable declaration
console.log (a); //call variable

let a; //variable declaration
a = 3.14;
console.log (a); //call variable

let a = 3.14; //variable declaration
console.log (a); //call variable

const a = 6.28; //a never change
a = 3.14; //impossible
console.log (a);

let b = 0;
b += 1; //add 1
b++; //add 1
console.log (b); //b=2

let num1 = 0;
{
  num1 = 1; // OK : num1 est déclarée dans le bloc parent
  const num2 = 0;
}
console.log(num1); // 1
console.log(num2); // Erreur : num2 n'est pas visible ici, il est déclaré dans un autre bloc !

const c = 3; // 3 est une expression dont la valeur est 3
let d = c; // d est une expression dont la valeur est celle de c (3 ici)
d = d + 1; // (d + 1) est une expression dont la valeur est celle de d + 1 (4 ici)
console.log(d); // 4

let e = 3 + 2 * 4; // e contient 11 (3 + 8)
e = (3 + 2) * 4;   // e contient 20 (5 * 4)

const country = "France";
console.log(`Je vis en ${country}`); // "Je vis en France"

const x = 3;
const y = 7;
console.log(`${x} + ${y} = ${x + y}`); // "3 + 7 = 10"

const f = 100;
console.log("f contient " + f); // "f contient 100"

const h = "5";
console.log(h + 1); // Concaténation : affiche "51"

const i = Number("5");
console.log(i + 1); // Addition numérique : affiche 6

const prenom = prompt("Entrez votre prénom :"); //prompt ouvre une boite de dialogue
alert(`Bonjour, ${prenom}`); //alert ouvre une seconde boite de dialogue reprenant l'info

const saisie = prompt("Entrez un nombre : "); // saisie est de type chaîne
const nb = Number(saisie); // nb est de type nombre
// prompt est toujours une chaine, il faut donc convertir pour comparer le nombre saisie
// ou utiliser le code suivant en combinant
const nb = Number(prompt("Entrez un nombre : ")); // nb est de type nombre
// ...

const temp1 = 36.9;
const temp2 = 37.6;
const temp3 = 37.1;
console.log(temp1, temp2, temp3); // "36.9 37.6 37.1"

const nombre = Number(prompt("Entrez un nombre :"));
if (nombre > 0) {
  console.log(nombre + " est positif");
}
/* demander un nombre
si le nombre est positif, alors il sera indiqué comme positif */

if (true) {
  // la condition du if est toujours vraie :
  // les instructions de ce bloc seront toujours exécutées
}
if (false) {
  // la condition du if est toujours fausse :
  // les instructions de ce bloc ne seront jamais exécutées
}

// === egal a
// !== different de
// < inferieur a
// <= inferieur ou egal
// > superieur
// >= superieur ou egal

const nombre = Number(prompt("Entrez un nombre :"));
if (nombre > 0) {
  console.log(nombre + " est positif");
}
else {
  console.log(nombre + " est négatif ou nul");
}

const nombre = Number(prompt("Entrez un nombre :"));
if (nombre > 0) {
  console.log(nombre + " est positif");
} else { // nombre <= 0
  if (nombre < 0) {
    console.log(nombre + " est négatif");
  } else { // nombre === 0
    console.log(nombre + " est nul");
  }
}

// pour développer des conditions imbriquée, il est impératif de passer par un diagramme de flux
// (ou tres conseille)

const nombre = Number(prompt("Entrez un nombre :"));
if (nombre > 0) {
  console.log(nombre + " est positif");
} else if (nombre < 0) {
  console.log(nombre + " est négatif");
} else {
  console.log(nombre + " est nul");
}

if ((nombre >= 0) && (nombre <= 100)) {
  console.log(nombre + " est compris entre 0 et 100");
}

console.log(true && true);   // true
console.log(true && false);  // false
console.log(false && true);  // false
console.log(false && false); // false

if ((nombre < 0) || (nombre > 100)) {
  console.log(nombre + " est en dehors de l'intervalle [0, 100]");
}

console.log(true || true);   // true
console.log(true || false);  // true
console.log(false || true);  // true
console.log(false || false); // false

if (!(nombre > 100)) {
  console.log(nombre + " est inférieur ou égal à 100");
}

console.log(!true);  // false
console.log(!false); // true


//conseil meteo ;)
const meteo = prompt("Quel temps fait-il dehors ?");
if (meteo === "soleil") {
  console.log("Sortez en t-shirt.");
} else if (meteo === "vent") {
  console.log("Sortez en pull.");
} else if (meteo === "pluie") {
  console.log("Sortez en blouson.");
} else if (meteo === "neige") {
  console.log("Restez au chaud à la maison.");
} else {
  console.log("Je n'ai pas compris !");
}

// format switch
const meteo = prompt("Quel temps fait-il dehors ?");
switch (meteo) {
  case "soleil":
    console.log("Sortez en t-shirt.");
    break;
  case "vent":
    console.log("Sortez en pull.");
    break;
  case "pluie":
    console.log("Sortez en blouson.");
    break;
  case "neige":
    console.log("Restez au chaud à la maison.");
    break;
  default:
    console.log("Je n'ai pas compris !");
}

/*
switch (expression) {
  case valeur1:
    // instructions exécutées quand expression vaut valeur1
    break;
  case valeur2:
    // instructions exécutées quand expression vaut valeur2
    break;
  ...
  default:
    // instructions exécutées quand aucune des valeurs ne correspond
}
*/

const jourActuel = "dimanche";
let jourSuivant = "";

switch (jourActuel) {
  case "lundi":
    jourSuivant = "mardi";
    break;
  case "mardi":
    jourSuivant = "mercredi";
    break;
  case "mercredi":
    jourSuivant = "jeudi";
    break;
  case "jeudi":
    jourSuivant = "vendredi";
    break;
  case "vendredi":
    jourSuivant = "samedi";
    break;
  case "samedi":
    jourSuivant = "dimanche";
    break;
  case "dimanche":
    jourSuivant = "une nouvelle semaine ^^";
    break;
  default:
    console.log("Je n'ai pas compris !");
}

if (jourSuivant !== "") {
  console.log(`Demain, nous serons ${jourSuivant}`);  
}


let heures = 23; // Faire varier cette variable entre 0 et 23
let minutes = 59; // faire varier cette variable entre 0 et 59
let secondes = 33; // faire varier cette variable entre 0 et 59

let heureSuivante = heures;
let minuteSuivante = minutes;
let secondeSuivante = secondes + 1;

if (secondes === 59) {
  secondeSuivante = 00;
  minuteSuivante ++;
  if (minutes === 59) {
    minuteSuivante = 00;
    heureSuivante ++;
    if (heures === 23) {
      heureSuivante = 00;
    }
  }
}

console.log(`il sera ${heureSuivante}h${minuteSuivante}m${secondeSuivante}s dans 1 seconde`);


const moyenne = 21;

if (moyenne < 10){
  console.log("nul, recalé");
}
else if ((moyenne >= 10) && (moyenne <= 12)) {
    console.log("ca passe pour cette fois");
}
else if ((moyenne > 12) && (moyenne <= 20)) {
    console.log("recu avec mention, tu seras peut-etre developpeur un jour !");
}
else if (moyenne > 20) {
    console.log("TRICHEUR !");
}


console.log("Début du programme");
let nombre = 1;
while (nombre <= 5) {
    console.log(nombre);
    nombre++;
}
console.log("Fin du programme");

let compteur;
for (compteur = 1; compteur <= 5; compteur++) {
    console.log(compteur);
}

/*
for (initialisation; condition; étape) {
    // instructions exécutées tant que la condition est vérifiée
}
*/

for (let i = 1; i <= 5; i++) {
  console.log(i); // OK
}
console.log(i); // Erreur : la variable i n'est pas visible ici

let nombre = 1;
while (nombre <= 5) {
    console.log(nombre);
    // La variable n'est plus modifiée : la condition sera toujours vraie
}

const nombre = 10; // Faites varier cette variable entre 1 et 10

console.log(`Table de multiplication de ${nombre}`);

let multiplicateur = 0;

while (multiplicateur <= 10){
  let resultat = multiplicateur*nombre;
  console.log(`${nombre} x ${multiplicateur} = ${resultat}`)
  multiplicateur ++;
}

console.log("fin de a table, tapez un autre nombre")

const nombre = 10; // Faites varier cette variable entre 1 et 10

console.log(`Table de multiplication de ${nombre}`);

let multiplicateur = 0;

while (multiplicateur <= 10){
  let resultat = multiplicateur*nombre;
  console.log(`${nombre} x ${multiplicateur} = ${resultat}`)
  multiplicateur ++;
}

console.log("fin de a table, tapez un autre nombre")

//FizzBuzzTest
console.log("FizzBuzzTest");

let nombre;

for (nombre = 1; nombre <= 100; nombre ++){
  let div3 = nombre % 3;
  let div5 = nombre % 5;
  if ((div3 === 0) && (div5 !== 0)){
    console.log("Fizz");
  }
  else if ((div3 !== 0) && (div5 === 0)){
    console.log("Buzz");
  }
  else if ((div3 === 0) && (div5 === 0)){
    console.log("FizzBuzz");
  }
  else {
    console.log(`${nombre}`);
  }
}

console.log("Fin du programme");

//functions
function direBonjour() {
  console.log("Bonjour !");
}

console.log("Début du programme");
direBonjour();
console.log("Fin du programme");

function direBonjour() {
  return "Bonjour !";
}

console.log("Début du programme");
const resultat = direBonjour();
console.log(resultat); // "Bonjour !"
console.log("Fin du programme");

function direBonjour() {
  const message = "Bonjour !";
  return message;
}

console.log(direBonjour()); // "Bonjour !"

function direBonjour(prenom) {
  const message = `Bonjour, ${prenom} !`;
  return message;
}

console.log(direBonjour("Baptiste")); // "Bonjour, Baptiste !"
console.log(direBonjour("Sophie")); // "Bonjour, Sophie !"

function direBonjour(prenom) {
  // Ici, prenom est le paramètre de la fonction
  const message = `Bonjour, ${prenom} !`;
  return message;
}

// Ici, prenom est une variable utilisée comme argument
let prenom = "Baptiste";
console.log(direBonjour(prenom)); // "Bonjour, Baptiste !"
prenom = "Thomas";
console.log(direBonjour(prenom)); // "Bonjour, Thomas!"

const bonjour = function(prenom) {
  const message = `Bonjour, ${prenom} !`;
  return message;
}

console.log(bonjour("Thomas")); // "Bonjour, Thomas !"

const bonjour = (prenom) => {
  const message = `Bonjour, ${prenom} !`;
  return message;
}

console.log(bonjour("Thomas")); // "Bonjour, Thomas !"

//exercice 1
// Renvoie le carré de x
function carre1(x) {
  const resultat = x * x;
  return resultat;
}

// Renvoie le carré de x
const carre2 = x => {
  const resultat = x * x;
  return resultat;
}

console.log(carre1(0)); // 0
console.log(carre1(7)); // 4
console.log(carre1(5)); // 25

console.log(carre2(0)); // 0
console.log(carre2(8)); // 4
console.log(carre2(100)); // 25

//exercice 2
function min(nombre1, nombre2) {
  if (nombre1 < nombre2){
    let resultat = nombre1;
    return resultat;
  }
  else if (nombre2 < nombre1){
    let resultat = nombre2;
    return resultat;
  }
  else {
    return "equal"
  }
}

console.log(min(4.5, 5)); // 4.5
console.log(min(19, 9));  // 9
console.log(min(1, 1));   // equal

//exercice 3
function calculer(nombre1, operator, nombre2){
  if (operator === "+"){
    const resultat = nombre1 + nombre2;
    return resultat;
  }
  else if (operator === "-"){
    const resultat = nombre1 - nombre2;
    return resultat;
  }
  else if (operator === "*"){
    const resultat = nombre1 * nombre2;
    return resultat;
  }
  else if (operator === "/"){
    const resultat = nombre1 / nombre2;
    return resultat;
  }
}

console.log(calculer(4, "+", 6));  // 10
console.log(calculer(4, "-", 6));  // -2
console.log(calculer(2, "*", 0));  // 0
console.log(calculer(12, "/", 0)); // Infinity

// objects
const stylo = {
  type: "bille",
  couleur: "bleu",
  marque: "Bic"
};

console.log(stylo.type); // "bille"
console.log(stylo.couleur); // "bleu"
console.log(stylo.marque); // "Bic"

//

const stylo = {
  type: "bille",
  couleur: "bleu",
  marque: "Bic"
};

// "J'écris avec un stylo bille bleu de marque Bic"
console.log(`J'écris avec un stylo ${stylo.type} ${stylo.couleur} de marque ${stylo.marque}`);

//

const stylo = {
  type: "bille",
  couleur: "bleu",
  marque: "Bic"
};

// Modification de la propriété "couleur"
stylo.couleur = "rouge";

// "J'écris avec un stylo bille rouge de marque Bic"
console.log(`J'écris avec un stylo ${stylo.type} ${stylo.couleur} de marque ${stylo.marque}`);

//

const stylo = {
  type: "bille",
  couleur: "bleu",
  marque: "Bic"
};

// Ajout de la propriété "prix"
stylo.prix = "2.5";

// "Mon stylo coûte 2.5 euros"
console.log(`Mon stylo coûte ${stylo.prix} euros`);

//Aurora game

const aurora = {
  nom: "Aurora",
  sante: 150,
  force: 25
};

// "Aurora a 150 points de vie et 25 en force"
console.log(`${aurora.nom} a ${aurora.sante} points de vie et ${aurora.force} en force`);

console.log("Aurora est blessée par une flèche");
aurora.sante = aurora.sante - 20;

console.log("Aurora trouve un bracelet de force");
aurora.force = aurora.force + 10;

// "Aurora a 130 points de vie et 35 en force"
console.log(`${aurora.nom} a ${aurora.sante} points de vie et ${aurora.force} en force`);

//intégration d'unefonction

const aurora = {
  nom: "Aurora",
  sante: 150,
  force: 25
};

// Renvoie la description du personnage
function decrire(personnage) {
  return `${personnage.nom} a ${personnage.sante} points de vie et ${personnage.force} en force`;
}

// "Aurora a 150 points de vie et 25 en force"
console.log(decrire(aurora));

//integration d'une methode

const aurora = {
  nom: "Aurora",
  sante: 150,
  force: 25,

  // Renvoie la description du personnage
  decrire() {
    return `${this.nom} a ${this.sante} points de vie et ${this.force} en force`;
  } //la methode est une fonction integree comme une propriete d'un objet
  // ici decrire est une proprietee integrant une fonction
  //le mot cle this. represente l'objet pour lequel la fonction est appelee
};

// "Aurora a 150 points de vie et 25 en force"
console.log(aurora.decrire());

//exercice aurora xp

const aurora = {
  nom: "aurora",
  sante: 150,
  force: 25,
  xp: 0,
  
  decrire () {
    return `${this.nom} a ${this.sante} points de vie, ${this.force} en force et ${this.xp} points d'experience`;
  }
};

// "Aurora a 150 points de vie, 25 en force et 0 points d'expérience"
console.log(aurora.decrire());

console.log("Aurora apprend une nouvelle compétence");
aurora.xp += 15;

// "Aurora a 150 points de vie, 25 en force et 15 points d'expérience"
console.log(aurora.decrire());

// exercice chien
const chien = {
  nom: "Crockdur",
  race: "mâtin de Naples",
  taille: "75",
  aboyer() {
    return "Grrr ! Grrr !"
  }
};

// "Crockdur est un mâtin de Naples mesurant 75 cm"
console.log(`${chien.nom} est un ${chien.race} mesurant ${chien.taille} cm`);

// "Tiens, un chat ! Crockdur aboie : Grrr ! Grrr !"
console.log(`Tiens, un chat ! ${chien.nom} aboie : ${chien.aboyer()}`);


// Modélisation d'un compte bancaire
const compte = {
  titulaire: "Alex",
  solde: 0,

  // Ajoute un montant au solde
  crediter(montant) {
    this.solde += montant;
  },

  // Renvoie la description du compte
  decrire() {
    return `titulaire: ${this.titulaire}, solde: ${this.solde}`;
  }
};

// "titulaire: Alex, solde: 0"
console.log(compte.decrire());

compte.crediter(250);
compte.crediter(-80);

// "titulaire: Alex, solde: 170"
console.log(compte.decrire());

//Table

const films = ["Le loup de Wall Street", "Vice-Versa", "Babysitting"];

console.log(films[0]); // "Le loup de Wall Street"
console.log(films[1]); // "Vice-Versa"
console.log(films[2]); // "Babysitting"

// parcourir un tableau

const films = ["Le loup de Wall Street", "Vice-Versa", "Babysitting"];

for (let i = 0; i < films.length; i++) {
  console.log(films[i]);
}

// autre methode

const films = ["Le loup de Wall Street", "Vice-Versa", "Babysitting"];

films.forEach(film => {
  console.log(film);
});

// autre methode

const films = ["Le loup de Wall Street", "Vice-Versa", "Babysitting"];

for (const film of films) {
  console.log(film);
}

// ajout d'une donnee a la suite dans la tableau

const films = ["Le loup de Wall Street", "Vice-Versa", "Babysitting"];

films.push("Les Bronzés"); // Ajoute le film à la fin du tableau
console.log(films[3]); // "Les Bronzés"

// ajout d'une donnee au debut du tableau

const films = ["Le loup de Wall Street", "Vice-Versa", "Babysitting"];

films.unshift("Les Bronzés"); // Ajoute le film au début du tableau
console.log(films[0]); // "Les Bronzés"

// supprimer la derniere donnee

const films = ["Le loup de Wall Street", "Vice-Versa", "Babysitting"];

films.pop(); // Supprime le dernier élément
console.log(films.length); // 2
console.log(films[2]); // undefined

// supprime une donnee cible

const films = ["Le loup de Wall Street", "Vice-Versa", "Babysitting"];

films.splice(0, 1); // Supprime 1 element à partir de l'indice 0
console.log(films.length); // 2
console.log(films[0]); // "Vice-Versa"
console.log(films[1]); // "Babysitting"

// exercice 1 : ajouter, supprimer des données d'un tableau et lister un tableau

const mousquetaires = ["Athos", "Porthos", "Aramis"];

for (let i = 0; i < mousquetaires.length; i++) {
  console.log(mousquetaires[i]);
}

mousquetaires.push("d'Artagnan");

mousquetaires.forEach(mousquetaire => {
  console.log(mousquetaire);
});

mousquetaires.pop();

for (const mousquetaire of mousquetaires) {
  console.log(mousquetaire);
}

// exercice 2 : calculer la somme d'un tableau

const nombres = [11, 3, 7, 2, 9, 10];
var resultat = 0;

for (let i = 0; i < nombres.length; i++) {
  resultat = resultat + nombres[i];
}

console.log(resultat);

// exercice 3 : afficher la plus grande valeur d'un tableau

const valeurs = [3, 11, 7, 2, 9, 10];
var resultat = 0;

for (let i = 0; i < valeurs.length; i++) {
  if (i === 0) {
    resultat = valeurs[i];
  }
  if (valeurs[i] > resultat) {
    resultat = valeurs[i];
  }
}

console.log(resultat);

//manipuler les chaines de caracteres

console.log("ABC".length); // 3
console.log("Je suis une chaîne".length); // 18

const mot = "Kangourou";
const longueurMot = mot.length; // longueurMot contient la valeur 9
console.log(longueurMot); // 9

const motInitial = "Bora-Bora";
console.log(motInitial.toLowerCase());  // "bora-bora"
console.log(motInitial.toUpperCase());  // "BORA-BORA"
console.log(motInitial);  // "Bora-Bora"

const chaine = "azerty";
console.log(chaine === "azerty"); // true
console.log(chaine === "qwerty"); // false

console.log("Azerty" === "azerty"); // false (à cause du A majuscule)

const valeurSaisie = "Quitter";
console.log(valeurSaisie === "quitter");  // false (à cause du Q majuscule)
console.log(valeurSaisie.toLowerCase() === "quitter");  // true

const sport = "Tennis-ballon"; // 13 caractères
console.log(sport[0]); // "T"
console.log(sport[6]); // "-"
console.log(sport[13]); // undefined (longueur dépassée)

const prenom = "Odile"; // 5 caractères
console.log(prenom[0]); // "O"
console.log(prenom[1]); // "d"
console.log(prenom[2]); // "i"
console.log(prenom[3]); // "l"
console.log(prenom[4]); // "e"

const prenom = "Odile";
for (let i = 0; i < prenom.length; i++) {
  console.log(prenom[i]);
}

const prenom = "Odile";
for (const lettre of prenom) {
  console.log(lettre);
}

const prenom = "Odile";
const tabPrenom = Array.from(prenom);
tabPrenom.forEach(lettre => {
  console.log(lettre);
});

const chanson = "Honky Tonk Women";
console.log(chanson.indexOf("onk")); // 1
console.log(chanson.indexOf("Onk")); // -1 (à cause du O)

const chanson = "Honky Tonk Women";

console.log(chanson.startsWith("Honk")); // true
console.log(chanson.startsWith("honk")); // false
console.log(chanson.startsWith("Tonk")); // false

console.log(chanson.endsWith("men")); // true
console.log(chanson.endsWith("Men")); // false
console.log(chanson.endsWith("Tonk")); // false

const listeMois = "Jan,Fev,Mar,Avr,Mai,Jun,Jul,Aou,Sep,Oct,Nov,Dec";
const mois = listeMois.split(",");
console.log(mois[0]); // "Jan"
console.log(mois[11]); // "Dec"

//Exercie nombre de voyelles

let mot;
let motCase;
let nombreDeVoyelle = 0;

function compterVoyelles(mot){
  motCase = mot.toLowerCase();
  const tabMotCase = Array.from(motCase);
  const tabVoyelles = ["a", "e", "i", "o", "u", "y"];
  tabMotCase.forEach(lettre => {
    tabVoyelles.forEach(voyelle => {
      if (lettre === voyelle) {
        nombreDeVoyelle ++;
      }
    })
  })
  
  return nombreDeVoyelle;
}

//console.log(compterVoyelles("RadAr")); // 2
//console.log(compterVoyelles("Tic et Tac")); // 3
console.log(compterVoyelles("Oasis Oasis Oh")); // 7

// exercice Leet Speak

function convertirMotLeet(message) {
 
  var messageLeet = "";
   
  for (var i = 0; i < message.length; i++) {
    if (message[i].toLowerCase() === "l") { messageLeet += "1"; }
    else if (message[i].toLowerCase() === "e") { messageLeet += "3"; }
    else if (message[i].toLowerCase() === "a") { messageLeet += "4"; }
    else if (message[i].toLowerCase() === "t") { messageLeet += "7"; }
    else if (message[i].toLowerCase() === "s") { messageLeet += "5"; }
    else if (message[i].toLowerCase() === "o") { messageLeet += "0"; }
    else { messageLeet += message[i].toLowerCase(); }
  }
   
  return messageLeet;
   
  }
  
  console.log(convertirMotLeet("Hello World!")); // "H3110 W0r1d!"
  console.log(convertirMotLeet("Noob")); // "N008"
  console.log(convertirMotLeet("Hacker")); // "H4ck3r"

  // exercice palindrome

  var resultat;

function inversementMot(mot) {
  for (i = mot.length -1; i >= 0; i--) {
    motInverse += mot[i];
  }
  
  return motInverse;
}

function estPalindrome(mot) {
  motInverse = "";
  inversementMot(mot);
  if (motInverse.toLowerCase() === mot.toLowerCase()) {
    resultat = true;
  } else { resultat = false; }
  
  return resultat;

}

console.log(estPalindrome("rAdaR")); // true
console.log(estPalindrome("KAYAk")); // true
console.log(estPalindrome("Bora-Bora")); // false