const pontuacaoUsuario = 900;
const privilegioUsuario = pontuacaoUsuario >= 1000 ? 'Usuário VIP' : 'Usuário normal';

console.log(privilegioUsuario);

const corUsuario = null;
const corPadrao = corUsuario || 'Verde';

console.log(corPadrao);