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
	terzoBubble:"Cosa preferirebbe mangiare D011yX?",
	quartoBubble:"Cosa preferirebbe mangiare D011yX?",
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
	primoBubble:"Oh nooo, c\'\u00E8 un lupo affamato di pixel!",
	secondoBubble:"Presto nascondi D011yX",
	terzoBubble:"Presto nascondi D011yX",
	quartoBubble:"Presto nascondi D011yX",
	reactionSinistra:"Uhuh, scelta interessante, fortuna che \u00E8 2D",
	reactionDestra:"Bravo, d\'altronde questo lupo \u00E8 scemo ",
  },
  {
    domanda: "Pulisci D011yX",
    rispostaSinistra: "Lava",
    rispostaDestra: "Tosa",
	video: "video/scheda03.mp4",
	videoSinistra: "video/detersivo.mp4",
    videoDestra: "video/rasoio.mp4",
	primoBubble:"1",
	secondoBubble:"2",
	terzoBubble:"3",
	quartoBubble:"alza il culo dalla sedia",
	reactionSinistra:"Scemo, non lo sai che la lana si lava in acqua fredda?",
	reactionDestra:"Oh bel lavoro! *Ironico* ",
  },
   {
    domanda: "Aiuta D011yX",
    rispostaSinistra: "Veliero",
    rispostaDestra: "Zattera",
	video: "video/scheda04.mp4",
	videoSinistra: "video/veliero.mp4",
    videoDestra: "video/zattera.mp4",
	primoBubble:"D011yX vuole cambiare sponda,scegli il mezzo adatto ",
	secondoBubble:"2",
	terzoBubble:"3",
	quartoBubble:"4",
	reactionSinistra:"Ahrrrrr! Per tutti i bucanieri! Un lupo di mare! ",
	reactionDestra:"chi sceglierebbe una zattera?",
  },
  {
    domanda: "Quante D011y ci sono?",
    rispostaSinistra: "Trentadue",
    rispostaDestra: "Uno",
	video: "video/scheda05.mp4",
	videoSinistra: "video/trentadue.mp4",
    videoDestra: "video/zattera.mp4",
	primoBubble:"Per l’occasione ho generato un paio di cloni, vediamo se sai contare.",
	secondoBubble:"2",
	terzoBubble:"3",
	quartoBubble:"4",
	reactionSinistra:"Pare di no...ma ti vengo incontro",
	reactionDestra:"destra",
  },
];
// inizializza la pagina corrente (viene caricata sotto)
var paginaCorrente = 0;
var sorgente = document.getElementById("source");

//variabili del timer
var due;
var tre;
var quattro;


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
  due = setTimeout(testiBubbleDue, 3000);
  tre = setTimeout(testiBubbleTre, 6000);
  quattro = setTimeout(testiBubbleQuattro, 9000);
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
	window.setTimeout(change, 5000);
	stop();
	
  } else if (pulsante == "button_right") {
    sorgente.setAttribute("src", data[paginaCorrente].videoDestra);
	document.getElementById("button_left").disabled=true;
	document.getElementById("bubble").innerHTML = data[paginaCorrente].reactionDestra;
	window.setTimeout(change, 5000);
	stop();
	
  } else {
    alert(
      "Questo non può accadere. Controlla (o dici di controllare) il codice! :)"
    );
  }
}
 
 function stop() {
  clearTimeout(due);
  clearTimeout(tre);
 clearTimeout(quattro);
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



