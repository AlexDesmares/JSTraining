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