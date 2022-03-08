const numero = Number(prompt('Digite um número'));

const nomeTitulo = document.getElementById('titulo');
const nomeTexto = document.getElementById('texto');

nomeTitulo.innerHTML = numero;
nomeTexto.innerHTML = `<p>Raiz quadrada: ${Math.sqrt(numero).toFixed(2)}</p>`;
nomeTexto.innerHTML += `<p>${numero} é inteiro: ${Number.isInteger(numero)}</p>`;
nomeTexto.innerHTML += `<p>É NaN: ${Number.isNaN(numero)}</p>`;
nomeTexto.innerHTML += `<p>Arredondando par baixo: ${Math.floor(numero)}</p>`;
nomeTexto.innerHTML += `<p>Arredondando par cima: ${Math.ceil(numero)}</p>`;
nomeTexto.innerHTML += `<p>Com duas casas decimais: ${numero.toFixed(2)}</p>`;