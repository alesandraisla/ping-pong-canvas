class Placar {
    constructor(ctx) {
        this.ctx = ctx
        this.margem = 10
        this.direita = this.ctx.canvas.width/1.6
        this.largura = 100
    }

    desenhar() {
        this.ctx.font= "40px arial"
        this.ctx.fillStyle= "#DEBC7D"
        this.ctx.fillText(pontoJogador1, this.margem, this.margem + 20, this.largura)
        this.ctx.fillText(pontoJogador2, this.direita - this.largura - this.margem + 190, this.margem + 20, this.largura)
    }
}