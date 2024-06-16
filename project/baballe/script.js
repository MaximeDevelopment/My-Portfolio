"use strict";
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d")
function resize() {
    const snapshot = ctx.getImageData(0, 0, canvas.width, canvas.height)
    const size = document.body.getBoundingClientRect();
    canvas.width = size.width;
    canvas.height =  size.height;
    ctx.putImageData(snapshot, 0, 0);
}
resize();
window.addEventListener("resize", resize);

import Baballes from "./baballe.js";

canvas.addEventListener("click", balle)

setInterval(Baballes.background, 1000,canvas)
function balle(e) {
    const balle2 = new Baballes(canvas, e.clientX, e.clientY)
    balle2.dessin(canvas)
}
Baballes.background(canvas)