// Consegna
// Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta (se avete fatto bonus di ieri e 
// partite da li, sennò range rimane di base 1-100): le bombe.
// Attenzione: nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci 
// due numeri uguali.
// In seguito l’utente clicca su una cella:
// se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita
//  termina.
// Altrimenti la cella cliccata si colora di azzurro e l’utente può continuare a cliccare sulle altre celle.
// La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti 
// (ovvero quando ha rivelato tutte le celle che non sono bombe).
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella 
// che non era una bomba.

// BONUS:
// Quando si clicca su una bomba e finisce la partita, evitare che si possa cliccare su altre celle;
// Quando si clicca su una bomba e finisce la partita, il software scopre tutte le bombe nascoste.

const playButton = document.getElementById("play");

const container = document.getElementById("container");

const risultato = document.getElementById("risultato");

let numCaselle;

const numCaselleEasy = 100;

const numCaselleHard = 81;

const numCaselleImpossible = 49;

const numBombs = 16;

// Cliccando il bottone play compaiono le caselle
playButton.addEventListener("click",

    function() {

        // Non aggiungo altro contenuto se clicco di nuovo il bottone
        container.innerHTML = "";

        // Numero caselle diverso a seconda della difficoltà
        if (document.getElementById("difficulty").value === "easy") {
            numCaselle = numCaselleEasy;
            container.className = "easy";
        }
        else if (document.getElementById("difficulty").value === "hard") {
            numCaselle = numCaselleHard;
            container.className = "hard";
        }
        else {
            numCaselle = numCaselleImpossible;
            container.className = "impossible";
        }
        

        // Genero numero caselle
        for (let i = 1; i <= numCaselle; i++) {

            // Richiamo funzione
            let boxElement = generaCaselle();
    
            container.append(boxElement);

            boxElement.append(i);  
            
            // Al click le caselle cambiano colore e appare il numero in console log
            boxElement.addEventListener("click",

                function() {

                    boxElement.classList.add("clicked");

                    console.log(i);
                }

            );
        }

    }
);

// Funzione per creare caselle
function generaCaselle() {
    const div = document.createElement("div");
    div.classList.add("box");

    return div;
}

function numCasuale(min, max) {
    return (Math.floor(Math.random() * ((max + 1) - min) + min));
}