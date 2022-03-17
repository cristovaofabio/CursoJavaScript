const rand = (min, max) => Math.floor(Math.random() * (max - min) + min);
const generateCapital = () => String.fromCharCode(rand(65, 91));
const generateLowercase = () => String.fromCharCode(rand(97, 123));
const generateNumber = () => String.fromCharCode(rand(48, 58));
const symbols = '.;/~][!@#$%¨&*(){}º=+-_';
const generateSymbol = () => symbols[rand(0, symbols.length)];

export default function generatePassword(quantityElements, capital, lowercase, numbers, symbols) {
    const password = [];
    quantityElements = Number(quantityElements);

    for (let i = 0; i < quantityElements; i++) {
        if (password.length < quantityElements) {
            capital && password.push(generateCapital());
            lowercase && password.push(generateLowercase());
            numbers && password.push(generateNumber());
            symbols && password.push(generateSymbol());
        }
    }

    return password.join('').slice(0, quantityElements);
}