function mostrarHora() {
    let data = new Date();
    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    });
}

//executa a função a cada segundo:
/*
setInterval(function () {
    console.log(mostrarHora());
}, 1000);
*/
const timer = setInterval(function () {
    console.log(mostrarHora());
}, 1000);

//irá parar a função daqui a 3s:
setTimeout(function () {
    clearInterval(timer);
}, 3000);

//irá parar a função daqui a 5s:
setTimeout(function (){
    console.log('Olá, mundo!');
},5000);