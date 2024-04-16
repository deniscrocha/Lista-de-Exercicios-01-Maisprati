/*
4. Escreva um algoritmo para ler as notas das duas avaliações de um aluno no semestre,
calcular e escrever a média semestral e a seguinte mensagem: ‘PARABÉNS! Você foi
aprovado’, somente se o aluno foi aprovado (considere 6.0 a nota mínima para
aprovação).
*/
const prompt = require("prompt-sync")();

let nota1 = parseFloat(prompt("Coloque a nota da primeira avaliação: "));
let nota2 = parseFloat(prompt("Coloque a nota da segunda avaliação: "));

if((nota1+nota2)/2 > 6){
    console.log("PARABÉNS! Você foi aprovado");
}