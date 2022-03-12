const cronometro = document.querySelector('.cronometro');
const botaoIniciar = document.querySelector('.iniciar');
const botaoPausar = document.querySelector('.pausar');
const botaoZerar = document.querySelector('.zerar');

function colocarZeroAEsquerda(numero) {
    return numero < 10 ? `0${numero}` : `${numero}`;
}

function exibirTempoNaTela(horas, minutos, segundos) {
    cronometro.innerHTML = `${colocarZeroAEsquerda(horas)}:${colocarZeroAEsquerda(minutos)}:${colocarZeroAEsquerda(segundos)}`
}

function pausarCronometro() {
    setTimeout(function () {
        clearInterval(tempo);
    });
}

let tempo;
let segundos = 0;
let minutos = 0;
let horas = 0;

botaoIniciar.addEventListener('click', function (evento) {
    clearInterval(tempo);
    
    cronometro.classList.remove('pausar') //remover uma cor
    
    tempo = setInterval(function () {
        exibirTempoNaTela(horas, minutos, segundos);
        segundos++;
        if (segundos === 60) {
            minutos++;
            segundos = 0;
        }
        if (minutos === 60) {
            horas++;
            minutos = 0;
        }
    }, 1000);
});
botaoPausar.addEventListener('click', function (evento) {
    cronometro.classList.add('pausar') //adicionar uma cor
    
    pausarCronometro();
});
botaoZerar.addEventListener('click', function (evento) {

    pausarCronometro();

    segundos = 0;
    minutos = 0;
    horas = 0;

    exibirTempoNaTela(horas, minutos, segundos);
});