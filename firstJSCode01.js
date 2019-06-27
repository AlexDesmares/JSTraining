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