/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* Ecco unesempio semplificato dei datatype in JavaScript 
1) Numeri (Numbers): si possono mettere  numeri nella scatola. Ad esempio, potremmo  mettere il numero 5 o il numero 10. 
I numeri aiutano a fare calcoli o contare oggetti.

2)Stringhe (Strings): Si possono mettere parole o frasi nella scatola. Per esempio,la parola "cane" o la frase "Mi piace il gelato". 
Le stringhe sono utili quando vogliamo lavorare con il testo.

3)Booleani (Booleans): Si può mettere un piccolo segnalibro nella scatola che può essere vero o falso. Immaginiamo di avere un segnalibro verde per "vero" e un segnalibro rosso per "falso". 
I booleani ti aiutano a prendere decisioni.

4)Array: Puoi mettere una lista di cose nella scatola. Ad esempio, potremmo mettere una lista dei giocattoli preferiti. 
Si possono  mettere i giocattoli preferiti uno accanto all'altro all'interno della scatola. 
Puoi accedere a ciascun giocattolo in base alla sua posizione nella lista.

5)Oggetti (Objects): Puoi mettere un gruppo di informazioni correlate nella scatola. Ad esempio, potresti mettere un oggetto chiamato "casa" nella scatola.
 All'interno dell'oggetto "casa", puoi avere informazioni come il colore delle pareti, il numero di stanze e i mobili presenti. 
Puoi accedere a ciascuna informazione dell'oggetto utilizzando il suo nome */


/* ESERCIZIO 2
 Descrivi cos'è un oggetto in JavaScript, con parole tue.
*/

/* Immaginiamo che un oggetto in JavaScript sia come una valigia che può contenere molti oggetti diversi. 
Ogni oggetto all'interno della valigia ha un nome, come "giocattolo" o "libro", e ha anche alcune informazioni associate ad esso.

Ad esempio, se l'oggetto è una valigia  chiamata "casa", all'interno potresti trovare oggetti come "letto", "tavolo" e "sedia". 
Ogni oggetto ha delle caratteristiche specifiche. Ad esempio, il letto potrebbe avere una dimensione, il tavolo potrebbe avere una forma 
e la sedia potrebbe essere di un certo colore.

L'oggetto ci permette di raggruppare queste informazioni in un unico posto, in modo che sia più facile accedervi e utilizzarle. 
Possiamo immaginare l'oggetto come un contenitore organizzato che ci aiuta a tenere tutto in ordine.

In sostanza, un oggetto in JavaScript è un modo per tenere insieme diverse informazioni correlate, come se fosse una valigia che può contenere 
oggetti di diverso tipo. */

/* ESERCIZIO 3
 Scriti il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/


let numero1 = 12;
let numero2 = 20;

const somma = numero1 + numero2;

console.log(somma);
/* In questo caso, ho utilizzato let per dichiarare le variabili numero1 e numero2. Successivamente, ho utilizzato const per dichiarare 
la variabile somma, in quanto il suo valore non cambierà.

L'addizione viene eseguita utilizzando l'operatore +, e il risultato viene assegnato alla variabile somma. 
 */

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/*  utilizzando la parola chiave let per dichiarare una variabile chiamata "x". 
Successivamente, utilizzando l'operatore di assegnazione = per assegnare il valore 12 alla variabile "x". */
let xy= 12;


/* ESERCIZIO 5
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/
let name = "Domenico";


/* utilizzando la parola chiave let per dichiarare una variabile chiamata "name". Successivamente, utilizzando 
l'operatore di assegnazione = per assegnare il valore "Domenico" alla variabile "name */

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/
let x = 12;
let risultato = x -4;

console.log(risultato);


/* In questo caso, ho utilizzato la parola chiave "let" per dichiarare la variabile "x" con valore 12 
Successivamente, ho eseguito la sottrazione tra "x" e 4 e ho assegnato il risultato alla variabile "risultato". */

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 Infine, verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
 NON HAI BISOGNO DI UN BLOCCO IF/ELSE. E' sufficiente utilizzare console.log().
*/

let name1 = "john";
let name2 = "John";

console.log(name1 !== name2); // Verifica che name1 sia diversa da name2

console.log(name1.toLowerCase() === name2.toLowerCase()); // Verifico che la loro uguaglianza sia true quando entrambe vengono trasformate in lowercase

/* Nella prima console.log,  ho verificato se name1 è diversa da name2 utilizzando l'operatore di disuguaglianza (!==).
 Se la condizione è vera, il risultato sarà true
 Nella seconda console.log, ho verificato che l'uguaglianza tra name1 e name2 trasformando entrambe le stringhe in lowercase utilizzando 
 il metodo toLowerCase(). Se le stringhe, dopo la trasformazione, sono uguali, il risultato sarà true */

 
