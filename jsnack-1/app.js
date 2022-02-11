// L’utente inserisce due numeri in successione, con due
// prompt. Il software stampa il maggiore.

let numberOne;
let numberTwo;
let majorNum;

while (isNaN(numberOne) || isNaN(numberTwo)) 
{
    numberOne = parseInt(prompt("Inserire un numero"));
    console.log(numberOne);
    numberTwo = parseInt(prompt("Inserire un altro numero"));
   console.log(numberTwo);
} 

if (numberOne > numberTwo)
    majorNum = `il numero più grande è ${numberOne}`;
   else if (numberOne < numberTwo)
    majorNum = `il numero più grande è ${numberTwo}`;
else
   majorNum = "I due numeri sono uguali";

console.log(majorNum);