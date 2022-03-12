const resultado = document.querySelector('#resultado');
const formulario = document.querySelector('#form');

function mostrarResultado(peso, altura) {
    if (!peso || !altura) {
        resultado.innerHTML = `<p>Preencha todos os campos</p>`;
    } else {
        const calculoIMC = peso / (altura ** 2);
        const mensagemFaixa = faixaQuePessoaSeEncontra(calculoIMC.toFixed(1));
        resultado.innerHTML = `<p>Resultado: ${mensagemFaixa}</p>`;
    }
}

function faixaQuePessoaSeEncontra(calculoIMC){
    const faixas = [
        'Abaixo do  peso',
        'Peso normal',
        'Sobrepeso',
        'Obesidade Grau 1',
        'Obesidade Grau 2',
        'Obesidade Grau 3'
    ];
    if(calculoIMC<18.5){
        return faixas[0];
    }else if(calculoIMC>=18.5 && calculoIMC<=24.9){
        return faixas[1];
    }else if(calculoIMC>=25 && calculoIMC<=29.9){
        return faixas[2];
    }else if(calculoIMC>=30 && calculoIMC<=34.9){
        return faixas[3];
    }else if(calculoIMC>=35 && calculoIMC<=39.9){
        return faixas[4];
    }else{
        return faixas[5];
    }
}

function receberEventoForm(evento) {
    evento.preventDefault(); //impede que a página seja recarregada

    const peso = formulario.querySelector('#input-peso');
    const altura = formulario.querySelector('#input-altura');

    mostrarResultado(Number.parseInt(peso.value), Number.parseFloat(altura.value));
};

formulario.addEventListener('submit', receberEventoForm);