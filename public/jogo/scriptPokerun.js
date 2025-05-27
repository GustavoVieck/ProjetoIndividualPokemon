const red = document.querySelector('.red');
const fogo = document.querySelector('.fogo');
const pokeball = document.querySelector('.pokeball');
const telaComeco = document.getElementById('TelaComeco');
const telaVitoria = document.getElementById('telaVitoria');
const telaMorte = document.getElementById('telaMorte');
const berry = document.querySelector('.berry');
const charizard = document.querySelector('.charizard')
const botaoJogarVitoria = document.getElementById('botaoJogarVitoria');
const botaoVoltarVitoria = document.getElementById('botaoVoltarVitoria');
const botaoJogarMorte = document.getElementById('botaoJogarMorte');
const botaoVoltarMorte = document.getElementById('botaoVoltarMorte');
const botaoComecar = document.getElementById('botaoComecar');
const clouds = document.querySelector('.clouds')

var morreuJogo = false;
var vitoriaJogo = false;
var comecouJogo = false;
var pulando = false;

var valorBerryAtual = 0;
var pontos = 0;
var pontosSomar = 0;
var loop;

function pular() {
    if (pulando || morreuJogo || vitoriaJogo || !comecouJogo) return;

    red.classList.remove('jump'); // resetar animação
    void red.offsetWidth;         // forçar reflow
    red.classList.add('jump');    // reaplicar animação
    pulando = true;

    setTimeout(() => {
        red.classList.remove('jump');
        pulando = false;
    }, 500);
}

function mostrarTelaVitoria() {
    telaVitoria.style.display = 'flex';
}

function mostrarTelaMorte() {
    telaMorte.style.display = 'flex';
}

function atualizarPontos() {
    const divPontos = document.getElementById('div_pontos');
    divPontos.innerHTML = `Pontos: ${pontos}`;

}

function berryFazer() {
    const aleatorio = Math.floor(Math.random() * 3) + 1;

    if (aleatorio === 1) {
        berry.src = '../assets/berry.webp';
        valorBerryAtual = 10;
    } else if (aleatorio === 2) {
        berry.src = '../assets/berry2.png';
        valorBerryAtual = 20;

    } else {
        berry.src = '../assets/berry3.png';
        valorBerryAtual = 30;

    }
}

function iniciarJogo() {
    if (loop) clearInterval(loop);

    telaComeco.style.display = 'none';
    telaVitoria.style.display = 'none';
    telaMorte.style.display = 'none';

    fogo.style.display = 'block';
    berry.style.display = 'block';
    red.style.left = '80px';
    red.style.bottom = '5px';
    red.style.width = '60px';
    red.src = '../assets/red.gif';
    charizard.src = '../assets/charizardfig.gif';
    charizard.style.bottom = '5px';
    clouds.style.display = 'block';

    comecouJogo = true;
    morreuJogo = false;
    vitoriaJogo = false;
    pontos = 0;
    atualizarPontos();

    fogo.style.animation = 'fogo-animation 1s infinite linear';

    berry.style.left = '100%';
    berryFazer();
    berry.style.animation = 'berry-animation 3s linear infinite';

    var berryAtiva = true;

    loop = setInterval(() => {
        const fogoPosition = fogo.offsetLeft;
        const redBottom = parseInt(window.getComputedStyle(red).bottom);
        const redLeft = parseInt(window.getComputedStyle(red).left);
        const berryLeft = parseInt(window.getComputedStyle(berry).left);
        const berryBottom = parseInt(window.getComputedStyle(berry).bottom);
       const cloudsLeft = parseInt(window.getComputedStyle(clouds).left);


        const redWidth = red.offsetWidth;
        const redHeight = red.offsetHeight;
        const berryWidth = berry.offsetWidth;
        const berryHeight = berry.offsetHeight;

        const colisaoHorizontal = (berryLeft < redLeft + redWidth) && (berryLeft + berryWidth > redLeft);
        const colisaoVertical = (berryBottom < redBottom + redHeight) && (berryBottom + berryHeight > redBottom);

        if (fogoPosition <= 180 && fogoPosition > 0 && redBottom < 70) {
            clearInterval(loop);
            fogo.style.animation = 'none';
            fogo.style.display = 'none';
            red.src = '../assets/gameOver.png';
            red.style.width = '120px';
            red.style.animation = 'none';
            red.style.bottom = `${redBottom}px`;
            berry.style.animation = 'none';
            berry.style.display = 'none';
            clouds.style.animation = 'none'
            clouds.style.left = `${cloudsLeft}px`


            mostrarTelaMorte();
            morreuJogo = true;
        }

        if (berryAtiva && colisaoHorizontal && colisaoVertical) {
            berryAtiva = false;
            pontos += valorBerryAtual;
            atualizarPontos();
            berry.style.animation = 'none';
            berry.style.display = 'none';
            
            // Texto flutuante
const pontuacaoFlutuante = document.getElementById('pontuacaoFlutuante');
pontuacaoFlutuante.innerText = `+${valorBerryAtual}`;
pontuacaoFlutuante.style.left = '120px';
pontuacaoFlutuante.style.bottom = '70px';
pontuacaoFlutuante.style.display = 'block';
pontuacaoFlutuante.style.animation = 'none';
pontuacaoFlutuante.style.animation = 'flutuar 1.0s ease-out forwards';

setTimeout(() => {
    pontuacaoFlutuante.style.display = 'none';
}, 1200);
            


            setTimeout(() => {
         if (!morreuJogo && !vitoriaJogo) {
                berryFazer();
                berry.style.left = '100%';
                berry.style.display = 'block';
                berry.style.animation = 'berry-animation 3s linear infinite';

                berryAtiva = true;}
            }, 4000);
        }

        if (berryLeft <= 0) {
            berryFazer();
            berry.style.left = '100%';
        }

    }, 10);

    setTimeout(() => {


        if (!morreuJogo) {
            clearInterval(loop);
            charizard.src = '../assets/charizardParado.png';
            charizard.style.marginTop = '10px';
            red.style.transition = 'left 3s linear';
            red.style.left = '85%';
            fogo.style.animation = 'none';
            fogo.style.display = 'none';
            berry.style.animation = 'none';
            berry.style.display = 'none';
            

            pontos += 100;
            atualizarPontos();

            setTimeout(() => {
            const cloudsLeft = parseInt(window.getComputedStyle(clouds).left);
            berry.style.animation = 'none';
            berry.style.display = 'none';
            clouds.style.animation = 'none'
            clouds.style.left = `${cloudsLeft}px`
                pokeball.style.display = 'block'; 
                red.src = '../assets/redParado_transparente.png';
                mostrarTelaVitoria();
                vitoriaJogo = true;
            }, 3150);
        }
    }, 32000);
    // 2000
}
function iniciarJogoDnv(){
    window.location.reload()
}

function voltarHome() {
    window.location.href = '../index.html';
}

// Eventos dos botões
botaoComecar.addEventListener('click', iniciarJogo);
botaoVoltar.addEventListener('click',voltarHome);
botaoJogarVitoria.addEventListener('click', iniciarJogoDnv);
botaoJogarMorte.addEventListener('click', iniciarJogoDnv);
botaoVoltarVitoria.addEventListener('click', voltarHome);
botaoVoltarMorte.addEventListener('click', voltarHome);

document.addEventListener('DOMContentLoaded', function () {
    window.addEventListener('keydown', function (evento) {
        if (evento.code === 'Space') {
            pular();
        }
    });
});
