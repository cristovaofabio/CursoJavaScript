let numero = 10.2362452345234;

console.log(numero.toFixed(2)); //exibir apenas duas casas decimais
console.log(Number.isInteger(numero)); //verificar se é um número inteiro
console.log(Math.floor(numero)); //arredondar o número para baixo
console.log(Math.ceil(numero)); //arredondar o número para cima

console.log(Math.max(1,4,2,7,9,10,44,-1,3)); //exibir o maior número
console.log(Math.min(1,4,2,7,9,10,44,-1,3)); //exibir o menor número

//Gerar um inteiro aleatório (max - min) + min :
console.log(Math.round(Math.random() * (10 - 1) + 1));