// inizializzo le variabili
let sum = 0;
let num;
let bool = false;
let message = "";

while (!bool) //chiedo un numero all'utente finché non lo inserisce correttamente
{
    num = parseInt(prompt("Inserisci un numero di quattro cifre"));
    if (isNaN(num))
        console.log("inserito numero non valido", num);
    else 
        bool = true;
}

let digits = num.toString().split(''); //trasformo il numero in array contenente i caratteri/numeri

for (let i = 0; i < digits.length; i++) //faccio la somma dei numeri, varando l'array
{
    let temp = parseInt(digits[i]); //metto il valore di un carattere in una variabile temporanea, trasformandola in numero
    if (isNaN(temp)) //controllo che il numero inserito sia valido
    {
        message = "hai inserito caratteri non validi";
        break; //se un carattere non è valido, esco
    }
    else
    {
        sum += temp; // sommo il numero estratto
        message = `La somma è ${sum}`;
    }
}

console.log(message); //scrivo messaggio