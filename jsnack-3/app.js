// Il software deve chiedere per 5 volte all’utente di inserire un
// numero. Il programma stampa la somma di tutti i numeri
// inseriti. Esegui questo programma in due versioni, con il for
// e con il while.

// versione 1: while

//inizializzo variabili
let cont = 0;
let sum = 0;

//chiedo 5 volte il numero e lo aggiunto alla somma
// while (cont < 5) 
// {
//     let number = parseFloat(prompt("inserisci un numero"));

//     if (!isNaN(number))
//     {
//         console.log(`Il numero inserito è ${number}`)
//         sum = sum + number;
//         console.log(`La somma parziale dei numeri inseriti finora è ${sum}`);
//         cont++;
//     }
//     else 
//     {
//         alert("Non hai inserito un valore corretto");
//     }
// }

// console.log(`La somma dei numeri inseriti è ${sum}`);


//versione 2: for
// let sum = 0; -> già inizializzata prima del while

for (let i = 0; i < 5; i++)
{
    let number = parseFloat(prompt("inserisci un numero"));

    if (!isNaN(number))
    {
        console.log(`Il numero inserito è ${number}`)
        sum = sum + number;
        console.log(`La somma parziale dei numeri inseriti finora è ${sum}`);
    }
    else 
    {
        alert("Non hai inserito un valore corretto");
        i--;
    }
}

console.log(`La somma dei numeri inseriti è ${sum}`);