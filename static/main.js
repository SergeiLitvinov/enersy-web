let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
fitToContainer(canvas);

function fitToContainer(canvas){
    canvas.style.width='100%';
    canvas.style.height='100%';
    //canvas.width  = canvas.offsetWidth;
    //canvas.height = canvas.offsetHeight;
  }
//canvas.width = window.innerWidth - 30;
//canvas.width = window.innerWidth;
//canvas.style.width = 100%;
//canvas.height = window.innerHeight - 10;
//canvas.height = window.innerHeight;
//canvas.style.height = 100%;

canvas.style.border = '5px solid red';

//let canvas_width = canvas.width;
//let canvas_height = canvas.height;

// let shape = []
// shapes.push

let mouse_dawn = function(event) {

    event.preventDefault();
    console.log(event);
}

window.onmousedown = mouse_dawn;