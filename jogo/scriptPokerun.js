const red = document.querySelector('.red');
const fogo = document.querySelector('.fogo');
const pokeball = document.querySelector('.pokeball');
const vitoria = document.getElementById('vitoria');
const telaComeco = document.getElementById('TelaComeco');
const jogarNovamente = document.getElementById('botaoJogarNovamente');
const voltarHome = document.getElementById('botaoVoltar');
const telaVitoria = document.getElementById('telaVitoria');
const telaMorte = document.getElementById('telaMorte');
const botaoJogarVitoria = document.getElementById('botaoJogarVitoria');
const botaoVoltarVitoria = document.getElementById('botaoVoltarVitoria');
const botaoJogarMorte = document.getElementById('botaoJogarMorte');
const botaoVoltarMorte = document.getElementById('botaoVoltarMorte');

var gameEnded = false;
var gameStarted = false;

// Função de pulo
const pular = () => {
    if (!red.classList.contains('jump') && !gameEnded && gameStarted) {
        red.classList.add('jump');

        setTimeout(() => {
            red.classList.remove('jump');
        }, 500);
    }
};



    // Função para começar o jogo
    function comecar() {
        telaComeco.style.display = 'none';
        fogo.style.display = 'block';
        telaVitoria.style.display = 'none';
        telaMorte.style.display = 'none';
        pokeball.style.display = 'none';
        red.style.left = '80px';
        red.style.bottom = '0';
        red.style.width = '60px';
        red.src = '../img/red2.gif';
        gameStarted = true;

        fogo.style.animation = 'fogo-animation 1s infinite linear';

        // Lógica de colisão e fim de jogo
        const loop = setInterval(() => {
            const fogoPosition = fogo.offsetLeft;
            const redPosition = parseInt(window.getComputedStyle(red).bottom);

            if (fogoPosition <= 180 && fogoPosition > 0 && redPosition < 70) {
                clearInterval(loop);
                fogo.style.animation = 'none';
                fogo.style.display = 'none';
                red.src = '../img/gameOver.png';
                red.style.width = '120px';
                red.style.animation = 'none';
               red.style.bottom = `${redPositon}px`
                red.style.left = '80px';
                mostrarTelaMorte();
                gameEnded = true;
            }
        }, 50);

        // Vitória após 30 segundos
        setTimeout(() => {
            if (!gameEnded) {
                red.style.transition = 'left 3s linear';
                red.style.left = '80%';
                pokeball.style.display = 'block';
                fogo.style.animation = 'none';
                fogo.style.display = 'none';
                setTimeout(() => {
                    red.style.left = '85%';
                    red.src = '../img/redParado.png';
                    red.width = '60px';
                    mostrarTelaVitoria();
                }, 3000);
            }
        }, 28000);
    }

    // Função de mostrar a tela de vitória
    function mostrarTelaVitoria() {
        telaVitoria.style.display = 'block';
    }

    // Função de mostrar a tela de morte
    function mostrarTelaMorte() {
        telaMorte.style.display = 'block';
    }

    function voltar(){
       window.location.href = '../website/home.html'; 
    }

    function comecarDnv(){
        
        telaComeco.style.display = 'none';
        fogo.style.display = 'block';
        telaVitoria.style.display = 'none';
        telaMorte.style.display = 'none';
        pokeball.style.display = 'none';
        red.style.left = '80px';
        red.style.bottom = '0';
        red.style.width = '60px';
        red.src = '../img/red2.gif';
        gameStarted = true;

        fogo.style.animation = 'fogo-animation 1s infinite linear';

        // Lógica de colisão e fim de jogo
        const loop = setInterval(() => {
            const fogoPosition = fogo.offsetLeft;
            const redPosition = parseInt(window.getComputedStyle(red).bottom);

            if (fogoPosition <= 180 && fogoPosition > 0 && redPosition < 70) {
                clearInterval(loop);
                fogo.style.animation = 'none';
                fogo.style.display = 'none';
                red.src = '../img/gameOver.png';
                red.style.width = '120px';
                red.style.animation = 'none';
               red.style.bottom = `${redPositon}px`
                red.style.left = '80px';
                mostrarTelaMorte();
                gameEnded = true;
            }
        }, 50);

        // Vitória após 30 segundos
        setTimeout(() => {
            if (!gameEnded) {
                red.style.transition = 'left 3s linear';
                red.style.left = '80%';
                pokeball.style.display = 'block';
                fogo.style.animation = 'none';
                fogo.style.display = 'none';
                setTimeout(() => {
                    red.style.left = '85%';
                    red.src = '../img/redParado.png';
                    red.width = '60px';
                    mostrarTelaVitoria();
                }, 3000);
            }
        }, 28000);
    }

    
        
    

    function voltarDnv() {
        window.location.href = '../website/home.html'; 
    }


document.addEventListener('keydown', pular);