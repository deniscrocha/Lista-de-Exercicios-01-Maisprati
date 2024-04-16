/*
7. As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se
forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
compradas, calcule e escreva o valor total da compra.
*/
const prompt = require("prompt-sync")();

let qtdMacas = parseInt(prompt("Insira a quantidade de maças que foram compradas: "));

if(qtdMacas >= 12){
    console.log(`O total foi: R$${qtdMacas*0.25}`);
} else{
    console.log(`O total foi: R$${qtdMacas*0.3}`);
}