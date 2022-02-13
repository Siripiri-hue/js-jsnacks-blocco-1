// Chiedi un numero di 4 cifre all’utente e calcola la somma
// di tutte le cifre che compongono il numero.

let num;
let sum = 0;

num = prompt("Inserisci un numero di quattro cifre"); //chiedo un numero all'utente

if ( num.length !== 4 ) // controllo che la stringa inserita sia di 4 caratteri
    alert("Hai inserito un numero della lunghezza sbagliata");
else 
{
    const numbers = num.split(""); //divido le cifre in un array
    console.log(numbers); 

    for (let i = 0; i < numbers.length; i++) //faccio la somma dei numeri, varando l'array
    {
        let temp = parseInt(numbers[i]); //metto il valore di un carattere in una variabile temporanea
        if (isNaN(temp)) //controllo che possa essere un numero
        {
            alert("hai inserito dei caratteri non validi"); //se non è un numero esco
            break;
        }
        else
            sum += temp; //altrimenti lo sommo
    }

    console.log(sum); //scrivo la somma
}