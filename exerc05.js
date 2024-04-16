/*
5. Acrescente ao exercício acima a mensagem ‘Você foi REPROVADO! Estude mais’ caso a
média calculada seja menor que 6,0
*/
const prompt = require("prompt-sync")();

let nota1 = parseFloat(prompt("Coloque a nota da primeira avaliação: "));
let nota2 = parseFloat(prompt("Coloque a nota da segunda avaliação: "));

if((nota1+nota2)/2 > 6){
    console.log("PARABÉNS! Você foi aprovado");
} else{
    console.log("Você foi REPROVADO! Estude mais");
}