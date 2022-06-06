let canvas = document.getElementById('desenho1');
let ctx = canvas.getContext('2d');

const teclado = {
    cima: false,
    baixo: false, 
    esquerda: false, 
    direita: false, 
}

const jogador = new Pad(ctx, teclado)
const bola = new Bola(ctx, jogador)


window.addEventListener('keydown', (event) => {
    if(event.keyCode == 37) {
        teclado.esquerda = true
    } else if (event.keyCode == 39) {
        teclado.direita = true
    }

    if(event.keyCode == 38) {
        teclado.cima = true
    } else if (event.keyCode == 40) {
        teclado.baixo = true
    }
})

window.addEventListener('keyup', (event) => {
    if(event.keyCode == 37) {
        teclado.esquerda = false
    } else if (event.keyCode == 39) {
        teclado.direita = false
    }
    if(event.keyCode == 38) {
        teclado.cima = false
    } else if (event.keyCode == 40) {
        teclado.baixo = false
    }
})