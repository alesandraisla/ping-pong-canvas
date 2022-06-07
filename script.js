let canvas = document.getElementById('desenho1');
let ctx = canvas.getContext('2d');
let pontoJogador1 = 0
let pontoJogador2 = 0

const teclado = {
    cima: false,
    baixo: false, 
    esquerda: false, 
    direita: false, 
}

const jogador = new Pad(ctx, teclado)
const bola = new Bola(ctx, jogador)
const cpu = new Cpu(ctx, bola)
const placar = new Placar(ctx)

window.addEventListener('keydown', (event) => {
    if(event.key == "ArrowLeft") {
        teclado.esquerda = true
    } else if (event.key == "ArrowRight") {
        teclado.direita = true
    }

    if(event.key == "ArrowUp") {
        teclado.cima = true
    } else if (event.key == "ArrowDown") {
        teclado.baixo = true
    }
})

window.addEventListener('keyup', (event) => {
    if(event.key == "ArrowLeft") {
        teclado.esquerda = false
    } else if (event.key == "ArrowRight") {
        teclado.direita = false
    }
    if(event.key == "ArrowUp") {
        teclado.cima = false
    } else if (event.key == "ArrowDown") {
        teclado.baixo = false
    }
})

const game = () => {
    ctx.clearRect(0,0,canvas.width, canvas.height)

    jogador.desenhar()
    bola.desenhar()
    cpu.desenhar()
    placar.desenhar()
    requestAnimationFrame(game)
}

requestAnimationFrame(game)