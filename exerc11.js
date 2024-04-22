/*
11. Escreva um algoritmo para ler uma quantidade indeterminada de valores inteiros. Para
cada valor fornecido escrever uma mensagem que indica se cada valor fornecido é PAR
ou ÍMPAR. O algoritmo será encerrado imediatamente após a leitura de um valor NULO ou
NEGATIVO.
*/
const prompt = require("prompt-sync")();

let numero;
do{
    console.log("Para sair do programa insira um número negativo ou nulo");
    numero = prompt("Insira um número: ");
    if(numero < 0){
        break;
    }else if((numero%2)=== 0){
        console.log("O número inserido é PAR.");
    } else if((numero%2)===1){
        console.log("O número inserido é ÍMPAR.");
    } else if(isNaN(numero)){
        break;
    }
} while(numero >= 0)
console.log("Código encerrado");