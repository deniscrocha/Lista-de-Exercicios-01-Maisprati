/*
Escreva um algoritmo que leia o código de origem de um produto e imprima a região
do mesmo, conforme a tabela no PDF:
1- Sul
2- Norte
3- Leste
4- Oeste
5 ou 6 - Nordeste
7,8,9 - Sudeste
10 à 20 - Centro-Oeste
25 até 50 - Nordeste
Fora dos intervalos, importado.
*/
const prompt = require("prompt-sync")();

let codigoDeOrigem = parseInt(prompt("Insira o código de origem do produto: "));

switch(codigoDeOrigem){
    case 1:
        console.log("O produto tem origem no SUL");
        break;
    case 2:
        console.log("O produto tem origem no NORTE");
        break;
    case 3:
        console.log("O produto tem origem no LESTE");
        break;
    case 4:
        console.log("O produto tem origem no OESTE");
        break;
    case 5: case 6:
        console.log("O produto tem origem no NORDESTE");
        break;
    case 7: case 8: case 9:
        console.log("O produto tem origem no SUDESTE");
        break;
    default:
        if(codigoDeOrigem >= 10 && codigoDeOrigem <= 20){
            console.log("O produto tem origem no CENTRO-OESTE")
        } else if(codigoDeOrigem >= 25 && codigoDeOrigem <= 50){
            console.log("O produto tem origem no NORDESTE");
        }else if(isNaN(codigoDeOrigem)){
            console.log("Não é possivel lêr o código de origem!");
        }else{
            console.log("O produto é importado");
        }
}
