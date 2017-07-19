
var pertanyaan = [
["B", "J", "H", "A", "B", "I", "B", "I"],
  ["S","O","K","A","R","N","O"],
  ["S","O","E","H","A","R","T","O"],
  ["S","B","Y"],
  ["M","E","G","A","W","A","T","I"],
  ["G","U","S","D","U","R"]
]
var random = Math.floor((Math.random()*(pertanyaan.length-1))); 

var tanya = pertanyaan[random]; 
var pertanyaanrandom = new Array(tanya.length);
var tampung = 0;


for (var i = 0; i < pertanyaanrandom.length; i++){
	pertanyaanrandom[i] = "_ ";
}

 
function printpertanyaan(){
	for (var i = 0; i < pertanyaanrandom.length; i++){
	var lebarpertanyaan = document.getElementById("lebarpertanyaan");
	var maksudpertanyaan = document.createTextNode(pertanyaanrandom[i]);
	lebarpertanyaan.appendChild(maksudpertanyaan);
	}
}


var hurufbetul = function(){
	var f = document.formula; 
	var b = f.elements["pindahhalaman"]; 
	var inputan = b.value; 
	inputan = inputan.toUpperCase();
	for (var i = 0; i < tanya.length; i++){
		if(tanya[i] === inputan){
			pertanyaanrandom[i] = inputan + " ";
			var hasil = true;
		}
	b.value = "";
	}
	
	
	var lebarpertanyaan = document.getElementById("lebarpertanyaan");
	lebarpertanyaan.innerHTML=""; 
	printpertanyaan();
	
	
	if(!hasil){
		var jawabansalah = document.getElementById("jawabansalah");
		var maksudpertanyaan = document.createTextNode(" " + inputan);
		jawabansalah.appendChild(maksudpertanyaan); 
		tampung++;
		var hangman = document.getElementById("hangman");
    hangman.src = "http://www.writteninpencil.de/Projekte/Hangman/hangman" + tampung + ".png";
	}
	
	
	var tampung1 = true;
	for (var i = 0; i < pertanyaanrandom.length; i++){
		if(pertanyaanrandom[i] === "_ "){
			tampung1 = false;
		}
	}
	if(tampung1){
		window.alert("You win!");
	}
	
	
	if(tampung === 6){
		window.alert("AAAAAAA.... AKU DI GANTUNG DEH :(");
	}
}

function init(){
	printpertanyaan();
}

window.onload = init;