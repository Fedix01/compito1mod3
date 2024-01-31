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

// Esercizi extra
// NOTA: tutti gli esercizi devono essere svolti usando le funzioni
// 1. Partendo da una stringa (passata come parametro), ritorna il carattere più usato nella stringa stessa.

function character(stringa) {
    let conteggio = 0;
    let stringMax = 1;
    let char = stringa[0];
    for (let i = 0; i < stringa.length; i++) {
        conteggio = 0;
        for (let y = 0; y < stringa.length; y++) {
            if (stringa[y] === stringa[i]) {
                conteggio++;
            }
            if (conteggio > stringMax) {
                char = stringa[i];
                stringMax = conteggio
            }
        }
    }
    return char
}

let result = character("aaaaalll");
console.log(result)
// 2. Controlla che due stringhe passate come parametri siano gli anagrammi l’una dell’altra. Ignora punteggiatura e spazi e ricordate di rendere la stringa tutta in minuscolo. Se le due parole sono anagrammi, ritorna `true`, altrimenti ritorna `false`.
// NON RISOLTO
// function anagram(str1, str2) {
//     str1 = str1.toLowerCase();
//     str2 = str2.toLowerCase();
//     if (str1.length !== str2.length) {
//         return console.log(false)
//     }

// }
// anagram("relativo", "rilevato")
// 3. Partendo da una lista di possibili anagrammi e da una parola (entrambi passati come parametri), ritorna un nuovo array contenente tutti gli anagrammi corretti della parola data.
// Per esempio, partendo da “cartine” e [”carenti”, “incerta”, “espatrio”], il valore ritornato deve essere [”carenti”, “incerta”].


// 4. Partendo da una stringa passata come parametro, ritorna `true` se la stringa è palindroma o `false` se non lo è.

function palindroma(stringa) {

    if (stringa.split("").reverse().join("") === stringa) {
        return true
    } else {
        return false
    }
}
let res = palindroma("anna");
console.log(res)
// 5. Partendo da un numero intero (dai parametri) ritorna un numero che contenga le stesse cifre, ma in ordine contrario. Es. 189 ⇒ 981
function contrario(num) {

    num = parseInt(num.toString().split("").reverse().join(""));
    return num
    // let string = num.toString();
    // let array = string.split("");
    // let reverse = array.reverse();
    // let stringReverse = reverse.join("");
    // return stringReverse
}
let risultato = contrario(842);
console.log(risultato)
// 6. Scrivi una funzione che accetti un numero positivo X come parametro. La funzione dovrebbe stampare a console una “scala” creata con il carattere “#” e avente X scalini.
// Es.
// X = 2
// '# '
// '##'
// X = 3
// '# '
// '## '
// '###'

function scala(x) {
    for (let i = 1; i <= x; i++) {
        let scala = "#".repeat(i)
        console.log(scala)
    }
}
scala(5)
// 7. Crea una funzione che, data una stringa come parametro, ritorni la stessa stringa, ma al contrario. Es. “Ciao” ****⇒ “oaiC”

function reverseStr(str) {
    str = str.split("").reverse().join("");
    return str
}

let reverse = reverseStr("ciao");
console.log(reverse)
// 8. Crea una funzione che accetti un array e un numero Y come parametro. Dividi l’array in sotto-array aventi lunghezza Y.
// Es. array: [1, 2, 3, 4], y: 2 ⇒ [[ 1, 2], [3, 4]]
// array: [1, 2, 3, 4, 5], y: 4 ⇒ [[ 1, 2, 3, 4], [5]]
// 9. Scrivi una funzione che accetti un numero positivo X come parametro. La funzione dovrebbe stampare a console una “piramide” create con il carattere “#” e avente X strati.
// Es.
// X = 3
// ' # '
// ' ### '
// '#####'
// 10. Scrivi una funzione che accetti un intero N e ritorni una matrice a spirale NxN:
// Es. N = 2
// [[1, 2],[4, 3]]
// N = 3
// [[1, 2, 3],[8, 9, 4],[7, 6, 5]]
// N = 4
// [[1, 2, 3, 4],[12, 13, 14, 5],[11, 16, 15, 6],[10, 9, 8, 7]]