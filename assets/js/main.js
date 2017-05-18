var arr=[];
var arrTarjetas = [];

function Lista(nombreLista,id){
	this.nombreLista=nombreLista;
	this.id = id;
}
function Tarjetas(texto,id,lista){
	this.texto = texto;
	this.id = id;
	this.lista = lista;
}