var indice=[];
window.addEventListener("load",function(){

	var chat=document.getElementById("chat");
	var mensajes =document.getElementById("mensajes");
	

	mensajes.addEventListener("keyup", function(e){
	e.preventDefault();
		var teclaEnter = e.keyCode;
			if (teclaEnter==13) {
				publicacion();
			}
	});

	function publicacion(){
		var contenedor=document.createElement("contenedor");
		var divPubVerde=document.createElement("div");
		var pTexto=document.createElement("p");
		var divHora=document.createElement("div");
		var horaPub = fechaPubicacion();

		pTexto.textContent=mensajes.value;
		divHora.textContent=horaPub;
		
		contenedor.classList.add("w-message","w-message-out");
		divPubVerde.classList.add("w-message-text");
		divHora.classList.add("time");

		chat.appendChild(contenedor);
		contenedor.appendChild(divPubVerde);
		divPubVerde.appendChild(pTexto);
		divPubVerde.appendChild(divHora);	
	}

		function fechaPubicacion(){
			var fecha= new Date();
			var hora= fecha.getHours();
			var minuto=fecha.getMinutes();
			var segundo=fecha.getSeconds();
			var horaPub= hora + ":" + minuto+ ":" + segundo;
			return horaPub;
		}

	// function cambioImg(){
	// 	imagen.src=this.children[]

	// 	mensajes.innerHTML=indice;
	// }


});


