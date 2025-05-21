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

var morreuJogo = false;
var vitoriaJogo = false;
var comecouJogo = false;
var pulando = false;

function pular() {
    if (pulando || morreuJogo || vitoriaJogo || !comecouJogo) return;

    red.classList.add('jump');
    pulando = true;

    setTimeout(() => {
        red.classList.remove('jump');
        pulando = false;
    }, 500);
}

function mostrarTelaVitoria() {
    telaVitoria.style.display = 'block';
}

function mostrarTelaMorte() {
    telaMorte.style.display = 'block';
}

function comecar() {
    telaComeco.style.display = 'none';
    fogo.style.display = 'block';
    red.style.left = '80px';
    red.style.bottom = '0';
    red.style.width = '60px';
    red.src = '../assets/red2.gif';
    comecouJogo = true;
    morreuJogo = false;
    vitoriaJogo = false;

    fogo.style.animation = 'fogo-animation 1s infinite linear';

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
            red.style.bottom = `${redPosition}px`;

            mostrarTelaMorte();
            morreuJogo = true;
        }
    }, 50);

    setTimeout(() => {
        if (!morreuJogo) {
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
                vitoriaJogo = true;
            }, 3000);
        }
    }, 30000);
}

function comecarDnv() {
    telaComeco.style.display = 'none';
    telaVitoria.style.display = 'none';
    telaMorte.style.display = 'none';
    fogo.style.display = 'block';
    pokeball.style.display = 'none';
    
    red.style.left = '80px';
    red.style.bottom = '0';
    red.style.width = '60px';
    red.src = '../img/red2.gif';
    comecouJogo = true;
    morreuJogo = false;
    vitoriaJogo = false;

    fogo.style.animation = 'fogo-animation 1s infinite linear';

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
            red.style.bottom = `${redPosition}px`;
            red.style.left = '80px';
            mostrarTelaMorte();
            morreuJogo = true;
        }
    }, 50);

    setTimeout(() => {
        if (!morreuJogo) {
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
                vitoriaJogo = true;
            }, 3000);
        }
    }, 28000);
}

function voltar() {
    window.location.href = '../website/index.html';
}

function voltarDnv() {
    window.location.href = '../website/index.html';
}


window.addEventListener('keydown', function (evento) {
    if (evento.code == 'Space') {
        pular();
    }
});