/*
1. Escreva um algoritmo para ler uma temperatura em graus Celsius, calcular e escrever o
valor correspondente em graus Fahrenheit.
*/
const prompt = require("prompt-sync")();

console.log("Conversor de Temperatura");
let Celsius = parseFloat(prompt("Coloque a temperatura em Celsius: "));
let Fahrenheit;

// A formula para conversão de Celsius para Fahrenheit é: C*1.8+32
Fahrenheit = (Celsius*1.8)+32;
console.log(Celsius,"°C", "Convertido em Fahrenheit fica: ", Fahrenheit, "°F")