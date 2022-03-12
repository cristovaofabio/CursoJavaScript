/* for(let contador=0;contador<10;contador++){
    console.log(contador);
} */

/* const frutas = ['maçã','banana','uva','abacaxi','laranja'];

for(let indice in frutas){
    console.log(frutas[indice]);
}

const nome = 'Cristóvão Silva'; */

/* for(let indice in nome){
    console.log(nome[indice]);
}
 */
/* for(let letra of nome){
    console.log(letra);
} */


/*
This JavaScript function always returns a random number 
between min (included) and max (excluded):
*/
function sortearNumero(minimo, maximo) {
    const numero = Math.random() * (maximo - minimo) + minimo;
    return Math.floor(numero);
}

const min = 1;
const max = 11;
let numeroSorteado = sortearNumero(min, max);

while (numeroSorteado !== 10) {
    numeroSorteado = sortearNumero(min, max);
    console.log(numeroSorteado);
}