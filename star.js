class Stars{
    constructor(ctx,width,height,amount){
        this.ctx=ctx;
        this.width=width;
        this.height=height;
        this.stars=this.getStars(amount)
    }
    getStars(amount){
        let stars = [];
        while (amount--){
            stars.push({
                x:Math.random() * this.width,
                y:Math.random() * this.height,
                r:Math.random() + .2
            })
        }
        return stars;
    }

    blink(){
        this.star = this.stars.map(star =>{
            let sign = Math.random()>0.5?1:-1
            star.r += sign*.2
            if(star.r<0){
                star.r = -star.r
            }else if(star.r>1){
                star.r -= .2
            }
            return star
        })
    }

    draw (){
        let ctx = this.ctx
        ctx.save()
        ctx.fillStyle = 'white'
        this.stars.forEach(star => {
        ctx.beginPath()
        ctx.arc(star.x, star.y, star.r, 0, 2*Math.PI)
        ctx.fill()
        })
        ctx.restore()
    }
}
