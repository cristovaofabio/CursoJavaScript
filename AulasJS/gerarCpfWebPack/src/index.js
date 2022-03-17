import GenerateCPF from './modules/GenerateCPF';
import './assets/css/style.css';

(function () { 
    const cpf = new GenerateCPF();
    const generatedCpf = document.querySelector('.generated-cpf');
    generatedCpf.innerHTML = cpf.newCpf();
})();