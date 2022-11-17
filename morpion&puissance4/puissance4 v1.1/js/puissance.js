/* 
Puissance 4 en Javascript
Author : Thomas Vessiller
*/

// Fonctions
// Fonction de création du board
function createBoard(lgn,col){
    // On vide l'affichage
    contenuElt.innerHTML="";
    // On crée l'élément table du DOM
    let tableElt=document.createElement('table');       // Chaque case est un élément du tableau à deux dimensions
    for (let i=0; i<lgn;i++){                           // On parcours les lignes
        board[i]=new Array();                           // Deuxième dimension du tableau
        // Element tr du DOM
        let lgnElt=document.createElement('tr');
        lgnElt.id="L"+i;
        // On parcours les colonnes de la ligne
        for (let j=0; j<col; j++){  // Chaque case est initialisée à 0
            board[i][j]=0;          // Element td du DOM
            let colElt=document.createElement('td');
            colElt.id="L"+i+"C"+j;
            // Ajout des colonnes à la ligne
            lgnElt.appendChild(colElt);
        };
        // Ajout des lgns au tableau
        tableElt.appendChild(lgnElt);
    };
    // ajout du tableau au contenu
    contenuElt.appendChild(tableElt);
}


// Fonction d'initialisation d'une nouvelle partie
function newGame(){
    createBoard(lgn,col);
    createEvent(lgn,col);
}


// Fonction d'ajout des évènement click sur le tableau
function createEvent(lgn,col){
    // On créé les évènements sur les cases
    for (let i=0; i<lgn;i++){
        for (let j=0; j<col; j++){
            //ajoutEventCase(i,j);
            let caseElt=document.getElementById("L"+i+"C"+j);
            caseElt.addEventListener('click',clickEvent);
        };
    };
}

// Fonction clickEvent
function clickEvent(){
    let l=Number(this.id.charAt(3));
    let k=lgn-1;
        while (k>-1){
            if (board[k][l]==0){
                let caseMinElt=document.getElementById("L"+k+"C"+l);
                let divElt=document.createElement('div');
                divElt.className="player";
                caseMinElt.appendChild(divElt);
                divElt.style.backgroundColor=player==1?"red":"#ffff00";
                board[k][l]=player;
                // Ici placé la vérification de victoire
                testwin(k,l);
                player*=-1;
                k=-1;
            }
            else {
            k--
            };
        };
}


// Fonction de Vérification de victoire

function testwin(i,j){
    // Vérification horizontale
    let countlgn=0;
    let h=0;
    while (h<col){
        if (board[i][h]==player){
            countlgn++;
            h++;
        }
        else if (board[i][h]!==player&&countlgn==4){
            h++;
        }
        else {
            countlgn=0;
            h++;
        };
    };
    
    // Vérification verticale
    let countcol=0;
    let v=0;
    while (v<lgn){
        if (board[v][j]==player){
            countcol++;
            v++;
        }
        else if (board[v][j]!==player&&countcol==4){
            v++;
        }
        else {
            countcol=0;
            v++;
        };
    };
    
    // Vérification diagonale
    let countDiag=0;
    let d=-Math.min(i,j);
    
    while(i+d<lgn&&j+d<col&&i+d>=0&&j+d>=0){
        
        if (board[i+d][j+d]==player){
            countDiag++;
            d++;
        }
        else if (board[i+d][j+d]!==player&&countDiag==4){
            d++;
        }
        else {
            countDiag=0;
            d++;
        };
    };
    
    // Vérification anti-diagonale
    let countAntiDiag=0;
    let a=-Math.min(i,col-1-j);
    while(i+a<lgn&&j-a<col&&i+a>=0&&j-a>=0){
        if (board[i+a][j-a]==player){
            countAntiDiag++;
            a++;
        }
        else if (board[i+a][j-a]!==player&&countAntiDiag==4){
            a++;
        }
        else {
            countAntiDiag=0;
            a++;
        };
    } ;
    
    
    // Affichage Résultat
    if (countlgn>=4||countcol>=4||countDiag>=4||countAntiDiag>=4){
        
        victoire=true;
        // Affichage Vainqueur
        let gagnant=(player==1)?"Rouge":"jaune";
        let victoireElt=document.createElement('div');
        victoireElt.innerHTML="<h2> "+gagnant+" a gagné</h2>";
        contenuElt.appendChild(victoireElt);
        // On supprime les évènements clics
        for (let i=0; i<lgn;i++){
            for (let j=0; j<col; j++){
               let caseElt=document.getElementById("L"+i+"C"+j);
                caseElt.style.backgroundColor="#7f541d";
                caseElt.removeEventListener('click',clickEvent);
              
            };
        };
       
    }
    else {
        console.log("tour suivant");
        // Affichage Tour suivant 
    };
}


// Initialisation
let col=7;
let lgn=6;
let board=new Array();
let contenuElt=document.getElementById('contenu');
contenuElt.innerHTML="Puissance 4 en Javascript";
let player=1;

let boutonElt = document.getElementById('newGame');
// Ajout d'un gestionnaire pour l'événement click
boutonElt.addEventListener("click", function(){
    // Joueur 1 est le joueur rouge
    player=1;
    newGame();
});