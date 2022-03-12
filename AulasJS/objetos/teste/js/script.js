function escopo() {
    const formulario = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    const pessoas = [];

    function recebeEventoForm(evento) {
        evento.preventDefault(); //impede que a página seja recarregada

        const nome = formulario.querySelector('.nome');
        const sobrenome = formulario.querySelector('.sobrenome');
        const peso = formulario.querySelector('.peso');
        const altura = formulario.querySelector('.altura');

        pessoas.push({
            nome: nome.value, 
            sobrenome: sobrenome.value, 
            peso: peso.value,
            altura: altura.value
        });
        
        console.log(pessoas);
        resultado.innerHTML += `<p> ${nome.value}, ${sobrenome.value}, ${peso.value}, ${altura.value}</p>`;
    };

    formulario.addEventListener('submit', recebeEventoForm);
}

escopo();