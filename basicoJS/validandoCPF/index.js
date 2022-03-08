let cpf = '152.628.574-69';

function clearCPF(cpf) {
    return cpf.replace(/\D+/g, '');
}

function arrayConverter(cpf) {
    return Array.from(cpf);
}

function generateFirstDigit(cpf) {
    let sum = 0;
    let progress = 10;

    for (let index = 0; index < cpf.length - 2; index++) {
        sum = sum + cpf[index] * progress;
        progress--;
    }

    const result = 11 - (sum % 11);
    return result > 9 ? 0 : result;
}

function generateSecondDigit(cpf) {
    let sum = 0;
    let progress = 11;

    for (let index = 0; index < cpf.length - 1; index++) {
        sum = sum + cpf[index] * progress;
        progress--;
    }

    const result = 11 - (sum % 11);
    return result > 9 ? 0 : result;
}

function validCPF(firstDigit, secondDigit, cpf) {
    const size = cpf.length;
    return (Number(cpf[size - 2]) === firstDigit && Number(cpf[size - 1]) === secondDigit);
}

cpf = clearCPF(cpf);
cpf = arrayConverter(cpf);

const firstDigit = generateFirstDigit(cpf);
const secondDigit = generateSecondDigit(cpf);

console.log(validCPF(firstDigit, secondDigit, cpf));