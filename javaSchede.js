// La struttura dati principale
// I dati di ogni pagina sono i singoli elementi dell'array
// la pagina corrente (ie: l'indice nell'array) è nella variabile paginaCorrente)
// Solo la prima pagina è completa. Le altre devono essere (ovviamente) uguali
var data = [
  {
    domanda: "Nutri D011yX",
    rispostaSinistra: "Fieno",
    rispostaDestra: "Metallo",
    video: "video/scheda01.mp4",
    videoSinistra: "video/fieno.mp4",
    videoDestra: "video/metallo.mp4",
	primoBubble:"Partiamo con una domanda semplice",
	secondoBubble:"Cosa preferirebbe mangiare D011yX?",
	terzoBubble:"3Cosa preferirebbe mangiare D011yX?",
	quartoBubble:"4Cosa preferirebbe mangiare D011yX?",
	reactionSinistra:"Tsk, scelta prevedibile",
	reactionDestra:"...diamine.",
  },
  {
    domanda: "Nascondi D011yX",
    rispostaSinistra: "Lampione",
    rispostaDestra: "Cespuglio",
	video: "video/scheda02.mp4",
	videoSinistra: "video/lampione.mp4",
    videoDestra: "video/cespuglio.mp4",
	primoBubble:"",
	secondoBubble:"",
	terzoBubble:"",
	quartoBubble:"",
	reactionSinistra:"",
	reactionDestra:"",
  },
  {
    domanda: "Pulisci D011yX",
    rispostaSinistra: "Lava",
    rispostaDestra: "Tosa",
  },
];
// inizializza la pagina corrente (viene caricata sotto)
var paginaCorrente = 0;
var sorgente = document.getElementById("source");
// Funziona che carica la paginaCorrente
function caricaPaginaCorrente() {
  document.getElementById("domanda").innerHTML = data[paginaCorrente].domanda;
  document.getElementById("button_left").innerHTML =
    data[paginaCorrente].rispostaSinistra;
	 document.getElementById("button_left").disabled=false;
	document.getElementById("button_right").innerHTML =
    data[paginaCorrente].rispostaDestra;
	 document.getElementById("button_right").disabled=false;
  sorgente.setAttribute("src", data[paginaCorrente].video);
  document.getElementById("bubble").innerHTML = data[paginaCorrente].primoBubble;
  setTimeout(testiBubbleDue, 3000);
  setTimeout(testiBubbleTre, 6000);
  setTimeout(testiBubbleQuattro, 9000);
 }
// carica la prima pagina (viene eseguito al load)
caricaPaginaCorrente();
// Funzione che carica il video. Viene chiamato nell'handler onClick dei pulsanti
// L'id del pulsante che ha chiamato la funzione è nell'argomento
// Le dichiarazioni dei due handlers diventano



function testiBubbleDue() {
  document.getElementById("bubble").innerHTML = data[paginaCorrente].secondoBubble;
}
function testiBubbleTre() {
 document.getElementById("bubble").innerHTML = data[paginaCorrente].terzoBubble;
}
function testiBubbleQuattro() {
 document.getElementById("bubble").innerHTML = data[paginaCorrente].quartoBubble;
}




function changeVideo(pulsante) {
  console.log(pulsante);
  if (pulsante == "button_left") {
    sorgente.setAttribute("src", data[paginaCorrente].videoSinistra);
	document.getElementById("button_right").disabled=true;
	document.getElementById("bubble").innerHTML = data[paginaCorrente].reactionSinistra;
	window.setTimeout(change, 6000);
  } else if (pulsante == "button_right") {
    sorgente.setAttribute("src", data[paginaCorrente].videoDestra);
	document.getElementById("button_left").disabled=true;
	document.getElementById("bubble").innerHTML = data[paginaCorrente].reactionDestra;
	window.setTimeout(change, 6000);
  } else {
    alert(
      "Questo non può accadere. Controlla (o dici di controllare) il codice! :)"
    );
  }
}
// Chiamato automaticamente alla fine del video,
// carica la pagina successiva
// NON funziona perché il video è in loop, quindi non finisce :)
// La ditta consiglia di caricare la nuova pagina con un timer che si fa partire in changeVideo() sopra
// ie: si cambia il sorgente del video e immediatamente dopo
// window.setTimeout(change, 2000);
// Sostituite i 2 secondi con il tempo che volete che sia
function change() {
  paginaCorrente += 1;
  caricaPaginaCorrente();
}

