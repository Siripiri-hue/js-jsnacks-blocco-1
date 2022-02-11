// In un array sono contenuti i nomi degli invitati alla festa del
// grande Gatsby, chiedi all’utente il suo nome e comunicagli se
// può partecipare o no alla festa.


//dichiarazione dell'array
const guests = [
    "Jay Gatsby",
    "Nick Carraway",
    "Daisy Buchanan",
    "Tom Buchanan",
    "Myrtle Wilson",
    "Jordan Baker",
    "Meyer Wolfsheim",
    "George Wilson",
    "Henry Gatz",
];

let response = false;
let userName = prompt("Benvenut*, qual è il suo nome e cognome?");

for (let i = 0; i < guests.length; i++) 
{
    if ( (userName.toLowerCase()) === (guests[i].toLowerCase()) )
    {
        response = true;
        console.log(`Nome trovato`);
        alert(`Ecco il suo nome, può accomodarsi!`);
        break;
    }
}

if (!response)
{
    console.log(`Nome non trovato`);
    alert(`Mi spiace, il suo nome non è presente e non può partecipare alla festa`);
}
    

