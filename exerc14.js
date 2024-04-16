/*
14. Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer
a média aritmética desses números.
*/
const prompt = require("prompt-sync")();

let qtdDeNumeros = 0;;
let media = 0;
let numero;

while(numero !== 0){
    numero = parseFloat(prompt("Insira o numero desejado: "))
    if(numero !== 0){
        media += numero;
        qtdDeNumeros++;
    }
}
media = media / qtdDeNumeros;
console.log(`Você digitou ${qtdDeNumeros} números.`);
console.log(`A média dos números digitados é: ${media}`)