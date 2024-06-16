"use strict";

export default class Baballes{
    vv = Math.random()<0.5?20:-20; 
    vh = Math.random()<0.5?20:-20;
    r = 20;
constructor(canvas, x, y) {
let c1 = Math.floor(Math.random()*255)
let c2 = Math.floor(Math.random()*255)
let c3 = Math.floor(Math.random()*255)

this.x = x;
this.y = y;
    this.c = `rgb(${c1} ,${c2} ,${c3})`
console.log(`${c1} ,${c2} ,${c3}`);
}

    dessin(canvas) {
        const ctx = canvas.getContext("2d")
        ctx.fillStyle = this.c
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, Math.PI*2);
        ctx.fill();
        ctx.stroke();
        if(this.x + this.r > canvas.width || this.x-this.r < -0)
        this.vh = -this.vh;
        if (this.y+ +this.r > canvas.height || this.y-this.r < -0)
        this.vv = -this.vv
        this.x += this.vh;
        this.y += this.vv;
        requestAnimationFrame(()=>{
            this.dessin(canvas)
        });
    }
    static background(canvas) {
        let b1 = Math.floor(Math.random()*255)
        let b2 = Math.floor(Math.random()*255)
        let b3 = Math.floor(Math.random()*255)
        canvas.style.backgroundColor = `rgb(${b1}, ${b2}, ${b3})`;
        

    }
}


