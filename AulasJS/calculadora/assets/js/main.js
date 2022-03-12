//função construtora:

function Calculadora() {
    let display = document.querySelector('.display');

    //método público:

    this.iniciar = function () {
        clicarBotoes();
        pressionarEnter();
    };

    //métodos privados:

    const limparDisplay = function () {
        display.value = '';
    };
    const apagarUmItem = function () {
        //slice = tamanho na string menos 1:
        display.value = display.value.slice(0, -1);
    };
    const realizarConta = function () {
        let conta = display.value;
        try {
            conta = eval(conta);
            if (!conta && conta !== 0) {
                alert('Conta inválida');
                return;
            }
            display.value = conta.toFixed(2);
        } catch (erro) {
            alert('Conta inválida');
        }
    };
    const btnParaDisplay = function (valor) {
        display.value += valor;
    };

    const clicarBotoes = function () {
        document.addEventListener('click', function (e) {
            const el = e.target;
            if (el.classList.contains('btn-num')) {
                btnParaDisplay(el.innerText);
            }
            if (el.classList.contains('btn-clear')) {
                limparDisplay();
            }
            if (el.classList.contains('btn-del')) {
                apagarUmItem();
            }
            if (el.classList.contains('btn-eq')) {
                realizarConta();
            }
            display.focus();

        }.bind(this));
    }
    const pressionarEnter = function () {
        display.addEventListener('keyup', e => {
            if (e.keyCode === 13) {
                realizarConta();
            }
        });
    }
}

const calculadora = new Calculadora();
calculadora.iniciar();



//função não construtora:

/* 
function criarCalculadora() {
    return {
        display: document.querySelector('.display'),
        btnLimpar: document.querySelector('.btn-clear'),

        iniciar() {
            this.clicarBotoes();
            this.pressionarEnter();
        },
        limparDisplay() {
            this.display.value = '';
        },
        pressionarEnter() {
            this.display.addEventListener('keyup', e => {
                if (e.keyCode === 13) {
                    this.realizarConta();
                }
            });
        },
        apagarUmItem() {
            //slice = tamanho na string menos 1:
            this.display.value = this.display.value.slice(0, -1);
        },
        realizarConta() {
            let conta = this.display.value;
            try {
                conta = eval(conta);
                if (!conta && conta !== 0) {
                    alert('Conta inválida');
                    return;
                }
                this.display.value = conta.toFixed(2);
            } catch (erro) {
                alert('Conta inválida');
            }
        },
        btnParaDisplay(valor) {
            this.display.value += valor;
        },
        clicarBotoes() {
            document.addEventListener('click', function (e) {
                const el = e.target;
                if (el.classList.contains('btn-num')) {
                    this.btnParaDisplay(el.innerText);
                }
                if (el.classList.contains('btn-clear')) {
                    this.limparDisplay();
                }
                if (el.classList.contains('btn-del')) {
                    this.apagarUmItem();
                }
                if (el.classList.contains('btn-eq')) {
                    this.realizarConta();
                }
                this.display.focus();

            }.bind(this));
        },
    };
}

const calculadora = criarCalculadora();
calculadora.iniciar(); 

*/