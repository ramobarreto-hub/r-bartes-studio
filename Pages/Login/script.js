const inputLogin = document.getElementById("input-login")

const inputSenha = document.getElementById("input-senha")

// console.log(inputLogin);
// console.log(inputSenha);

function login(eventrec){
    event.preventDefault(eventrec);
    const valorLogin = inputLogin.value;
    const valorSenha = inputSenha.value;

    const LOGIN_VALIDO = "admin@admin.com";
    const SENHA_VALIDO = "1234";

    if (valorLogin == LOGIN_VALIDO && valorSenha == SENHA_VALIDO) {
      window.location.href="../Listagem/index.html"
     
    }else{
       alert("Login invalido")
       
        
    }

    
}