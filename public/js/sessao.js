// sessão
function validarSessao() {
    var email = sessionStorage.EMAIL_USUARIO;
    var nome = sessionStorage.NOME_USUARIO;
    const pontuacao = document.getElementById('pontuacao');
    const pontuacao2 = document.getElementById('pontuacao2')

    if (email != null && nome != null) {
        document.getElementById('login').innerHTML = `<li ><img style="width:24px;" src="assets/iconPerfil.png"></li>${nome} <li ><img  style="width:28px;cursor:pointer;" src="assets/deslogar.png"  onclick="sair()" ></li>`
        pontuacao.style.display = 'block';
        pontuacao2.style.display = 'block';
    
    } else {
        // window.location = "../login.html";
            document.getElementById('login').innerHTML = ` <li><a href="login.html" >Login</a></li>
        <li><a href="cadastro.html">Cadastro</a></li>`
    }
}

function validarSessaoJogo(){
    var email = sessionStorage.EMAIL_USUARIO;
    var nome = sessionStorage.NOME_USUARIO;


    if (email != null && nome != null) {
        console.log('usuarioLogado')
    } else {
        window.location = "../login.html";
    }
}

function limparSessao() {
    sessionStorage.clear();
    window.location = "../index.html";
}

// carregamento (loading)
function aguardar() {
}

// var nome = sessionStorage.getItem("Nome_usuario")

function finalizarAguardar(texto) {
    var divAguardar = document.getElementById("div_aguardar");
    divAguardar.style.display = "none";

    var divErrosLogin = document.getElementById("div_erros_login");
    if (texto) {
        divErrosLogin.style.display = "flex";
        divErrosLogin.innerHTML = texto;
    }
}

