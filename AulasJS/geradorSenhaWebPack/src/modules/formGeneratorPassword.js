import generatePassword from './generators';

const password = document.querySelector('.password');
const quantityElements = document.querySelector('.quantityElements');
const capitalLetter = document.querySelector('.capitalLetter');
const lowercaseLetter = document.querySelector('.lowercaseLetter');
const number = document.querySelector('.number');
const symbol = document.querySelector('.symbol');
const buttonGeneratePassword = document.querySelector('.generatePassword');

export default () => {
    buttonGeneratePassword.addEventListener('click', () => {
        console.log('asdaklsd');
        password.innerHTML = newPassword();
    });
}

function newPassword() {
    const password = generatePassword(
        quantityElements.value,
        capitalLetter.checked,
        lowercaseLetter.checked,
        number.checked,
        symbol.checked
    );

    return password || 'nothing selected';
}