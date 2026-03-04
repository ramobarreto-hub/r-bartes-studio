function validaCPF(cpf) {
    var Soma = 0
    var Resto

    var strCPF = String(cpf).replace(/[^\d]/g, '')

    if (strCPF.length !== 11)
        return false

    if ([
        '00000000000',
        '11111111111',
        '22222222222',
        '33333333333',
        '44444444444',
        '55555555555',
        '66666666666',
        '77777777777',
        '88888888888',
        '99999999999',
    ].indexOf(strCPF) !== -1)
        return false

    for (i = 1; i <= 9; i++)
        Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (11 - i);

    Resto = (Soma * 10) % 11

    if ((Resto == 10) || (Resto == 11))
        Resto = 0

    if (Resto != parseInt(strCPF.substring(9, 10)))
        return false

    Soma = 0

    for (i = 1; i <= 10; i++)
        Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (12 - i)

    Resto = (Soma * 10) % 11

    if ((Resto == 10) || (Resto == 11))
        Resto = 0

    if (Resto != parseInt(strCPF.substring(10, 11)))
        return false

    return true
}

function cadastrar(eventrec) {
    event.preventDefault(eventrec);
    const inputNome = document.getElementById("nome").value;
    const inputDatadenascimento = document.getElementById("datadenascimento").value;
    const inputCpf = document.getElementById("cpf").value;
    const inputGenero = document.getElementById("genero").value;
    const inputTelefone = document.getElementById("Telefone").value;
    const inputEmail = document.getElementById("email").value;
    const inputSenha = document.getElementById("senha").value;
    const inputConfirmarsenha = document.getElementById("confirmarsenha").value;
    // ERROS
    const msgErronome = document.getElementById("intput-erro");
    const msgErrodata = document.getElementById("intput-errodate");
    const msgErrocpf = document.getElementById("intput-errocpf");
    const msgErrogenero = document.getElementById("intput-errogenero");
    const msgErrotelefone = document.getElementById("intput-erroTelefone");
    const msgErroEmail = document.getElementById("intput-erroemail");
    const msgErrosenha = document.getElementById("intput-errosenha");
    const msgErroconfirsenha = document.getElementById("intput-erroconfirmar");



    if (!inputNome || inputNome.length < 3) {
        msgErronome.style.display = 'block'
    } else {
        msgErronome.style.display = 'none'
    }

    if (!inputDatadenascimento) {
        msgErrodata.style.display = 'block'

    } else {
        msgErrodata.style.display = 'none'
    }

    if (!validaCPF(inputCpf)) {
        msgErrocpf.style.display = 'block'
    } else {
        msgErrocpf.style.display = 'none'
    }

    if (!inputGenero) {
        alert("preencher campo")
    }

    if (!inputTelefone || inputTelefone.length < 10) {
        msgErrotelefone.style.display = 'block'
    } else {
        msgErrotelefone.style.display = 'none'
    }

    if (!inputEmail || inputEmail.length < 6) {
        msgErroEmail.style.display = 'block'
    } else {
        msgErroEmail.style.display = 'none'
    }
    // if (!inputEndereço || inputEndereço) {

    // }

    if (!inputSenha || !(inputSenha.length > 8 && inputSenha.length < 100)) {

        msgErrosenha.style.display = 'block'
    } else {
        msgErrosenha.style.display = 'none'

    }
    if (!inputConfirmarsenha || inputConfirmarsenha !== inputSenha) {
        msgErroconfirsenha.style.display = 'block'
    } else {
        msgErroconfirsenha.style.display = 'none'
    }
}
