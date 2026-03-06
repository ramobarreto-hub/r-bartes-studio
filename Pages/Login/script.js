const inputLogin = document.getElementById("input-login")
const inputSenha = document.getElementById("input-senha")
// ERROS
// const msgErroLogin = document.getElementById("intput-erroemail");
// const msgErrosenha = document.getElementById("intput-errosenha");
// // console.log(inputLogin);
// console.log(inputSenha);
const msgErroLogin = document.getElementById("intput-errosenha");

function login(eventrec){
    event.preventDefault(eventrec);
    const valorLogin = inputLogin.value;
    const valorSenha = inputSenha.value;

    const basededados = JSON.parse(localStorage.getItem(dados))

    const LOGIN_VALIDO = "admin@admin.com";
    const SENHA_VALIDO = "1234";

    if (valorLogin == LOGIN_VALIDO && valorSenha == SENHA_VALIDO) {
        rememberSave();
      window.location.href="../Listagem/index.html"
     
    }else{
        msgErroLogin.style.display = 'block'
        inputLogin.style.border ="1px solid red"
        inputSenha.style.border ="1px solid red"
    }
}

    const checkboxRemember = document.querySelector('input[type=checkbox]');

const rememberSave = () => {
    const valorLogin = inputLogin.value;
    const valorSenha = inputSenha.value;

    const dadosLogin ={
        login:valorLogin,
        senha:valorSenha
    }
  if (checkboxRemember.checked) {
    localStorage.setItem('dadosLogin', JSON.stringify(dadosLogin))
  }

//  localStorage.setItem('dadosLogin', JSON.stringify(dadosLogin))

}
const ValorSalvo = JSON.parse(localStorage.getItem('dadosLogin'));


if(ValorSalvo.login && ValorSalvo.senha){
inputLogin.value = ValorSalvo.login;
inputSenha.value = ValorSalvo.senha;
}