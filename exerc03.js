/*
3. Faça um algoritmo que leia quatro números inteiros e realize as seguintes operações:
● Some 25 ao primeiro inteiro;
● Triplique o valor do segundo inteiro;
● Modifique o valor do terceiro inteiro para 12% do valor original;
● Armazene no quarto inteiro a soma dos valores originais (os que o usuário digitou)
dos primeiros três inteiros.
*/
const prompt = require("prompt-sync")();

let num1 = parseInt(prompt("Insira um número inteiro: "));
let num2 = parseInt(prompt("Insira um segundo número inteiro: "));
let num3 = parseInt(prompt("Insira um terceiro número inteiro: "));
let num4 = parseInt(prompt("Insira um quarto número inteiro: "));

num4 = num1+num2+num3;
num1 += 25;
num2 *= 3;
num3 = (12*num3) / 100;

console.log(`O primeiro número somando 25 fica: ${num1}`);
console.log(`O segundo número triplicado fica: ${num2}`); 
console.log(`12% do terceiro número é: ${num3}`);
console.log(`A soma dos três valores originais é: ${num4}`);