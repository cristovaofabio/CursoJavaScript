export default class ValidaCPF {
    constructor(cpf) {
        this.cpf = cpf;
    }

    clearCPF(cpf) {
        return cpf.replace(/\D+/g, '');
    }

    arrayConverter(cpf) {
        return Array.from(cpf);
    }

    static generateFirstDigit(cpf) {
        let sum = 0;
        let progress = 10;

        for (let index = 0; index < cpf.length; index++) {
            sum = sum + cpf[index] * progress;
            progress--;
        }

        const result = 11 - (sum % 11);
        return result > 9 ? 0 : result;
    }

    static generateSecondDigit(cpf) {
        let sum = 0;
        let progress = 11;

        for (let index = 0; index < cpf.length; index++) {
            sum = sum + cpf[index] * progress;
            progress--;
        }

        const result = 11 - (sum % 11);
        return result > 9 ? 0 : result;
    }

    validCPF(firstDigit, secondDigit, cpf) {
        const size = cpf.length;
        return (Number(cpf[size - 2]) === firstDigit && Number(cpf[size - 1]) === secondDigit);
    }

    isValid() {
        this.cpf = this.clearCPF(this.cpf);
        this.cpf = this.arrayConverter(this.cpf);

        const firstDigit = this.generateFirstDigit(this.cpf);
        const secondDigit = this.generateSecondDigit(this.cpf);

        return this.validCPF(firstDigit, secondDigit, this.cpf);
    }

}