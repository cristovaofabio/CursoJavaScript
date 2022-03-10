class ValidaFormulario {
    constructor() {
        this.formulario = document.querySelector('.formulario');
        this.eventos();
    };

    eventos() {
        this.formulario.addEventListener('submit', e => {
            this.handleSubmit(e);
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        const camposValidos = this.camposValidos();
        const senhasValidas = this.senhasValidas();

        if(camposValidos && senhasValidas){
            alert('Formulário enviado!');
            //this.formulario.submit();
        }
    }

    senhasValidas() {
        let valid = true;

        const senha = this.formulario.querySelector('.senha');
        const repetirSenha = this.formulario.querySelector('.repetir-senha');

        if (senha.value !== repetirSenha.value) {
            valid = false;
            this.criarErro(senha, 'Senhas diferentes!');
            this.criarErro(repetirSenha, 'Senhas diferentes!');
        }

        if (senha.value.length < 6 || senha.value.length > 12) {
            valid = false;
            this.criarErro(senha, 'Senha maior do que 12 ou menor do que 6 caracteres');
            this.criarErro(repetirSenha, 'Senha maior do que 12 ou menor do que 6 caracteres');
        }

        return valid;
    }

    camposValidos() {
        let valid = true;

        for (let errorText of this.formulario.querySelectorAll('.error-text')) {
            errorText.remove();
        }

        for (let campo of this.formulario.querySelectorAll('.validar')) {
            const label = campo.previousElementSibling.innerHTML;

            if (!campo.value) {
                this.criarErro(campo, `Campo ${label} não pode estar em branco`);
                valid = false;
            }

            if (campo.classList.contains('cpf')) {
                if (!this.validaCPF(campo)) valid = false;
            }

            if (campo.classList.contains('usuario')) {
                if (!this.validaUsuario(campo)) valid = false;
            }
        }

        return valid;
    }

    validaCPF(campo) {
        const cpf = new ValidaCPF(campo.value);

        if (!cpf.isValid()) {
            this.criarErro(campo, 'CPF inválido!');
            return false;
        }
        return true;
    }

    validaUsuario(campo) {
        const usuario = campo.value;
        let valid = true;

        if (usuario.length < 3 || usuario.length > 12) {

            this.criarErro(campo, 'Usuário inválido!');
            valid = false;
        }

        if (!usuario.match(/^[a-zA-Z0-9]+$/g)) {

            this.criarErro(campo, 'Insira apenas letras e números');
            valid = false;
        }

        return valid;
    }

    criarErro(campo, mensagem) {
        const div = document.createElement('div');
        div.innerHTML = mensagem;
        div.classList.add('error-text');
        campo.insertAdjacentElement('afterend', div);
    }
};

const valida = new ValidaFormulario();