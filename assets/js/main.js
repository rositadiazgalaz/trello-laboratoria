var arrListas=[];
var arrTarjetas = [];

function Listas(nombreLista,id){
	this.nombreLista=nombreLista;
	this.id = id;
}
function Tarjetas(texto,id,lista){
	this.texto = texto;
	this.id = id;
	this.lista = lista;
}
	var cont = document.getElementsByClassName("trello-inicia")[0];
	var primerEnlace = document.createElement("a");
	var textpEnlace = document.createTextNode("Añadir lista");
	primerEnlace.appendChild(textpEnlace);
	primerEnlace.setAttribute("class","agrega-lista");
	cont.appendChild(primerEnlace);

function agregarListas(){
	var miboton = document.getElementsByClassName("agrega-lista")[0];

	miboton.addEventListener("click", function(){
		var mispan = document.createElement("span");
		mispan.setAttribute("class","primer-span");
		mispan.setAttribute("id",arrListas.length+1);

		var miTextArea = document.createElement("textarea");
		miTextArea.setAttribute("class","primer-textarea");
		miTextArea.setAttribute("id","listas-textarea");
		miTextArea.setAttribute("placeholder","Añadir una lista");

		var guardarBoton = document.createElement("a");
		var textBoton = document.createTextNode("GUARDAR");
		guardarBoton.appendChild(textBoton);
		guardarBoton.setAttribute("class","boton-guardar");
		guardarBoton.setAttribute("id","guardar");

		var salir = document.createElement("i");
		salir.setAttribute("class", "fa fa-times");
		salir.setAttribute("arial-hidden", "true");
		salir.setAttribute("id", "salir-uno");

		mispan.appendChild(miTextArea);
		mispan.appendChild(guardarBoton);
		mispan.appendChild(salir);

		cont.appendChild(mispan);
		var moverLista=cont.removeChild(trello-inicia);

		var pulsarboton = document.getElementById("guardar");
		pulsarboton.addEventListener("click", tarjetasLista);


	})
}

function tarjetasLista(){
	var mispan = document.getElementById(arrListas.length+1);
	var mispanCont=document.getElementsByClassName("primer-span")[0];
	var miinput=document.getElementById("listas-textarea").value;

	var contNombreLista = document.createElement("span");
	var textnombreLista = document.createTextNode(el Input);
	
}
agregarListas();