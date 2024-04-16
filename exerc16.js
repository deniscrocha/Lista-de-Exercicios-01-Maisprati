/*
16. Escreva um algoritmo para imprimir os 50 primeiros número primos maior que 100.
Obs.: Número primo é aquele divisível somente por 1 e ele mesmo.
*/
let counter;
let numero = 100;
let primos = 0;
let ocorrencia;
while(primos < 50){
    ocorrencia = 0;
    counter = 1;
    while(counter <= numero){
        if((numero % counter) == 0){
            ocorrencia +=1;
        }
        counter++;
    }
    if(ocorrencia <= 2){
        console.log(primos+1,":", numero);
        primos++;
    }
    numero++;
}