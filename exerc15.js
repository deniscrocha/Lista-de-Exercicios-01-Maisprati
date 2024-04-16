/*
15. Fazer um algoritmos para receber um número decimal e o peso de cada número até
que o usuário digite o número 0. Fazer a média ponderada desses números e pesos
respectivos.
*/
const prompt = require("prompt-sync")();

let numero;
let peso;
let somaNumero = 0;
let somaPeso = 0;

while(numero !== 0){
    numero = parseFloat(prompt("Digite um número decimal: "));
    if(numero !== 0){
        peso = parseFloat(prompt("Digite o peso do último número digitado: "));
        somaNumero += numero * peso;
        somaPeso += peso;
    }
}

console.log(`A média ponderada é: ${somaNumero/somaPeso}`);