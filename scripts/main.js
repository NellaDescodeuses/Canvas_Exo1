var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
//1er triangle plein utiliser .fillRect
//je commence mon chemin sur mon Canvas
ctx.beginPath();
ctx.fillStyle = 'rgb(185, 109, 71)';
//point de départ
ctx.moveTo(300,10);
//1ere ligne
ctx.lineTo(200,75);
//ligne du bas
ctx.lineTo(400,75);
//ligne de droite
ctx.lineTo(300,10)
ctx.stroke();
ctx.fill();

//corps de la maison
ctx.fillStyle = 'rgb(128, 203, 227)';
ctx.fillRect(200,75,200,200);

//fenêtre de gauche
ctx.fillStyle = 'rgb(201, 201, 201)';
ctx.fillRect(225,110,40,40);

//fenêtre de droite
ctx.fillStyle = 'rgb(201, 201, 201)';
ctx.fillRect(335,110,40,40);

//porte
ctx.fillStyle = 'rgb(201, 201, 201)';
ctx.fillRect(268,190,60,85);
