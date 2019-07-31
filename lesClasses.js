// Expérience du personnage

const aurora = {
    nom: "Aurora",
    sante: 150,
    force: 25,
    xp: 0,
  
    // Renvoie la description du personnage
    decrire() {
      return `${this.nom} a ${this.sante} points de vie, ${
        this.force
      } en force et ${this.xp} points d'expérience`;
    }
  };
  
  // "Aurora a 150 points de vie, 25 en force et 0 points d'expérience"
  console.log(aurora.decrire());
  
  console.log("Aurora apprend une nouvelle compétence");
  aurora.xp += 15;
  
  // "Aurora a 150 points de vie, 25 en force et 15 points d'expérience"
  console.log(aurora.decrire());


const glacius = {
    nom: "Glacius",
    sante: 130,
    force: 30,
    xp: 0,
  
    // Renvoie la description du personnage
    decrire() {
      return `${this.nom} a ${this.sante} points de vie, ${
        this.force
      } en force et ${this.xp} points d'expérience`;
    }
  };

  //

  class Personnage {
    constructor(nom, sante, force) {
      this.nom = nom;
      this.sante = sante;
      this.force = force;
      this.xp = 0; // Toujours 0 au début
    }
    // Renvoie la description du personnage
    decrire() {
      return `${this.nom} a ${this.sante} points de vie, ${
        this.force
      } en force et ${this.xp} points d'expérience`;
    }
  }
  
  const aurora = new Personnage("Aurora", 150, 25);
  const glacius = new Personnage("Glacius", 130, 30);
  
  // "Aurora a 150 points de vie, 25 en force et 0 points d'expérience"
  console.log(aurora.decrire());
  // "Glacius a 130 points de vie, 30 en force et 0 points d'expérience"
  console.log(glacius.decrire());
  
  //syntaxe génrérale

  class MaClasse {
    constructor(param1, param2 /* ... */) {
      this.propriete1 = param1;
      this.propriete2 = param2;
      // ...
    }
    methode1(/* ... */) {
      // ...
    }
    methode2(/* ... */) {
      // ...
    }
    // ...
  }
  

  const monObjet = new MaClasse(arg1, arg2, ...);

  //prototype

  const unObjet = { a: 2 };

// Crée unAutreObjet avec unObjet comme prototype
const unAutreObjet = Object.create(unObjet);

console.log(unAutreObjet.a); // 2

/*Dans cet exemple, l'instruction JavaScriptObject.create()
est utilisée pour créer l'objet unAutreObjet en lui donnant
comme prototype l'objet unObjet. Lors de l'appel à
unAutreObjet.a, c'est la propriétéa de unObjet qui est utilisée
puisque la propriété a n'existe pas dans unAutreObjet.
*/

//autre exemple

const unObjet = { a: 2 };

// Crée unAutreObjet avec unObjet comme prototype
const unAutreObjet = Object.create(unObjet);

console.log(unAutreObjet.a); // 2

// Crée encoreUnObjet avec unAutreObjet comme prototype
const encoreUnObjet = Object.create(unAutreObjet);

console.log(encoreUnObjet.a); // 2
console.log(encoreUnObjet.b); // undefined

