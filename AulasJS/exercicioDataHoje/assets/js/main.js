/* function formartarData(dataRecebida) {
    const nomeDiaDaSemana = verificarDiaDaSemana(dataRecebida);
    const dia = colocarZeroAEsquerda(dataRecebida.getDate());
    const mes = verificarMesDoAno(dataRecebida.getMonth());
    const ano = dataRecebida.getFullYear();
    const hora = colocarZeroAEsquerda(dataRecebida.getHours());
    const minuto = colocarZeroAEsquerda(dataRecebida.getMinutes());

    return `${nomeDiaDaSemana}, ${dia} de ${mes} de ${ano} , ${hora}:${minuto}`;

}

function colocarZeroAEsquerda(numero) {
    return numero < 10 ? `0${numero}` : numero;
}

function verificarMesDoAno(mes){
    let nomeMesDoAno='';
    switch(mes){
        case 0:
            nomeMesDoAno = 'Janeiro';
            break;
        case 1:
            nomeMesDoAno = 'Fevereiro';
            break;
        case 2:
            nomeMesDoAno = 'Março';
            break;
        case 3:
            nomeMesDoAno = 'Abril';
            break;
        case 4:
            nomeMesDoAno = 'Maio';
            break;
        case 5:
            nomeMesDoAno = 'Junho';
            break;
        case 6:
            nomeMesDoAno = 'Julho';
            break;
        case 7:
            nomeMesDoAno = 'Agosto';
            break;
        case 8:
            nomeMesDoAno = 'Setembro';
            break;
        case 9:
            nomeMesDoAno = 'Outubro';
            break;
        case 10:
            nomeMesDoAno = 'Novembro';
            break;
        case 11:
            nomeMesDoAno = 'Dezembro';
            break;
        default:
            nomeMesDoAno = '';
    }
    return nomeMesDoAno;
}

function verificarDiaDaSemana(dataRecebida) {
    let nomeDiaDaSemana = '';
    const data = dataRecebida.getDay();
    switch (data) {
        case 0:
            nomeDiaDaSemana = 'Domingo';
            break;
        case 1:
            nomeDiaDaSemana = 'Segunda-feira';
            break;
        case 2:
            nomeDiaDaSemana = 'Terça-feira';
            break;
        case 3:
            nomeDiaDaSemana = 'Quarta-feira';
            break;
        case 4:
            nomeDiaDaSemana = 'Quinta-feira';
            break;
        case 5:
            nomeDiaDaSemana = 'Sexta-feira';
            break;
        case 6:
            nomeDiaDaSemana = 'Sábado';
            break;
        default:
            nomeDiaDaSemana = 'Dia não identificado';
    }

    return nomeDiaDaSemana;
} */

const dataAgora = document.querySelector('#dataAgora');
const data = new Date();
//const dataFormatada = formartarData(data);
const opcoes = {
    dateStyle: 'full',
    timeStyle: 'short'
};
//dataAgora.innerHTML = `<p>${dataFormatada}</p>`;
dataAgora.innerHTML = data.toLocaleString('pt-BR',opcoes);
