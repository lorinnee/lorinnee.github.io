var data = {
	primoBubble:"Benvenuto, oggi analizzeremo le tue capacit\u00E0 di problem solving",
	secondoBubble:"Io sono P3t3r, l\'assistente digitale che ti giudicher\u00E0",
	terzoBubble:"questa invece \u00E8 D011yX, una pecora digitale da me creata",
	quartoBubble:"che sfrutteremo per eseguire il test",
	quintoBubble:"INIZIAMO!",
};



document.getElementById("bubble").innerHTML = data.primoBubble;
setTimeout(testiBubbleDue, 3000);
setTimeout(testiBubbleTre, 6000);
setTimeout(testiBubbleQuattro, 9000);
setTimeout(nuova, 12000);

function testiBubbleDue() {
  document.getElementById("bubble").innerHTML = data.secondoBubble;
}
function testiBubbleTre() {
 document.getElementById("bubble").innerHTML = data.terzoBubble;
}
function testiBubbleQuattro() {
 document.getElementById("bubble").innerHTML = data.quartoBubble;
}
function testiBubbleQuattro() {
 document.getElementById("bubble").innerHTML = data.quintoBubble;
}

function nuova(){
	document.location="scheda_nutri.html";
}
