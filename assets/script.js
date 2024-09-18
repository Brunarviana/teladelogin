document.getElementById('Registro').addEventListener('submit',function(e){e.preventDefault
();//impede o envio do formularioantes da validação

// Limpando Mensagem de erro

const passwordError = document.getElementById('passwordError');
const successMessage =  document.getElementById('sucessomsg');

passwordError.style.display = 'none';
successMessage.textContent='';
let isValid = true;

// validação de Senha

const password = document.getElementById('password').value.trim();

if(password.length < 6 ){
    passwordError.textContent = "A senha deve ter pelo menos 6 caracteres" ;
    passwordError.style.display = 'block';
    isValid = false;
}
if(isValid){
    successMessage.textContent = " cadastro realizado com sucesso!";
}

    document.getElementById('Registro').reset();
});
