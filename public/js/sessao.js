// sessão
function validarSessao() {
    var email = sessionStorage.EMAIL_USUARIO;
    var nome = sessionStorage.NOME_USUARIO;
    var foto = sessionStorage.FOTO_USUARIO;
    const pontuacao = document.getElementById('pontuacao');
    const pontuacao2 = document.getElementById('pontuacao2')

 
    if (email != null && nome != null) {
    if(foto == '1'){
        foto = `<img id="pikachu_foto" src="./assets/pikachuFoto.jpg" alt="" style="width:40px;height:40px;border-radius:50px;">`
    }
        else if(foto == '2'){
           foto = `<img id="charizard_foto" src="./assets/charizardFoto.jpg" alt="" style="width:40px;height:40px;border-radius:50px;">`
        }
        else if(foto == '3'){
            foto =`<img id="garchomp_foto" src="./assets/garchomp.jpg" alt="" style="width:40px;height:40px;border-radius:50px;">`
        }
        else if (foto == '4'){
            foto = `<img id="croagunk_foto" src="./assets/croagunkFoto.png" alt="" style="width:40px;height:40px;border-radius:50px;">`
        }
        else if (foto == '5'){
            foto = `<img id="emolga_foto" src="./assets/emolga.png" alt="" style="width:40px;height:40px;border-radius:50px;">`
        }
        else if (foto == '6'){foto = `<img id="gengar_foto" src="./assets/gengar.jpg" alt="" style="width:40px;height:40px;border-radius:50px;">`}

        document.getElementById('login').innerHTML = `<li>${foto}</li><li>${nome}<li> <li style="margin-right:15px;"><img  style="width:28px;cursor:pointer;" src="assets/deslogar.png"  onclick="sair()" ></li>`
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
        window.location = "../login.html"
        ;
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

