var myCanvas = document.getElementById('myCanvas');
var c = myCanvas.getContext('2d');
myCanvas.width = myCanvas.scrollWidth;
myCanvas.height = myCanvas.scrollHeight;

    function badan() {   
        c.beginPath(); 
        c.moveTo(100,120); 
        c.lineTo(250,120);
        c.lineTo(250,400);
        c.lineTo(100,400);
        c.lineWidth = 4;
        c.lineCap = 'round';
        c.lineJoin = 'round';
        c.strokeStyle = 'black'; 
        c.closePath();
        c.stroke();
    }

    function tutup_awal(params) {   
        c.beginPath(); 
        c.moveTo(100,100); 
        c.lineTo(150,100);
        c.arc(175,100,25,1 * Math.PI,0 * Math.PI);
        c.lineTo(250,100);
        c.lineTo(250,120);
        c.lineTo(100,120);
        c.lineWidth = 4;
        c.lineCap = 'round';
        c.lineJoin = 'round';
        c.strokeStyle = '#FF7D7D'; 
        c.closePath();
        c.stroke();
    }
