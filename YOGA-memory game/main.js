// mettre const car le contenu ne changera pas et on sélectionne la div .jeu pour y mettre les img
const divJeu = document.querySelector(".jeu");

// création de la table de jeu sous forme de tableau, 4 lignes, chaque ligne contient 5 colonnes
let tableJeu = [
    [1,0,0,0,0]
    [0,0,0,0,1]
    [1,0,0,0,0]
    [0,0,0,0,1]
];

// création d'une fonction pour afficher le tableau
afficherTableau();

function afficherTableau() {
    let txt = " ";

    // pour parcourir le tableau, chaque colonne et chaque ligne
    for (let i=0; i < tableJeu.length; i++) {
        txt+="<div>";
        for (let j=0; j < tableJeu[i].length; j++) {
            if (tableJeu[i][j]===0) {
                txt+="<button class='bouton'>Afficher</button>"
            } else {
                txt+= "<img src= 'images/enfant.png'"
            }
        }
        txt +="/div>";
    }
        divJeu.innerHTML = txt;
    }   
