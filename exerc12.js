/*
12. Escreva um algoritmo que gere os números de 1000 a 1999 e escreva aqueles que,
divididos por 11, dão resto igual a 5.
*/

for(let i = 1000; i < 2000; i++){
    if((i%11) === 5){
        console.log(i);
    }
}