var dict = {
  domandauno: "Nutri D011yX",
  rispostaFieno:"Fieno",
  rispostaMetallo: "Metallo",
  domandadue: "Nascondi D011yX",
  rispostaLampione:"Lampione",
  rispostaCespuglio: "Cespuglio",
  domandatre: "Pulisci D011yX",
  rispostaLava:"Lava",
  rispostaRasa: "Rasa",
  
};

var sorgente = document.getElementById("source");

var video ={
	videoUno: "video_nutri/scheda01.mp4",
	videoFieno:"video_nutri/fieno.mp4"
};


  document.getElementById("domanda").innerHTML = dict.domandauno;
  document.getElementById("button_left").innerHTML = dict.rispostaFieno;
  document.getElementById("button_right").innerHTML = dict.rispostaMetallo;
  sorgente.setAttribute("src", video.videoUno);
 

 function changeVideo(){
  sorgente.setAttribute("src", video.videoFieno);
  
 }
 
 function change(){
  document.getElementById("domanda").innerHTML = dict.domandadue;
  document.getElementById("button_left").innerHTML = dict.rispostaLampione;
  document.getElementById("button_right").innerHTML = dict.rispostaCespuglio;
 }