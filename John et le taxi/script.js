"use strict";
// Initialisation
// Je créer le répertoire de musique avec 5 musiques
let musique=["'Anissa' de Wejdene","'8 Miles' de Eminem","'Le poinçonneur des Lilas' de Serge Gainsbourg","'Le Pénitencier' de Johnny Hallyday","'La Bohème' de Charles Aznavour"]

let santementale=10; // Santé mentale initialisée à 10
let nbfeux=29; // Décompte des feux rouges initialisé à 30
let nbtaxi=0; // Nombre changements de taxi initialisé à 0

function choixmusique(){ // Je créer une fonction qui choisit parmi la liste des musiques une musique au hasard grâce à son index dans le tableau
    let mus = Math.floor(Math.random() * 5); // Génère un chiffre entier entre 0 (inclus) et 4 (inclus). J'utilise math.random, couplé avec floor pour arrondir en dessous de la valeur. Je multiplie par 5 car sinon c'est juste entre 0 et 1.
    return musique[mus]; // Renvoie la musique
}

// Déroulé

console.log("John essaie de rentrer chez lui en taxi. Problème, il a horreur d'écouter 'Anissa' de Wejdene qui passe tout le temps à la radio. Attention à ce que vous passez à la radio chères chauffeurs de taxi. Vous avez 30 feux rouges à tenir :)");
while(nbfeux>=1){ // Tant que le nombre de feux rouge n'atteint pas 1, on continue de rouler, il atteindra bien 0 après, mais pour avoir la phrase de fin à 0, on définit l'arrêt des "phrase normale" à l'avant dernier feux
    let radio=choixmusique() // J'insère le nom de la musique choisie au hasard dans une variable
    if(radio==="'Anissa' de Wejdene"){ // Je vérifie que la musique ne correspond pas à Anissa
        if(santementale>0){ // Si c'est le cas et que la santé mentale est supérieur à 0, alors on continue en lui retirant 1
            nbtaxi++
            santementale--
            console.log(`Le taxi de john s'arrête à un feu rouge, il en reste ${nbfeux}. Mais malheureusement pour lui, la musique joué dans son taxi est ${radio}.John change donc de taxi et sa santé mentale décline`);
        }if(santementale==0){ // Donc si elle est à 0, on arrête, il n'a pas atteint sa destination
            console.log("John à explosé, 'Anissa' aura eu raison de lui.");
            nbfeux=0
        }
    }else{
        console.log(`Le taxi de john s'arrête à un feu rouge, il en reste ${nbfeux}. Et heureusement pour lui, la musique joué dans son taxi est ${radio}.`);
        }
    nbfeux-- // Une fois que toute les opérations sont finies et que le jeu continue, alors on enlève 1 feux afin de recommencer cette opération.
    if(nbfeux==0){ // On définit l'arrivée.
        console.log(`John est arrivé chez lui en changeant ${nbtaxi} fois de taxi, tout ça pour éviter Wejdene ! Pauvre John !`);
    }
}