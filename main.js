const myCanvas = document.getElementById("myCanvas");
const canvas = myCanvas.getContext("2d");

myCanvas.width = myCanvas.scrollWidth;
myCanvas.height = myCanvas.scrollHeight;

let body = () => {
  canvas.beginPath();
  canvas.moveTo(100, 160);
  canvas.lineTo(100, 440);
  canvas.lineTo(250, 440);
  canvas.lineTo(250, 160);
  canvas.lineWidth = 4;
  canvas.lineCap = "round";
  canvas.lineJoin = "round";
  canvas.strokeStyle = "black";
  canvas.stroke();
};

let tutup_awal = () => {
  canvas.fillStyle = "#FF7D7D";
  canvas.fillRect(0, 0, 150, 20);
};
let i = 0;

let draw = () => {
  // for (let i = 1; i < ; i++) {
  canvas.save();
  canvas.clearRect(0, 0, myCanvas.width, myCanvas.height);
  canvas.translate(100, 158);
  canvas.rotate((Math.PI / 40) * i);
  tutup_awal();
  canvas.restore();
  // }
};
draw();
body();

addEventListener("keydown", (res) => {
  if (res.key == "ArrowUp") {
    i--;
    draw();
    body();
  } else if (res.key == "ArrowDown") {
    i++;
    draw();
    body();
  } else {
  }
});
