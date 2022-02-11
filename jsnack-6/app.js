// Stampa il cubo dei primi N numeri, dove N è un numero
// indicato dall’utente.

let enne;

while (isNaN(enne))
{
    enne = parseInt(prompt("Ciao, inserisci un numero"));
    if (isNaN(enne))
        alert(`Non hai inserito un valore corretto`);
}
 
for (let i = 0; i < enne + 1; i++)
{
console.log(i ** 3);
}