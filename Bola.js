class Bola {
    constructor(ctx, jogador) {
        this.ctx = ctx
        this.movendo = false
        this.jogador = jogador
        this.direcaoX = 0
        this.direcaoY = 0
        this.velocidade = 2
        this.largura = 20
        this.altura = 10
        this.x =  (this.ctx.canvas.width/1.6) - (this.largura/2)
        this.y = (this.ctx.canvas.height/1.6) - (this.altura/2)
    }

    iniciar() {
        this.movendo = true
        this.direcaoY = 0

        this.direcaoX =- 1
        // this.direcaoY = (Math.random()*10 > 5 ? -1 : 1)
    }

    gerenciar() {
        if(this.movendo) {
            this.x += (this.direcaoX * this.velocidade)
            this.y += (this.direcaoY * this.velocidade)
            if(this.x >= (this.ctx.canvas.width - this.largura)) {
                this.direcaoX =- 1
                pontoJogador1++
                this.resetarBola()
                // para bolihna ir pro lado do jogador
                this.direcaoX = -1
            }
            if(this.x <= 0) {
                this.direcaoX = 1
                pontoJogador2++
                this.resetarBola()
                this.direcaoX = 1
            }
            if(this.y >= (this.ctx.canvas.height - this.altura)) {
                this.direcaoY =- 1
            }
            if(this.y <= 0) {
                this.direcaoY = 1
            }
            if(
                (this.x <= this.jogador.x + this.jogador.largura && this.x + this.largura >= this.jogador.x)&& 
                (this.y + this.altura >= this.jogador.y && this.y <= this.jogador.y + this.jogador.altura)
            ){
                this.direcaoX = 1
                this.direcaoY = ((this.y + (this.altura/2)) - (this.jogador.y + (this.jogador.altura/2)))/20
                // this.direcaoX *= -1
                //para nao colidir na parte traseira
                // this.direcaoX *= +1
            }
        }
    }

    resetarBola() {
        this.movendo = false
        this.x =  (this.ctx.canvas.width/2) - (this.largura/2)
        this.y = (this.ctx.canvas.height/2) - (this.altura/2)
        jogador.x = 0
        jogador.y = (this.ctx.canvas.height/2) - (jogador.altura/2)
        cpu.x =(this.ctx.canvas.width - cpu.largura)
        cpu.y = (this.ctx.canvas.height/2) - (cpu.altura/2)
    }
    desenhar() {
        this.gerenciar()
        this.ctx.fillStyle= "navy"
        this.ctx.fillRect(this.x, this.y, this.largura, this.altura)
    }
}