var data = {
	primoBubble:"Benvenuto, oggi analizzeremo le tue capacit\u00E0 di problem solving",
	secondoBubble:"Io sono P3t3r, l\'assistente digitale che ti giudicher\u00E0",
	terzoBubble:"questa invece \u00E8 D011yX, una pecora digitale da me creata",
	quartoBubble:"che sfrutteremo per eseguire il test",
	quintoBubble:"INIZIAMO!",
	spriteUno:"immagini/a7.png",
	spriteDue:"immagini/a8.png",
	spriteTre:"immagini/a2.png",
	spriteQuattro:"immagini/a3.png",
	spriteCinque:"immagini/a4.png",
};


function carica(){
document.getElementById("bubble").innerHTML = data.primoBubble;
document.getElementById("robot").src= data.spriteUno;
setTimeout(testiBubbleDue, 3000);
setTimeout(testiBubbleTre, 6000);
setTimeout(testiBubbleQuattro, 9000);
setTimeout(nuova, 12000);
}

carica();

function testiBubbleDue() {
  document.getElementById("bubble").innerHTML = data.secondoBubble;
  document.getElementById("robot").src= data.spriteDue;
}
function testiBubbleTre() {
 document.getElementById("bubble").innerHTML = data.terzoBubble;
 document.getElementById("robot").src= data.spriteTre;
}
function testiBubbleQuattro() {
 document.getElementById("bubble").innerHTML = data.quartoBubble;
 document.getElementById("robot").src= data.spriteQuattro;
}
function testiBubbleQuattro() {
 document.getElementById("bubble").innerHTML = data.quintoBubble;
 document.getElementById("robot").src= data.spriteCinque;
}

function nuova(){
    document.location="scheda_nutri.html";
}