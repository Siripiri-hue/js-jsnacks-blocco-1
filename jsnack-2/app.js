// L’utente inserisce due parole in successione, con due
// prompt. Il software stampa prima la parola più corta, poi la
// parola più lunga.

while (words.length !== 2)
{
    const parola = prompt("inserire una parola");
    if (typeof parola === 'string');
        words.push(parola);
}

const [parola1, parola2] = words;
let shorter = parola1;
let longer = parola2;

if (parola1.length > parola2.length)
{
    shorter = parola2;
    longer = parola1;
}   

console.log(shorter, longer);