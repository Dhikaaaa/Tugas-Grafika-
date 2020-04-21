var myCanvas = document.getElementById('myCanvas');
var c = myCanvas.getContext('2d');
myCanvas.width = myCanvas.scrollWidth;
myCanvas.height = myCanvas.scrollHeight;

    function badan() {   
        c.beginPath(); 
        c.moveTo(100,160); 
        c.lineTo(100,440);
        c.lineTo(250,440);
        c.lineTo(250,160);
        c.lineWidth = 4;
        c.lineCap = 'round';
        c.lineJoin = 'round';
        c.strokeStyle = 'black'; 
        c.stroke();
    }

   function tutup_awal(params) {  
        c.fillStyle = '#FF7D7D' ;
        c.fillRect(0,0,150,20);
   }
var i = 0;

    function draw() {
        // for (let i = 1; i < ; i++) {
            c.save();
            c.clearRect(0,0,myCanvas.width,myCanvas.height);
            c.translate(100,158);
            c.rotate(Math.PI /40 * i);
            tutup_awal();
            c.restore();
        // }   
    }
draw();
badan();

addEventListener("keydown", function(res){
    if(res.key == "ArrowUp"){
        i -= 1;
        draw();
        badan();
    } else if(res.key == "ArrowDown"){
        i += 1;
        draw();
        badan();
    } else{
    }
});
