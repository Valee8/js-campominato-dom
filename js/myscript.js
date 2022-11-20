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

const container = document.getElementById("container");

let numCaselle;

const numCaselleEasy = 100;

const numCaselleHard = 81;

const numCaselleImpossible = 49;

const numBombs = 16;

let punteggio = [];

// Cliccando il bottone play compaiono le caselle
document.getElementById("play").addEventListener("click", play);

document.getElementById("try-again").addEventListener("click", tryAgain);

function play() {

    // Non aggiungo altro contenuto se clicco di nuovo il bottone
    container.innerHTML = "";

    //Nascondo il punteggio se viene cliccato nuovamente play selezionando un'altra difficolta
    document.getElementById("punteggio").classList.add("hidden");

    // Azzero il punteggio se viene cliccato nuovamente play selezionando un'altra difficolta
    punteggio.length = 0;

    // Numero caselle diverso a seconda della difficoltà
    if (document.querySelector("select").value === "easy") {
        numCaselle = numCaselleEasy;
        container.className = "easy";
    }
    else if (document.querySelector("select").value === "hard") {
        numCaselle = numCaselleHard;
        container.className = "hard";
    }
    else {
        numCaselle = numCaselleImpossible;
        container.className = "impossible";
    }

    const arrayCasuali = generaArray(numBombs, 1, numCaselle);

    for (let i = 0; i < arrayCasuali.length; i++) {
        console.log("arrayCasuali: ", arrayCasuali[i]);
    }
    
    // Genero numero caselle
    for (let i = 1; i <= numCaselle; i++) {
        
        // Richiamo funzione
        let boxElement = generaCaselle();

        container.append(boxElement);

        boxElement.append(i);

        // Al click le caselle cambiano colore 
        boxElement.addEventListener("click", 

            function() {
                if (!arrayCasuali.includes(i)) {
                    boxElement.classList.add("clicked");
            
                    console.log(i);
            
                    if (!punteggio.includes(i)) {
                        punteggio.push(i);
                    }
                }
                    
                else {
            
                    boxElement.classList.add("red");
            
                    document.getElementById("try-again").classList.add("visible");
            
                    document.getElementById("play").classList.add("hidden");
            
                    document.getElementById("risultato").innerHTML = "Mi dispiace, hai perso, ";
            
                }

                document.getElementById("punteggio").classList.remove("hidden");

                document.getElementById("punteggio").innerHTML = `il tuo punteggio &egrave;: ${punteggio.length}`;

            
                if (punteggio.length === numCaselle - arrayCasuali.length) {
                    document.getElementById("risultato").innerHTML = "Complimenti, hai vinto, ";
                }
            }
        );
    }
}


function tryAgain () {
    window.location.reload();
}

// Funzione per creare caselle
function generaCaselle() {
    const div = document.createElement("div");
    div.classList.add("box");

    return div;
}

function numCasuale(min, max) {
    return (Math.floor(Math.random() * ((max + 1) - min) + min));
}

function generaArray(n, numMin, numMax) {
    const array = [];

    while (array.length < n) {
        let newNumber = numCasuale(numMin, numMax);

        if(!array.includes(newNumber)) {
            array.push(newNumber);
        }
    }

    return array;
} 