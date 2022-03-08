/* 
function mensagemCurta(nome){
    console.log(`Oi, ${nome}! Tudo bem?`);
    return 'Mensagem enviada!'
}

function soma(valor1,valor2){
    let resultado = valor1+valor2;
    return resultado;
}

const raiz = function (valor){
    return Math.sqrt(valor);
};

const elevado2 = (valor)=> {
    return valor**2;
};

let situacao = mensagemCurta('Maria');
console.log(`status: ${situacao}`);

console.log(soma(2,6));

let numero = 4;
console.log(`Raiz quadrada de ${numero} é ${raiz(numero)}`);
console.log(`${numero} elevado a 2 é igual a ${elevado2(numero)}`); 

*/

/* 
(function (nome, sobrenome) {
    function saudacao() {
        console.log(`Oi! Tudo bem, ${nome} ${sobrenome}?`)
    }
    saudacao();
})('Cristóvão', 'Silva');

//factory function:
function criarPessoa(nome, sobrenome, altura, peso) {
    return {
        nome,
        sobrenome,
        altura,
        peso,
        fala(assunto) {
            return `${nome} está falando sobre ${assunto}`;
        },
        get imc() {
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        },
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`;
        },
        set nomeCompleto(nomeRecebido){
            nomeRecebido = nomeRecebido.split(' ');
            //o shift() remove o primeiro valor de nomeRecebido e atribui a nome:
            this.nome = nomeRecebido.shift();
            //junta o resto no nome:
            this.sobrenome = nomeRecebido.join(' ');
        }
    };
}

const primeiraPessoa = criarPessoa('Maria', 'Silva',1.75,80);
console.log(primeiraPessoa.fala('casa'));
console.log(primeiraPessoa.imc);
console.log(primeiraPessoa.nomeCompleto);

primeiraPessoa.nomeCompleto='Cristóvão Fábio da Silva';
console.log(primeiraPessoa.nome);
console.log(primeiraPessoa.sobrenome); 

*/

//funções construtoras:

function Pessoa(nome, sobrenome){
    //atributos e métodos privados:
    
    const idDaPessoa = 1231423;
    const metodoInterno = function (){

    };

    //atributos e métodos públicos:

    this.nome = nome;
    this.sobrenome = sobrenome;

    this.falarAlgo = function (){
        console.log(`O meu nome é ${this.nome}`)
    };
}

const p1 = new Pessoa('Cristóvão', 'Silva');

console.log(p1.nome);
p1.falarAlgo();