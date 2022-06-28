var data = {
	domanda: "Indovinello",
	primoBubble:"Per concludere, ecco un indovinello:",
	secondoBubble:"Bianca grassa e lanuginosa, soffice e graziosa, sembra pesante ma non lo \u00E8, indovina cos\'\u00E8",
	terzoBubble:"Bianca grassa e lanuginosa, soffice e graziosa, sembra pesante ma non lo \u00E8, indovina cos\'\u00E8",
	quartoBubble:"Bianca grassa e lanuginosa, soffice e graziosa, sembra pesante ma non lo \u00E8, indovina cos\'\u00E8",

	spriteUno:"immagini/d3.png",
	spriteDue:"immagini/a8.png",
	spriteTre:"immagini/a4.png",
	spriteQuattro:"immagini/c4.png",


};


function carica(){
document.getElementById("domanda").innerHTML = data.domanda;
document.getElementById("bubble").innerHTML = data.primoBubble;
document.getElementById("robot").src= data.spriteUno;
setTimeout(testiBubbleDue, 4000);
setTimeout(testiBubbleTre, 8000);
setTimeout(testiBubbleQuattro, 12000);

//setTimeout(nuova, 24000);
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





function nuova(){
    document.location="scheda_nutri.html";
}


const wordList = ["dollyx", "DollyX","Dollyx", "D011yX", "d011yX", "pecora",];


 //for (var i = 0; i<wordList.length; i++) {
  //if (answer === wordList[i])
 //   result = true;
//}

   function check() {
       guess = document.querySelector("#guess").value;
	   if (guess == wordList.some) {
           alert("you are right!")
       } else {
           alert("nope")
        }
   }