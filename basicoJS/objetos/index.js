const pessoa = {
    nome: 'Cristóvão',
    sobrenome: 'Silva',
    idade:26,

    fala(){
        console.log(`Olá, mundo! O meu nome é ${this.nome}`);
    }
};
console.log(pessoa.nome);
pessoa.fala();

function criaPessoa(nome,sobrenome,idade){
    return {
        nome,sobrenome,
        get idade(){
            return idade;
        },
        set idade(value){
            if(typeof value !=='number'){
                idade = null;
            }else{
                idade = value;
            }
        }
    }
}

const pessoa1 = criaPessoa('Maria','Silva',48);
const pessoa2 = criaPessoa('Rosa','Nascimento',81);
const pessoa3 = criaPessoa('Ronaldo','Silva',55);
const pessoa4 = criaPessoa('João','Silva',20);

pessoa1.idade="noodoijo"
console.log(pessoa1.idade);

const country = new Object();
country.capital = "Oslo"
country.language = "English"
country.message = function(){
    console.log("Hello, I am from Norway!")
}

country.message();
console.log(`Norway's capital is ${country.capital}`);