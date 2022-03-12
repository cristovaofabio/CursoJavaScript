const inputTarefa = document.querySelector('.input-novaTarefa');
const botaoAdicionarTarefa = document.querySelector('.botao-adicionarNovaTarefa');
const tarefas = document.querySelector('.tarefas');

botaoAdicionarTarefa.addEventListener('click', function (evento) {
    if (!inputTarefa.value) return;

    criarTarefa(inputTarefa.value);
});

inputTarefa.addEventListener('keypress', function (e) {
    if (e.keyCode === 13) {
        //tecla ENTER precionada
        if (!inputTarefa.value) return;
        criarTarefa(inputTarefa.value);
    }
});

document.addEventListener('click', function (e) {
    const el = e.target;
    if (el.classList.contains('apagar')) {
        el.parentElement.remove();
        salvarTarefa();
    }
});

function criarBotaoApagar(li) {
    li.innerText += ' ';
    const botaoApagar = document.createElement('button');
    botaoApagar.innerText = 'Apagar';
    botaoApagar.setAttribute('class', 'apagar')
    li.appendChild(botaoApagar);
}

function limparInput() {
    inputTarefa.value = '';
    inputTarefa.focus();
}

function criarLi() {
    const li = document.createElement('li');
    return li;
}

function criarTarefa(tarefaDigitada) {
    const li = criarLi();
    li.innerText = tarefaDigitada;
    tarefas.appendChild(li);
    limparInput();
    criarBotaoApagar(li);
    salvarTarefa();
}

function salvarTarefa() {
    const liTarefas = tarefas.querySelectorAll('li');
    const listaDeTarefas = [];
    
    for (let tarefa of liTarefas) {
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('Apagar','').trim();
        listaDeTarefas.push(tarefaTexto);
    }

    const tarefasJSON = JSON.stringify(listaDeTarefas);
    localStorage.setItem('tarefas',tarefasJSON);
}

function carregarTarefasSalvas(){
    const tarefas = localStorage.getItem('tarefas');
    const listaDeTarefas = JSON.parse(tarefas);
    for(let tarefa of listaDeTarefas){
        criarTarefa(tarefa);
    }

}

carregarTarefasSalvas();
