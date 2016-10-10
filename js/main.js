var indice=[];
window.addEventListener("load",function(){

	var chat=document.getElementById("chat");
	var mensajes =document.getElementById("mensajes");
	var conversacion=document.getElementById("conversacion");
	var pTexto=document.createElement("p");
	var hora=document.createElement("div");

	pTexto.setAttribute("div", "pTexto");
	hora.setAttribute("div","hora")
	hora.classList.add("time");
	conversacion.appendChild(pTexto);
	conversacion.appendChild(hora);
	chat.appendChild(conversacion);

	mensajes.addEventListener("click", function(e){
	e.preventDefault();
		var valor=parseFloat(pTexto.value);
		indice.push(valor);
		valor.value="";
		imprimir();
	});

	function imprimir(){
		var conversacion=document.getElementById("conversacion");
		var pTexto=document.getElementById("pTexto");
		var hora=document.getElementById("hora");

		mensajes.innerHTML=indice;
	}

});


