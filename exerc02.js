/*
2. Escreva um algoritmo para ler o número de eleitores de um município, o número de
votos brancos, nulos e válidos. Calcular e escrever o percentual que cada um representa
em relação ao total de eleitores.
*/
const prompt = require("prompt-sync")();

let numeroEleitores = parseInt(prompt("Digite quantos eleitores tiveram no município: "));
let votosBrancos = parseInt(prompt("Digite quantos votos em branco tiveram no município: "));
let votosNulos = parseInt(prompt("Digite quantos votos nulos tiveram no município: "));
let votosValidos = parseInt(prompt("Digite quantos votos validos tiveram no município: "));

console.log(`A porcentagem de votos em branco foi: ${(votosBrancos*100)/numeroEleitores}%.`);
console.log(`A porcentagem de votos nulos foi: ${(votosNulos*100)/numeroEleitores}%.`);
console.log(`A porcentagem de votos válidos foi: ${(votosValidos*100)/numeroEleitores}%.`);