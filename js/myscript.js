// Consegna:
// L’utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio
//  in console con il numero della cella cliccata.

// Bonus
// Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
//  - con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
// - con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
// - con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;

const playButton = document.getElementById("play");

const container = document.getElementById("container");

let numCaselle;

// Cliccando il bottone play compaiono le caselle
playButton.addEventListener("click",

    function() {

        // Non aggiungo altro contenuto se clicco di nuovo il bottone
        container.innerHTML = "";

        // Numero caselle diverso a seconda della difficoltà
        if (document.getElementById("difficulty").value === "easy") {
            numCaselle = 100;
            container.className = "easy";
        }
        else if (document.getElementById("difficulty").value === "hard") {
            numCaselle = 81;
            container.className = "hard";
        }
        else {
            numCaselle = 49;
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