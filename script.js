//  ESERCIZI:
//  1  Crea una funzione che controlli due numeri interi. Ritorna true se uno dei due è 50 o se la somma dei due è 50.
// function numb() {
//     let x = 25;
//     let y = 25;
//     if ((x === 50 || y === 50) || (x + y === 50)) {
//         return console.log(true)
//     } else {
//         console.log(false)
//     }
// }

// numb()
//  2  Crea una funzione che rimuova il carattere ad una specifica posizione da una stringa. Passa la stringa e la posizione come parametri e ritorna la stringa modificata.

// let string = "ciao";
// let pos = 2;
// function remove(myStr, myPos) {
//     let modify = myStr.slice(pos);
//     console.log(modify)
// }

// remove(string, pos)
//  3  Crea una funzione che controlli se due numeri siano compresi tra 40 e 60 o tra 70 e 100. Ritorna
// 'true' se rispecchiano queste condizioni, altrimenti ritorna 'false'.

// function numb() {
//     let x = 0;
//     let y = 80;
//     if ((x > 40 && x < 60) || (y > 70 && y < 100)) {
//         return console.log(true)
//     } else {
//         return console.log(false)
//     }
// }
// numb()
// 4. Crea una funzione che accetti un nome di città come parametro e ritorni il nome stesso se inizia con
// "Los" o "New", altrimenti ritorni false'.
// let city = "Los Angeles"

// function searchCity(città) {
//     if ((città.includes("Los")) || (città.includes("New"))) {
//         return console.log(città)
//     } else {
//         return console.log(false)
//     }
// }
// searchCity(city);
// 5. Crea una funzione che calcoli e ritorni la somma di tutti gli elementi di un array.
// L'array deve essere passato come parametro.

// let arr = [10, 20, 30];
// function somma(myArr) {
//     let sum = 0;
//     for (let i = 0; i < myArr.length; i++) {
//         sum += myArr[i];
//     } return console.log(sum)
// }
// somma(arr)
// 6. Crea una funzione che controlli che un array NON contenga i numeri 1 o 3. Se NON li contiene, ritorna
// "true', altrimenti ritorna 'false'.

// let array = [0, 2, 4]
// function noNumb() {
//     if ((array.includes(1)) || (array.includes(3))) {
//         return console.log(false)
//     } else {
//         return console.log(true)
//     }
// }
// noNumb()
// ESERCIZI:
// 7. Crea una funzione per trovare il tipo di un angolo i cui gradi sono passati come parametro.
// Angolo acuto: meno di 90° → ritorna "acuto"
// Angolo ottuso: tra i 90° e i 180° gradi → ritorna "ottuso"
// Angolo retto: 90° → ritorna "retto"
// Angolo piatto: 180° → ritorna "piatto"
// let angle = 100;
// function findAngle(angle) {
//     switch (angle) {
//         case 1:
//             angle < 90;
//             console.log("acuto")
//             break;
//         case 2:
//             angle > 90 && angle < 180;
//             console.log("ottuso");
//             break;
//         case 3:
//             angle === 90;
//             console.log("retto");
//             break;
//         case 4:
//             angle === 180;
//             console.log("piatto");
//             break;
//     }
// oppure...
//     if (angle < 90) {
//         return console.log("acuto");
//     } else if (angle > 90 && angle < 180) {
//         return console.log("ottuso");
//     } else if (angle === 90) {
//         return console.log("retto");
//     } else if (angle === 180) {
//         return console.log("piatto")
//     }
// }
// findAngle(angle)
// 8. Crea una funzione che crei un acronimo a partire da una frase. Es. "Fabbrica Italiana Automobili
// Torino" deve ritornare "FIAT".

// function getFirstLetter(string) {
//     let words = string.split(" ");
//     let firstLetters = [];
//     for (let i = 0; i < words.length; i++) {
//         let word = words[i];
//         let firstLetter = word.charAt(0);
//         firstLetters.push(firstLetter)
//     }
//     let result = firstLetters.join("")
//     return result
// }

// let stringa = "Hyper Text Markup Language";

// let firstLetter = getFirstLetter(stringa);
// console.log(firstLetter)