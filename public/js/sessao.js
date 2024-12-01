function validarSessao() {
    var email = sessionStorage.EMAIL_USUARIO;
    var nome = sessionStorage.NOME_USUARIO;

    var b_usuario = document.getElementById("b_usuario");

    if (email != null && nome != null) {
        b_usuario.innerHTML = nome;
    } else {
        // Se o usuário não estiver logado, redireciona para o login e armazena a mensagem de erro
        sessionStorage.setItem("mensagemErroLogin", "Você precisa estar logado para acessar esta página.");
        window.location = "../login.html";
    }
}


function limparSessao() {
    sessionStorage.clear();
    window.location = "login.html";
}



