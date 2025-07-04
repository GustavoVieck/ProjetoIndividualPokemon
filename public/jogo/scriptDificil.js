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

const fkUsuario = sessionStorage.getItem("ID_USUARIO")


var finalPartida = 1
var comecouJogo = false;
var pulando = false;
var valorBerryAtual = 0;
var pontos = 0;
var pontosSomar = 0;
var loop;
var qtdBerry = 0;
const dificuldade = 2
var emPartida = false
var multiplicador = 1
var ganhou = 100

function pular() {
    if (pulando || !comecouJogo || !emPartida) return;

    red.classList.remove('jump');
    void red.offsetWidth;
    red.classList.add('jump');
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
    const aleatorio = Math.floor(Math.random() * 999) + 1;

    if (aleatorio <= 320) {
        berry.src = '../assets/berry.webp';
        valorBerryAtual = 10 * multiplicador;
    } else if (aleatorio <= 640) {
        berry.src = '../assets/berry2.png';
        valorBerryAtual = 20 * multiplicador;

    } else if(aleatorio <= 960) {
        berry.src = '../assets/berry3.png';
        valorBerryAtual = 30 * multiplicador;

    }
    else{
        berry.src = '../assets/bigBerry.png';
        valorBerryAtual = 1000 * multiplicador;
    }
}

function iniciarJogo() {
    if (loop);

    telaComeco.style.display = 'none';
    telaVitoria.style.display = 'none';
    telaMorte.style.display = 'none';

    fogo.style.display = 'block';
    berry.style.display = 'block';
    red.style.left = '80px';
    red.style.bottom = '5px';
    red.style.width = '60px';
    red.src = '../assets/red.gif';
    charizard.src = '../assets/palkiaGif.gif';
    charizard.style.bottom = '5px';
    emPartida = true
    comecouJogo = true;
    pontos = 0;
    atualizarPontos();


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
            red.src = '../assets/white_purple_explosao.png';
            red.style.width = '120px';
            red.style.animation = 'none';
            red.style.bottom = `${redBottom}px`;
            berry.style.animation = 'none';
            berry.style.display = 'none';
            emPartida = false
            finalPartida = 0

            mostrarTelaMorte();
            cadastrarPartida(fkUsuario, pontos, qtdBerry, finalPartida, dificuldade)
        }

        if (berryAtiva && colisaoHorizontal && colisaoVertical) {
            berryAtiva = false;
            pontos += valorBerryAtual;
            atualizarPontos();
            berry.style.animation = 'none';
            berry.style.display = 'none';

            const pontuacaoFlutuante = document.getElementById('pontuacaoFlutuante');
            pontuacaoFlutuante.innerText = `+${valorBerryAtual}`;
            pontuacaoFlutuante.style.left = '140px';
            pontuacaoFlutuante.style.bottom = '80px';
            pontuacaoFlutuante.style.display = 'block';
            pontuacaoFlutuante.style.animation = 'none';
            pontuacaoFlutuante.style.animation = 'flutuar 1.0s ease-out forwards';
            multiplicador++
            qtdBerry++

            setTimeout(() => {
                pontuacaoFlutuante.style.display = 'none';
            }, 1200);



            setTimeout(() => {
                if (emPartida == true) {
                    berryFazer();
                    berry.style.left = '100%';
                    berry.style.display = 'block';
                    berry.style.animation = 'berry-animation 3s linear infinite';

                    berryAtiva = true;
                }
            }, 4000);
        }

        if (berryLeft <= 0) {
            berryFazer();
            berry.style.left = '100%';
        }

    }, 10);

    setTimeout(() => {


        if (emPartida == true) {
            clearInterval(loop);
            charizard.style.marginTop = '10px';
            red.style.transition = 'left 3s linear';
            red.style.left = '85%';
            fogo.style.animation = 'none';
            fogo.style.display = 'none';
            berry.style.animation = 'none';
            berry.style.display = 'none';

            pontuacaoFlutuante.innerText = `+${ganhou * multiplicador}`;
            pontuacaoFlutuante.style.left = '120px';
            pontuacaoFlutuante.style.bottom = '70px';
            pontuacaoFlutuante.style.display = 'block';
            pontuacaoFlutuante.style.animation = 'block';
            pontuacaoFlutuante.style.animation = 'flutuar 1.0s ease-out forwards';

            setTimeout(() => {
                berry.style.animation = 'none';
                berry.style.display = 'none';
                pontuacaoFlutuante.style.display = 'none';
            }, 1200);

            berry.style.animation = 'none';
            berry.style.display = 'none';
            pontos += ganhou * multiplicador;
            atualizarPontos();

            setTimeout(() => {
                pokeball.style.display = 'block';
                berry.style.animation = 'none';
                berry.style.display = 'none';
                charizard.classList.add('charizard-capturado');

                setTimeout(() => {
                    berry.style.animation = 'none';
                    berry.style.display = 'none';
                    pokeball.classList.add('pokeball-tremendo');
                }, 1400)
                red.src = '../assets/redParado_transparente.png';
            }, 3150);

            setTimeout(() => {
                berry.style.animation = 'none';
                berry.style.display = 'none';
                mostrarTelaVitoria();
                finalPartida = 1
            }, 6000)
        }
        if (emPartida == true) {
            cadastrarPartida(fkUsuario, pontos, qtdBerry, finalPartida, dificuldade)
        }
    }, 32000);
    // 3200]
}


function iniciarJogoDnv() {
    window.location.reload()
}

function voltarHome() {
    window.location.href = './escolher.html';
}

botaoComecar.addEventListener('click', iniciarJogo);
botaoVoltar.addEventListener('click', voltarHome);
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






function cadastrarPartida(fkUsuario, pontos, qtdBerry, finalPartida, dificuldade) {
    fetch("/partidas/cadastrarPartida", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({

            fkUsuario: fkUsuario,
            pontos: pontos,
            qtdBerry: qtdBerry,
            finalPartida: finalPartida,
            dificuldade: dificuldade


        })
    })

        .then(function (resultado) {
            if (resultado.ok) {
                console.log('Partida registada')
            }
            else {
                throw "ERRO ao registar a partida"
            }

        })

        .catch(function (resultado) {
            console.log(`o erro foi:${resultado}`)
        });

    return false
}
