class Cpu {
    constructor(ctx, bola) {
        this.ctx = ctx
        this.bola = bola    
        this.velocidade = 3
        this.largura = 20
        this.altura = 50
        this.x =(this.ctx.canvas.width - this.largura)
        this.y = (this.ctx.canvas.height/2) - (this.altura/2)
        this.inicioX = this.x
        this.inicioY = this.y
        this.yMeio = Math.random()*this.altura
    }

    gerenciar() {
        if(this.bola.direcaoX > 0 && this.bola.x > this.ctx.canvas.width/2 ) {
            if(this.bola.y + (this.bola.altura/2) > this.y + this.yMeio){
                this.y += this.velocidade
            }
            if(this.bola.y + (this.bola.altura/2) < this.y + this.yMeio){
                this.y -= this.velocidade
            }
            if((this.bola.x + this.bola.largura) < this.x) {
                this.x -= this.velocidade
            }
        } else {
            if(this.y > this.inicioY){
                this.y -= this.velocidade
            }
            if(this.y < this.inicioY){
                this.y += this.velocidade
            }
            if(this.x > this.inicioX){
                this.x -= this.velocidade
            }
            if(this.x < this.inicioX){
                this.x += this.velocidade
            }
        }
        if(
            (this.x <= this.bola.x + this.bola.largura && this.x + this.largura >= this.bola.x)&& 
            (this.y + this.altura >= this.bola.y && this.y <= this.bola.y + this.bola.altura)
        ){
            this.bola.direcaoX = -1
            this.bola.direcaoY = ((this.bola.y + (this.bola.altura/2)) - (this.y + (this.altura/2)))/20
            this.yMeio = Math.random()*this.altura
        }
    }

    desenhar() {
        this.gerenciar()
        this.ctx.fillStyle= "pink"
        this.ctx.fillRect(this.x, this.y, this.largura, this.altura)
    }
}