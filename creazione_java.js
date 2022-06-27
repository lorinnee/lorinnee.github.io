var data = {
	primoBubble:"Benvenuto!",
	secondoBubble:"oggi analizzeremo le tue capacit\u00E0 di problem solving",
	terzoBubble:"Io sono P3t3r, l\'assistente digitale che ti giudicher\u00E0",
	quartoBubble:"questa invece \u00E8 D011yX, una pecora digitale da me creata",
	quintoBubble:"la sfrutteremo per eseguire il test",
	sestoBubble:"INIZIAMO!",
	spriteUno:"immagini/d3.png",
	spriteDue:"immagini/a8.png",
	spriteTre:"immagini/a4.png",
	spriteQuattro:"immagini/c4.png",
	spriteCinque:"immagini/c4.png",
	spriteSei:"immagini/a2.png",
};


function carica(){
document.getElementById("bubble").innerHTML = data.primoBubble;
document.getElementById("robot").src= data.spriteUno;
setTimeout(testiBubbleDue, 4000);
setTimeout(testiBubbleTre, 8000);
setTimeout(testiBubbleQuattro, 12000);
setTimeout(testiBubbleCinque, 16000);
setTimeout(testiBubbleSei, 20000);
setTimeout(nuova, 24000);
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
function testiBubbleCinque() {
 document.getElementById("bubble").innerHTML = data.quintoBubble;
 document.getElementById("robot").src= data.spriteCinque;
}
function testiBubbleSei() {
 document.getElementById("bubble").innerHTML = data.sestoBubble;
 document.getElementById("robot").src= data.spriteSei;
}




function nuova(){
    document.location="scheda_nutri.html";
}