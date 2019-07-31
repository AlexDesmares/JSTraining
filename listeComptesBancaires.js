class Compte {
    constructor(nom) {
      this.nom = nom;
      this.solde = 0;
    }
    
    crediter(){
      this.solde += 1000;
    }
    
    decrire(){
      return `Le compte de ${this.nom} a un solde de ${this.solde}€`;
    }
  }
  
  const listeComptes = [];
  
  // Ajoute 3 comptes bancaires à la liste
  listeComptes.push(new Compte("Alex"));
  listeComptes.push(new Compte("Clovis"));
  listeComptes.push(new Compte("Marco"));
  
  // Crédite et décrit chaque compte
  listeComptes.forEach(compte => {
    compte.crediter(1000);
    console.log(compte.decrire());
  });