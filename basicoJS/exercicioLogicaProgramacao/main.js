
/*
function verificarQualEMaior(numero1, numero2) {
    if (numero1 > numero2) {
        return `${numero1} é maior que ${numero2}`;
    } else if (numero1 === numero2) {
        return `Os números são iguais`;
    }
    return `${numero2} é maior que ${numero1}`;

}

console.log(verificarQualEMaior(5, 5));

function verificarSeImagemEstaNoModoPaisagem(altura, largura) {
    //return largura > altura ? true : false;
    return largura > altura;
}

console.log(verificarSeImagemEstaNoModoPaisagem(50,100));

*/

function fizzBuzz(numero) {
    if (typeof numero ==='number') {
        if (numero % 3 === 0 && numero % 5 === 0) {
            return 'FizzBuzz';
        }
        else if (numero % 3 === 0) {
            return 'Fizz';
        } else if (numero % 5 === 0) {
            return 'Buzz';
        } else {
            return `${numero}`;
        }
    } else {
        return `Não é um número!`;
    }
}

for(let contador=0;contador<=100;contador++){
    console.log(contador,fizzBuzz(contador));
}