import ValidaCPF from "./ValidaCPF";

export default class GenerateCPF {

    randomNumber(min = 100000000, max = 999999999) {
        return String(Math.floor(Math.random() * (max - min) + min));
    }

    maskCpf(cpf){
        return (
            cpf.slice(0,3)+'.'+
            cpf.slice(3,6)+'.'+
            cpf.slice(6,9)+'-'+
            cpf.slice(9,11)
        );
    }

    newCpf() {
        const cpfWithoutDigit = this.randomNumber();
        const firstDigit = ValidaCPF.generateFirstDigit(cpfWithoutDigit);
        const secondDigit = ValidaCPF.generateSecondDigit(cpfWithoutDigit + firstDigit);
        const cpfGenerated = cpfWithoutDigit + firstDigit + secondDigit;

        return this.maskCpf(cpfGenerated);
    }
}