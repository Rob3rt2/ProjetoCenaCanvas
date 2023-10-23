const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

ctx.canvas.width = window.innerWidth;
ctx.canvas.height = window.innerHeight;






//cerca esquerda//
ctx.beginPath();
ctx.moveTo(0, 200);
ctx.lineTo(750, 200);
ctx.lineTo(750, 125);
ctx.lineTo(730, 110);
ctx.lineTo(710, 125);
ctx.lineTo(690, 110);
ctx.lineTo(670, 125);
ctx.lineTo(650, 110);
ctx.lineTo(630, 125);
ctx.lineTo(610, 110);
ctx.lineTo(590, 125);
ctx.lineTo(570, 110);
ctx.lineTo(550, 125);
ctx.lineTo(530, 110);
ctx.lineTo(510, 125);
ctx.lineTo(490, 110);
ctx.lineTo(470, 125);
ctx.lineTo(450, 110);
ctx.lineTo(430, 125);
ctx.lineTo(410, 110);
ctx.lineTo(390, 125);
ctx.lineTo(370, 110);
ctx.lineTo(350, 125);
ctx.lineTo(330, 110);
ctx.lineTo(310, 125);
ctx.lineTo(290, 110);
ctx.lineTo(270, 125);
ctx.lineTo(250, 110);
ctx.lineTo(230, 125);
ctx.lineTo(210, 110);
ctx.lineTo(190,125);
ctx.lineTo(170, 110);
ctx.lineTo(150, 125);
ctx.lineTo(130, 110);
ctx.lineTo(110, 125);
ctx.lineTo(90, 110);
ctx.lineTo(70, 125);
ctx.lineTo(50, 110);
ctx.lineTo(30, 125);
ctx.lineTo(10, 110);
ctx.lineTo(-10, 125);
ctx.fillStyle="	#696969";
ctx.fill();
ctx.stroke();

//linhas da cerca esquerda//
ctx.beginPath();
ctx.moveTo(30, 125);
ctx.lineTo(30, 200);
ctx.moveTo(70, 125);
ctx.lineTo(70, 200);
ctx.moveTo(110, 125);
ctx.lineTo(110, 200);
ctx.moveTo(150, 125);
ctx.lineTo(150, 200);
ctx.moveTo(190, 125);
ctx.lineTo(190, 200);
ctx.moveTo(230, 125);
ctx.lineTo(230, 200);
ctx.moveTo(270, 125);
ctx.lineTo(270, 200); 
ctx.moveTo(310, 125);
ctx.lineTo(310, 200);
ctx.moveTo(350, 125);
ctx.lineTo(350, 200);
ctx.moveTo(390, 125);
ctx.lineTo(390, 200);
ctx.moveTo(430, 125);
ctx.lineTo(430, 200);
ctx.moveTo(470, 125);
ctx.lineTo(470, 200);
ctx.moveTo(510, 125);
ctx.lineTo(510, 200);
ctx.moveTo(550, 125);
ctx.lineTo(550, 200);
ctx.moveTo(590, 125);
ctx.lineTo(590, 200);
ctx.moveTo(630, 125);
ctx.lineTo(630, 200);
ctx.moveTo(670, 125);
ctx.lineTo(670, 200);
ctx.moveTo(710, 125);
ctx.lineTo(710, 200);
ctx.stroke();

//igreja//
ctx.beginPath();
ctx.moveTo(752,0);
ctx.lineTo(752, 500);
ctx.lineTo(1250, 500);
ctx.lineTo(1250,0);
ctx.fillStyle ="#696969";
ctx.fill();
ctx.stroke();

//telhado da igreja//
ctx.beginPath();
ctx.moveTo(752, 300);
ctx.lineTo(1001, 100);
ctx.lineTo(1250, 300);
ctx.lineTo(1250, 0);
ctx.lineTo(752, 0);
ctx.lineTo(752, 300);
ctx.fillStyle ="	#363636";
ctx.fill();
ctx.stroke();

//cruz da igreja//
ctx.beginPath();
ctx.moveTo(981, 250);
ctx.lineTo(1021, 250);
ctx.lineTo(1021, 200);
ctx.lineTo(1061,200);
ctx.lineTo(1061, 180);
ctx.lineTo(1021, 180);
ctx.lineTo(1021, 150);
ctx.lineTo(981, 150);
ctx.lineTo(981, 180);
ctx.lineTo(941, 180);
ctx.lineTo(941, 200);
ctx.lineTo(981, 200);
ctx.lineTo(981, 250);
ctx.fillStyle = "#1C1C1C";
ctx.fill();
ctx.stroke();

//janela da igreja//
ctx.beginPath();
ctx.moveTo(961, 300);
ctx.arc(1001, 300, 40, 0, Math.PI * 2, true);
ctx.fillStyle = "	#808080";
ctx.fill();
ctx.stroke();

//divisoria da janela//
ctx.moveTo(1001, 260);
ctx.lineTo(1001, 340);
ctx.stroke();

//porta da igreja//
ctx.beginPath();
ctx.moveTo(941, 500);
ctx.lineTo(941, 400);
ctx.lineTo(1061, 400);
ctx.lineTo(1061, 500);
ctx.moveTo(1001, 400);
ctx.lineTo(1001, 500);
ctx.fillStyle = "#8B4513";
ctx.fill();
ctx.stroke();

//maaçaneta da porta//
ctx.beginPath();
ctx.arc(991, 450, 5, 0, Math.PI * 2, true);
ctx.arc(1011, 450, 5, 0, Math.PI * 2, true);
ctx.fillStyle ="black";
ctx.fill();

//calçada//
ctx.beginPath();
ctx.moveTo(752, 501);
ctx.lineTo(1250,501);
ctx.lineTo(1250,1100);
ctx.lineTo(752,1100);
ctx.lineTo(752,501);
ctx.fillStyle = "#696969";
ctx.fill();
ctx.strokeStyle = "black";
ctx.stroke();

//asfalto//
ctx.beginPath();
ctx.moveTo(820, 541);
ctx.lineTo(1188, 541);
ctx.lineTo(1188, 1250);
ctx.lineTo(820, 1250);
ctx.lineTo(820,  541);
ctx.fillStyle="black";
ctx.fill();
ctx.stroke();

//faixa da rua//
ctx.beginPath();
ctx.moveTo(991, 551);
ctx.lineTo(1011,551);
ctx.lineTo(1011, 1250);
ctx.lineTo(991, 1250);
ctx.lineTo(991,551);
ctx.fillStyle="	#DCDCDC";
ctx.fill();
ctx.stroke();

///cerca direita//
ctx.beginPath();
ctx.moveTo(1252, 200);
ctx.lineTo(1252, 125);
ctx.lineTo(1271, 110);
ctx.lineTo(1291, 125);
ctx.lineTo(1311, 110);
ctx.lineTo(1331, 125);
ctx.lineTo(1351, 110);
ctx.lineTo(1371, 125);
ctx.lineTo(1391, 110);
ctx.lineTo(1411, 125);
ctx.lineTo(1431, 110);
ctx.lineTo(1451, 125);
ctx.lineTo(1471, 110);
ctx.lineTo(1491, 125);
ctx.lineTo(1511, 110);
ctx.lineTo(1531, 125);
ctx.lineTo(1551, 110);
ctx.lineTo(1571, 125);
ctx.lineTo(1591, 110);
ctx.lineTo(1611, 125);
ctx.lineTo(1631, 110);
ctx.lineTo(1651, 125);
ctx.lineTo(1671, 110);
ctx.lineTo(1691, 125);
ctx.lineTo(1711, 110);
ctx.lineTo(1731, 125);
ctx.lineTo(1751, 110);
ctx.lineTo(1771, 125);
ctx.lineTo(1791, 110);
ctx.lineTo(1811, 125);
ctx.lineTo(1831, 110);
ctx.lineTo(1851, 125);
ctx.lineTo(1871, 110);
ctx.lineTo(1891, 125);
ctx.lineTo(1911, 110);
ctx.lineTo(1911, 200);
ctx.lineTo(1251, 200);
ctx.lineTo(1251, 125);
ctx.fillStyle="#696969";
ctx.fill();
ctx.stroke();

//linha da cerca direita//
ctx.beginPath();
ctx.moveTo(1291, 125);
ctx.lineTo(1291, 200);
ctx.moveTo(1331, 125);
ctx.lineTo(1331, 200);
ctx.moveTo(1371, 125);
ctx.lineTo(1371, 200);
ctx.moveTo(1411, 125);
ctx.lineTo(1411, 200);
ctx.moveTo(1451, 125);
ctx.lineTo(1451, 200);
ctx.moveTo(1491, 125);
ctx.lineTo(1491, 200);
ctx.moveTo(1531, 125);
ctx.lineTo(1531, 200);
ctx.moveTo(1571, 125);
ctx.lineTo(1571, 200);
ctx.moveTo(1611, 125);
ctx.lineTo(1611, 200);
ctx.moveTo(1651, 125);
ctx.lineTo(1651, 200);
ctx.moveTo(1691, 125);
ctx.lineTo(1691, 200);
ctx.moveTo(1731, 125);
ctx.lineTo(1731, 200);
ctx.moveTo(1771, 125);
ctx.lineTo(1771, 200);
ctx.moveTo(1811, 125);
ctx.lineTo(1811, 200);
ctx.moveTo(1851, 125);
ctx.lineTo(1851, 200);
ctx.strokeStyle = "black";
ctx.stroke();

//furos cerca//
ctx.moveTo(1840,145);
ctx.arc(1831, 145, 7, 0, Math.PI * 2, true);
ctx.moveTo(660, 160);
ctx.arc(651, 160, 9, 0, Math.PI * 2, true);
ctx.moveTo(254, 180);
ctx.arc(251, 180, 4, 0, Math.PI * 2, true);
ctx.moveTo(1354, 130);
ctx.arc(1351, 130, 6, 0, Math.PI * 2, true);
ctx.fillStyle ="#008000";
ctx.fill();
ctx.stroke();

//codigo para tronco das arvores//
ctx.beginPath();
ctx.moveTo(220, 500);
ctx.lineTo(250, 540);
ctx.lineTo(280, 570);
ctx.lineTo(370, 490);
ctx.lineTo(240, 450);
ctx.lineTo(220, 470);
ctx.lineTo(190, 460);
ctx.lineTo(160, 490);
ctx.lineTo(220, 500);
ctx.moveTo(600, 870);
ctx.lineTo(640, 820);
ctx.lineTo(650, 780);
ctx.lineTo(600, 730);
ctx.lineTo(580, 760);
ctx.lineTo(560, 820);
ctx.lineTo(600, 870);
ctx.moveTo(60, 750);
ctx.lineTo(40, 800);
ctx.lineTo(70, 750);
ctx.moveTo(220, 760);
ctx.lineTo(240, 810);
ctx.lineTo(230, 760);
ctx.moveTo(1340, 420);
ctx.lineTo(1360, 560);
ctx.lineTo(1400, 580);
ctx.lineTo(1440, 600);
ctx.lineTo(1410, 610);
ctx.lineTo(1480, 630);
ctx.lineTo(1520, 635);
ctx.lineTo(1560, 645);
ctx.lineTo(1600, 610);
ctx.lineTo(1620, 580);
ctx.lineTo(1340, 420);
ctx.fillStyle ="#8B4513";
ctx.fill();
ctx.stroke();

//folhas das arvores//
ctx.beginPath();
ctx.moveTo(220, 485);
ctx.quadraticCurveTo(300, 610, 410, 480);
ctx.quadraticCurveTo(630, 490, 510, 380);
ctx.quadraticCurveTo(600, 300, 420, 320);
ctx.quadraticCurveTo(200, 170, 200, 340);
ctx.quadraticCurveTo(20, 430, 220, 485);
ctx.moveTo(600, 750);
ctx.quadraticCurveTo(660, 850, 730, 750);
ctx.quadraticCurveTo(800, 740, 770, 640);
ctx.quadraticCurveTo(650, 540, 620, 600);
ctx.quadraticCurveTo(540, 560, 500, 650);
ctx.quadraticCurveTo(500, 790, 600, 750);
ctx.moveTo(230, 760);
ctx.quadraticCurveTo(350, 680, 250, 670);
ctx.quadraticCurveTo(220, 550, 170, 550);
ctx.quadraticCurveTo(250, 680, 130, 670);
ctx.quadraticCurveTo(65, 670, 130, 550);
ctx.quadraticCurveTo(90, 550, 50, 670);
ctx.quadraticCurveTo(-30, 680, 70, 760);
ctx.quadraticCurveTo(145, 810, 230, 760);
ctx.moveTo(1340, 320);
ctx.quadraticCurveTo(1370, 250, 1400, 240);
ctx.quadraticCurveTo(1470, 200, 1550, 400);
ctx.quadraticCurveTo(1600, 300, 1680, 520);
ctx.quadraticCurveTo(1740, 500, 1700,570);
ctx.quadraticCurveTo(1450, 670, 1380, 520);
ctx.quadraticCurveTo(1180, 430, 1340, 320);
ctx.fillStyle ="#008000";
ctx.fill();
ctx.stroke();

//pedras da cena//
ctx.beginPath();
ctx.moveTo(1420, 790);
ctx.lineTo(1480, 880);
ctx.lineTo(1590, 840);
ctx.lineTo(1630, 760);
ctx.lineTo(1520, 720);
ctx.lineTo(1470, 730);
ctx.lineTo(1450, 700);
ctx.lineTo(1410, 670);
ctx.lineTo(1450, 740);
ctx.lineTo(1420, 720);
ctx.lineTo(1430, 750);
ctx.lineTo(1420, 790);
ctx.moveTo(600, 230);
ctx.lineTo(630, 230);
ctx.lineTo(660, 250);
ctx.lineTo(670, 240);
ctx.lineTo(680, 270);
ctx.lineTo(700, 290);
ctx.lineTo(660, 310);
ctx.lineTo(720, 320);
ctx.lineTo(640, 340);
ctx.lineTo(530, 250);
ctx.lineTo(510, 220);
ctx.lineTo(600, 230);
ctx.moveTo(340, 800);
ctx.lineTo(360, 820);
ctx.lineTo(320, 840);
ctx.lineTo(380, 880);
ctx.lineTo(400, 810);
ctx.lineTo(420, 740);
ctx.lineTo(450, 720);
ctx.lineTo(340, 710);
ctx.lineTo(320, 770);
ctx.lineTo(310, 790);
ctx.lineTo(340, 800);
ctx.fillStyle ="#1C1C1C";
ctx.fill();  
ctx.stroke();



//transform//
ctx.beginPath();
ctx.transform(1, 0, -1.4, 1,0,0);
ctx.fillRect(940, 0, 100,100)

ctx.transform(1, 0, 2.8, 1, 0,0);

ctx.fillRect(940, 0, 100,100)



//translate//
ctx.beginPath();
ctx.translate(1770, -20);
ctx.fillStyle = "#8B4513";
ctx.fillRect(0,0, 100,50);
ctx.stroke();


ctx.setTransform(1,0,0,1,0,0);

ctx.fillStyle = "#D2691E";
ctx.fillRect(20, -20, 100, 50); 

ctx.closePath();

//rotate//
ctx.beginPath();


ctx.fillStyle = "#8B4513";
ctx.fillRect(100, 230, 15, 60);

ctx.translate(300, 250);
ctx.rotate(Math.PI / 2);
ctx.translate(-300, -250);

ctx.fillStyle = "#A0522D";
ctx.fillRect(290, 418, 15, 50);

//clippingPath//
ctx.beginPath();
    ctx.rect(100, 150, 200, 20);
    ctx.rect(150, 100, 20, 130);
    ctx.closePath();

    
    ctx.clip();

    
    ctx.fillStyle = '#8B4513';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

  
    ctx.restore();

 
    ctx.strokeStyle = '#D2691E';
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.moveTo(100, 150);
    ctx.lineTo(300, 150);
    ctx.moveTo(150, 100);
    ctx.lineTo(150, 300);
    ctx.stroke();

    
    //scale//
ctx.beginPath();
ctx.scale(100, 500);
ctx.fillStyle= "#800000";
ctx.fillRect(1001, 800, 12, 50);

ctx.setTransform(1,0,0,1,0,0);



//personagem//
ctx.beginPath();
var x = canvas.width / 2;
var y = canvas.height / 2;
var dx = 2;
var dy = 2;
var img = new Image();
img.src = 'img/stop.png';

document.addEventListener('keydown', keyPush);

function keyPush(event) {
 if (event.keyCode == 37) {
    dx = -2;
    dy = 0;
 }
 if (event.keyCode == 38) {
    dx = 0;
    dy = -2;
 }
 if (event.keyCode == 39) {
    dx = 2;
    dy = 0;
 }
 if (event.keyCode == 40) {
    dx = 0;
    dy = 2;
 }
}

function drawImage() {
 ctx.clearRect(0, 0, canvas.width, canvas.height);
 ctx.drawImage(img, x, y);

 
}

function moveImage() {
 x += dx;
 y += dy;
}

function game() {
 moveImage();
 drawImage();
}

setInterval(game, 1000 / 60);


