// Calcola la somma e la media dei primi 10 numeri.
let sum = 0;
let media = 0;

for (let i = 0; i < 11; i++)
{
    sum += i;
    console.log(`somma: `, sum);
}

media = sum / 10;
console.log(`media: `, media);