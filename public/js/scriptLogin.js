function limparFormulario() {
    // Limpar os valores dos campos de input após o cadastro
    nome.value = "";
    email.value = "";
    senha.value = "";
    confirmar_senha.value = "";
}

function cadastrar() {

    // Recupere o valor da nova input pelo nome do id
    var nomeVar = nome.value;
    var emailVar = email.value;
    var senhaVar = senha.value;
    var confirmarSenha = confirmar_senha.value;

    const mensagemErro = document.getElementById("mensagem_erro_cadastro");

    // Validação dos campos
    const tamanhoNome = nomeVar.length > 1;
    const emailConterArroba = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailVar);
    const tamanhoSenha = senhaVar.length > 6;
    const confirmarSenhas = senhaVar == confirmarSenha;

    mensagemErro.innerHTML = "";
    mensagemErro.style.display = "none";

    // Verificando se há algum campo em branco
    if (
        nomeVar == "" ||
        emailVar == "" ||
        senhaVar == "" ||
        confirmarSenha == ""
    ) {
        mensagemErro.innerHTML = "Campos obrigatórios estão vazios";
        mensagemErro.style.display = "block";
        return false;
    } else if (!tamanhoNome) {
        mensagemErro.innerHTML = "O campo de nome deve ter mais que um caractere";
        mensagemErro.style.display = "block";
        return false;
    } else if (!emailConterArroba) {
        mensagemErro.innerHTML = "O campo de email deve conter '@' e '.'";
        mensagemErro.style.display = "block";
        return false;
    } else if (!tamanhoSenha) {
        mensagemErro.innerHTML = "A senha precisa ter mais que 6 caracteres";
        mensagemErro.style.display = "block";
        return false;
    } else if (!confirmarSenhas) {
        mensagemErro.innerHTML = "As senhas precisam ser iguais!";
        mensagemErro.style.display = "block";
        return false;
    }



//     // Enviando o valor da nova input
//     fetch("/usuarios/cadastrar", {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//             nomeServer: nomeVar,
//             emailServer: emailVar,
//             senhaServer: senhaVar
//         }),
//     })
//         .then(function (resposta) {
//             console.log("resposta: ", resposta);

//             if (resposta.ok) {
//                 // Exibe a mensagem de sucesso
//                 mensagemErro.innerHTML = "Cadastro realizado com sucesso! Você será redirecionado para o login!";
//                 mensagemErro.style.color = "green";
//                 mensagemErro.style.display = "block";

//                 // Redireciona para o login
//                 setTimeout(() => {
//                     window.location.href = "/login.html"; // Redirecionando para a página de login após 5 segundos
//                 }, 3000);

//                 limparFormulario(); // Chama a função para limpar os campos após o cadastro
//             } else {
//                 throw "Houve um erro ao tentar realizar o cadastro!";
//             }
//         })
//         .catch(function (resposta) {
//             console.log(`#ERRO: ${resposta}`);
//             mensagemErro.innerHTML = "Ocorreu um erro ao realizar o cadastro!";
//             mensagemErro.style.color = "red";
//             mensagemErro.style.display = "block";
//         });

//     // Ocultar a mensagem após 5 segundos
//     setTimeout(() => {
//         mensagemErro.style.display = "none";
//     }, 5000);
// }



// function entrar() {
//     // Pegando os valores dos campos de email e senha
//     var emailVar = email_usuario.value;
//     var senhaVar = senha_usuario.value;

//     var mensagemErroLogin = document.getElementById("mensagem_erro_login");

//     // Verificando se os campos estão vazios
//     if (emailVar == "" || senhaVar == "") {
//         // Exibe a mensagem de erro se os campos estiverem vazios
//         mensagemErroLogin.innerHTML = "Por favor, preencha ambos os campos!";
//         mensagemErroLogin.style.display = "block";

//         // Impede o envio do formulário
//         return false;
//     } else {
//         mensagemErroLogin.style.display = "none";
//     }

//     console.log("FORM LOGIN: ", emailVar);
//     console.log("FORM SENHA: ", senhaVar);

//     // Realiza a requisição para a autenticação
//     fetch("/usuarios/autenticar", {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify({
//             emailServer: emailVar,
//             senhaServer: senhaVar
//         })
//     }).then(function (resposta) {
//         console.log("ESTOU NO THEN DO entrar()!");

//         if (resposta.ok) {
//             resposta.json().then(json => {
//                 sessionStorage.EMAIL_USUARIO = json.email;
//                 sessionStorage.NOME_USUARIO = json.nome;
//                 sessionStorage.ID_USUARIO = json.idUsuario;

//                 mensagemErroLogin.innerHTML = "Login realizado com sucesso!";
//                 mensagemErroLogin.style.color = "green";
//                 mensagemErroLogin.style.display = "block";

//                 setTimeout(function () {
//                     window.location = "dashboard.html";
//                 }, 3000);
//             });

//         } else {
//             console.log("Houve um erro ao tentar realizar o login!");
//             resposta.text().then(texto => {
//                 console.error(texto);
//                 mensagemErroLogin.innerHTML = "Falha no login: " + texto;
//                 mensagemErroLogin.style.display = "block";
//             });
//         }

//     }).catch(function (erro) {
//         console.log(erro);
//     });

//     return false;
 }