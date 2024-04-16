/*
8. Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais)
e escreve-los em ordem crescente.
*/
const prompt = require("prompt-sync")();

let valor1 = parseFloat(prompt("Insira um valor: "));
let valor2 = parseFloat(prompt("Insira mais um valor: "));

if(valor1 === valor2){
    console.log("Os valores devem ser diferentes!");
} else{
    if(valor1 > valor2){
        console.log(valor2);
        console.log(valor1);
    } else{
        console.log(valor1);
        console.log(valor2);
    }
}