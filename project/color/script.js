"use strict";

const body = document.querySelector("body");
const color = body.querySelectorAll(".color");
const change1 = body.querySelector(".change1");
const input = body.querySelectorAll(".opacity-input");
const div1 = body.querySelector(".div1");
let f, f1, f2, f3, e=[];

input.forEach((inp, i)=> {
    inp.addEventListener("input", ()=> {
        const c = color[i].colors;
        const t = `rgba(${c.f},${c.f1},${c.f2},${inp.value})`;
        e[i].textContent = t;
        color[i].style.backgroundColor = t;
    })
    e.push(document.createElement("div"));
    div1.append(e[i])
}
)

change1.addEventListener("click", handleSquares)

handleSquares()
function gen(carre, i) {
    f = Math.floor(Math.random()*255);
    f1 = Math.floor(Math.random()*255);
    f2 = Math.floor(Math.random()*255);
    f3 = (Math.random()*1).toFixed(3);
    const c = `rgba(${f},${f1},${f2},${f3})`;
    carre.colors = {f:f, f1:f1, f2:f2};
    carre.style.backgroundColor = c;
    e[i].textContent = c
    input[i].value = f3;
}

function handleSquares() {
    color.forEach(gen);
}