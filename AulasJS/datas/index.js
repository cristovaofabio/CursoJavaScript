//const data = new Date('2022-01-11 00:00:00');
const data = new Date();

//os meses em JavaScript começam em 0

console.log(data.toString());
console.log('Dia', data.getDate());
console.log('Mês', data.getMonth() + 1);
console.log('Ano', data.getFullYear());
console.log('Hora', data.getHours());
console.log('Minutos', data.getMinutes());
console.log('Segundos', data.getSeconds());
console.log('Dia da semana', data.getDay());

function colocarZeroAEsquerda(numero) {
    return numero < 10 ? `0${numero}` : numero;
}

function formatarData(dataRecebida) {
    const dia = colocarZeroAEsquerda(dataRecebida.getDate());
    const mes = colocarZeroAEsquerda(dataRecebida.getMonth() + 1);
    const ano = dataRecebida.getFullYear();
    return `${dia}/${mes}/${ano}`;
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
}

const dataDeHoje = new Date();
const dataFormatadaPadraoBrasil = formatarData(dataDeHoje);
console.log('Data no padrão brasileiro', dataFormatadaPadraoBrasil);

const diaDaSemana = verificarDiaDaSemana(dataDeHoje);
console.log(diaDaSemana);