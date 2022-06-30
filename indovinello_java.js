var data = {
	domanda: "Indovinello",
	primoBubble:"Per concludere, ecco un indovinello:",
	secondoBubble:"Bianca grassa e lanuginosa, soffice e graziosa, sembra pesante ma non lo \u00E8, indovina cos\'\u00E8",
	spriteUno:"immagini/b8.png",
	spriteDue:"immagini/c1.png",
	spriteGiusta:"immagini/a2.png",
	spriteSbagliata:"immagini/b4.png",
    giustaBubble:"Giusto!",
    sbagliataBubble:"Riprova",

};


function carica(){
document.getElementById("domanda").innerHTML = data.domanda;
document.getElementById("bubble").innerHTML = data.primoBubble;
document.getElementById("robot").src= data.spriteUno;
setTimeout(testiBubbleDue, 4000);
}

carica();

function testiBubbleDue() {
  document.getElementById("bubble").innerHTML = data.secondoBubble;
  document.getElementById("robot").src= data.spriteDue;
}




function nuova(){
    document.location="finale_nuvola.html";
}



const wordList = ["dollyx","DOLLYX", "DollyX","Dollyx", "D011yX", "d011yX", "d011yx", "do11yX","do11yx", "Do11yx", "Do11yX", "pecora", "Pecora", "PECORA"];


function checkValue(x) {
  return x == document.getElementById("guess").value;
}

function check() {
  if ( wordList.some(checkValue) === true){
   document.getElementById("bubble").innerHTML = data.giustaBubble;
   document.getElementById("robot").src= data.spriteGiusta;
   setTimeout(nuova, 2000);
   }
   else {
          document.getElementById("bubble").innerHTML = data.sbagliataBubble;
		  document.getElementById("robot").src= data.spriteSbagliata;
        }
}