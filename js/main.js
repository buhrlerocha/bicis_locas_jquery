
function validateForm(){
	//var password = document.getElementById("input-password");
	var password =$("#input-password").val();
	//var nombre = document.getElementById("name");
	var nombre =$("#name").val();
	//var apellido = document.getElementById("lastname");
	var apellido =$("#lastname").val();
	//var email = document.getElementById("input-email").value;
	var email = $("#input-email").val();
	//var indice = document.getElementById("selector").selectedIndex;
	var indice =$("#selector").val();
	// validar datos


// nombre
	if( nombre == null || nombre.length == 0 || /^\s+$/.test(nombre) ) {
		//alert("No debe dejar el campo Nombre en blanco");
		//var containerAlertNombre = document.getElementsByClassName ("name-container")[0];
			//var containerAlertNombre =$(".name-container");
			//var contenedorNombreVacio = $("span");
		
		//$(".spam").attr("class","texto");
		//var nodoNombrevacio =("No debe dejar el campo Nombre en blanco");
		
		//contenedorNombrevacio.appendChild(nodoNombrevacio);
		//$(contenedorNombrevacio).append(nodoNombrevacio);
		//containerAlertNombre.appendChild(contenedorNombrevacio);
      		 // $(containerAlertNombre).append(contenedorNombreVacio);
       		 //$("span").addClass("texto");
       		// $(".texto").html("No debe dejar el campo Nombre en blanco");

       	var mensaje = "No debe dejar el campo Nombre en blanco";
       	$("#name").parent().append("<span>" + mensaje + "</span>");

		return false;
	}
 	else if(/^^[a-zA-Z]*$/.test(nombre) == false){
 		// ("Nombre no valido, ingresar solo letras");
 		/*var containerAlertNombre = document.getElementsByClassName ("name-container")[0];
		var contenedorNombrevacio = document.createElement("span");
		var nodoNombrevacio = document.createTextNode("Nombre no valido, ingresar solo letras");
		contenedorNombrevacio.appendChild(nodoNombrevacio);
		containerAlertNombre.appendChild(contenedorNombrevacio);*/

			//var containerAlertNombre =$(".name-container");
			//var contenedorNombreVacio = $("span");
		var mensaje = "Nombre no valido, ingresar solo letras";
		$("#name").parent().append("<span>" + mensaje + "</span>");
     	  /* $(containerAlertNombre).append(contenedorNombreVacio);
        $("span").addClass("texto");
        $(".texto").html("Nombre no valido, ingresar solo letras");*/
 		return true;
 	}    
 	else if(nombre.charAt(0).toUpperCase()!== nombre.charAt(0)){
 		//alert ("Nombre no valido, la primera letra debe ser en mayúscula");
 		/*var containerAlertNombre = document.getElementsByClassName ("name-container")[0];
		var contenedorNombrevacio = document.createElement("span");
		var nodoNombrevacio = document.createTextNode("Nombre no valido, la primera letra debe ser en mayúscula");
		contenedorNombrevacio.appendChild(nodoNombrevacio);
		containerAlertNombre.appendChild(contenedorNombrevacio);*/

		//var containerAlertNombre =$(".name-container");
		//var contenedorNombreVacio = $("span");
		
       /* $(containerAlertNombre).append(contenedorNombreVacio);
        $("span").addClass("texto");
        $(".texto").html("Nombre no valido, la primera letra debe ser en mayúscula");*/
        var mensaje = "Nombre no valido, la primera letra debe ser en mayúscula";
        $("#name").parent().append("<span>"+ mensaje + "</span>");
 		return false;
 	}

// apellido
	if( apellido == null || apellido.length == 0 || /^\s+$/.test(apellido) ) {
		//alert("No debe dejar el campo Apellido en blanco");
		/*var containerAlertNombre = document.getElementsByClassName ("lastname-container")[0];
		var contenedorNombrevacio = document.createElement("span");
		var nodoNombrevacio = document.createTextNode("No debe dejar el campo Apellido en blanco");
		contenedorNombrevacio.appendChild(nodoNombrevacio);
		containerAlertNombre.appendChild(contenedorNombrevacio);*/
		var mensaje = "No debe dejar el campo Apellido en blanco";
        $("#lastname").parent().append("<span>"+ mensaje + "</span>");
		return false;
	}
	else if(/^^[a-zA-Z]*$/.test(apellido) == false){
 		//alert ("Apellido no valido, ingresar solo letras");
 		/*var containerAlertNombre = document.getElementsByClassName ("lastname-container")[0];
		var contenedorNombrevacio = document.createElement("span");
		var nodoNombrevacio = document.createTextNode("Apellido no valido, ingresar solo letras");
		contenedorNombrevacio.appendChild(nodoNombrevacio);
		containerAlertNombre.appendChild(contenedorNombrevacio);*/
		var mensaje = "Apellido no valido, ingresar solo letras";
        $("#lastname").parent().append("<span>"+ mensaje + "</span>");
 		return true;
 	}
    else if(apellido.charAt(0).toUpperCase()!== apellido.charAt(0)){
 		//alert ("Apellido no valido, la primera letra debe ser en mayúscula");
 		/*var containerAlertNombre = document.getElementsByClassName ("lastname-container")[0];
		var contenedorNombrevacio = document.createElement("span");
		var nodoNombrevacio = document.createTextNode("Apellido no valido, la primera letra debe ser en mayúscula");
		contenedorNombrevacio.appendChild(nodoNombrevacio);
		containerAlertNombre.appendChild(contenedorNombrevacio);*/

		var mensaje = "Apellido no valido, la primera letra debe ser en mayúscula";
        $("#lastname").parent().append("<span>"+ mensaje + "</span>");
 		return false;
 	}
    
// email
	if( email === null || email.length === 0 || /^\s+$/.test(email) ) {
		//alert("No debe dejar el campo Mail en blanco");
		/*var containerAlertNombre = document.getElementsByClassName ("email-container")[0];
		var contenedorNombrevacio = document.createElement("span");
		var nodoNombrevacio = document.createTextNode("No debe dejar el campo Mail en blanco");
		contenedorNombrevacio.appendChild(nodoNombrevacio);
		containerAlertNombre.appendChild(contenedorNombrevacio);*/

		var mensaje = "No debe dejar el campo Mail en blanco";
        $("#input-email").parent().append("<span>"+ mensaje + "</span>");
		return false;
	}
	var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	if( !re.test(email) ) {
		//alert("Tu correo electrónico no es válido");
		/*var containerAlertNombre = document.getElementsByClassName ("email-container")[0];
		var contenedorNombrevacio = document.createElement("span");
		var nodoNombrevacio = document.createTextNode("Tu correo electrónico no es válido");
		contenedorNombrevacio.appendChild(nodoNombrevacio);
		containerAlertNombre.appendChild(contenedorNombrevacio);*/

		var mensaje = "Tu correo electrónico no es válido";
        $("#input-email").parent().append("<span>"+ mensaje + "</span>");
		return false;
	}

	/* cantiadad numeros contraseña */
	function limitada(){
		if (password.length < 6){
			//alert("tu contraseña no es valida");
			/*var containerAlertNombre = document.getElementsByClassName ("form-group")[0];
			var contenedorNombrevacio = document.createElement("span");
			var nodoNombrevacio = document.createTextNode("La contraseña debe tener al menos 6 caracteres");
			contenedorNombrevacio.appendChild(nodoNombrevacio);
			containerAlertNombre.appendChild(contenedorNombrevacio);*/
           
            var mensaje = "La contraseña debe tener al menos 6 caracteres";
            $("#input-password").parent().append("<span>"+ mensaje + "</span>");
			return false;
		} else if (password.value=="password"){
			//alert("tu contraseña no es valida");
			/*var containerAlertNombre = document.getElementsByClassName ("form-group")[0];
			var contenedorNombrevacio = document.createElement("span");
			var nodoNombrevacio = document.createTextNode("tu contraseña no es valida");
			contenedorNombrevacio.appendChild(nodoNombrevacio);
			containerAlertNombre.appendChild(contenedorNombrevacio);*/

			var mensaje = "tu contraseña no es valida";
            $("#input-password").parent().append("<span>"+ mensaje + "</span>");
			return false;	
		} else if (password.value=="123456"){
			//alert("tu contraseña no es valida");
			/*var containerAlertNombre = document.getElementsByClassName ("form-group")[0];
			var contenedorNombrevacio = document.createElement("span");
			var nodoNombrevacio = document.createTextNode("tu contraseña no es valida");
			contenedorNombrevacio.appendChild(nodoNombrevacio);
			containerAlertNombre.appendChild(contenedorNombrevacio);*/

			var mensaje = "tu contraseña no es valida";
            $("#input-password").parent().append("<span>"+ mensaje + "</span>");
			return false;
		} else if (password.value=="098754"){
			//alert("tu contraseña no es valida");
			/*var containerAlertNombre = document.getElementsByClassName ("form-group")[0];
			var contenedorNombrevacio = document.createElement("span");
			var nodoNombrevacio = document.createTextNode("tu contraseña no es valida");
			contenedorNombrevacio.appendChild(nodoNombrevacio);
			containerAlertNombre.appendChild(contenedorNombrevacio);*/
			var mensaje = "tu contraseña no es valida";
            $("#input-password").parent().append("<span>"+ mensaje + "</span>");
			return false;
		}else{
			return true;
		}
	}
	limitada();

/* validar una opcion de la lista */

function seleccion(){
	if (indice == null || indice == 0){
	//alert("No haz seleccionado una opción, elige una");
		/*var containerAlertNombre = document.getElementsByClassName ("form-group")[0];
		var contenedorNombrevacio = document.createElement("span");
		var nodoNombrevacio = document.createTextNode("No haz seleccionado una opción, elige una");
		contenedorNombrevacio.appendChild(nodoNombrevacio);
		containerAlertNombre.appendChild(contenedorNombrevacio);*/

		var mensaje = "tu contraseña no es valida";
        $("#selector").parent().append("<span>"+ mensaje + "</span>");
		return false;
	}
}
seleccion();
}
