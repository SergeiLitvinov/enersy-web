let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");

canvas.width = window.innerWidth - 30;
canvas.height = window.innerHeight - 10;
canvas.style.border = '5px solid red';

let canvas_width = canvas.width;
let canvas_height = canvas.height;

// let shape = []
// shapes.push

let mouse_dawn = function(event) {

    event.preventDefault();
    console.log(event);
}

window.onmousedown = mouse_dawn;