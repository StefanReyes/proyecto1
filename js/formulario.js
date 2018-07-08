'use strict'
window.addEventListener('load',()=>{
	var formulario = document.querySelector("#formulario");
	var box_dashed = document.querySelector(".dashed");
	box_dashed.style.display = "none";

	formulario.addEventListener('submit',()=>{
		
		var nombre = document.querySelector("#nombre").value;
		var apellidos = document.querySelector("#apellidos").value;
		var email = document.querySelector("#email").value;
		var mensaje = document.querySelector("#mensaje").value;
		
		if(nombre.trim() == null || nombre.trim().length == 0){
			alert("El nombre es incorrecto");
			document.querySelector(".error_nombre").innerHTML = "Escriba un nombre correcto";
			document.querySelector("#nombre").style.border = "1px solid red";
			return false;
		}else{
			document.querySelector(".error_nombre").style.display="none";
			document.querySelector("#nombre").style.border = "1px solid blue";
		}

		if(apellidos.trim() == null || apellidos.trim().length == 0){
			alert("Los apellidos son incorrectos");
			document.querySelector(".error_apellidos").innerHTML = "Escriba un apellido correcto";
			document.querySelector("#apellidos").style.border = "1px solid red";
			return false;
		}else{
			document.querySelector(".error_apellidos").style.display="none";
			document.querySelector("#apellidos").style.border = "1px solid blue";
		} 

		if(email.trim() == null || email.trim().length == 0){
			alert("El email es incorrecto");
			document.querySelector(".error_email").innerHTML = "Escriba un email correcto";
			document.querySelector("#email").style.border = "1px solid red";
			return false;
		}else{
			document.querySelector(".error_email").style.display="none";
			document.querySelector("#email").style.border = "1px solid blue";
		} 

		if(mensaje.trim() == null || mensaje.trim().length == 0){
			alert("Necesita escribir un mensaje");
			document.querySelector(".error_mensaje").innerHTML = "Escriba un mensaje";
			document.querySelector("#mensaje").style.border = "1px solid red";
			return false;
		}else{
			document.querySelector(".error_mensaje").style.display="none";
			document.querySelector("#mensaje").style.border = "1px solid blue";
		}

		box_dashed.style.display = "block";

		var p_nombre = document.querySelector("#p_nombre span");
		var p_apellidos = document.querySelector("#p_apellidos span");
		var p_email = document.querySelector("#p_email span");
		var p_mensaje = document.querySelector("#p_mensaje span");

		p_nombre.innerHTML = nombre;
		p_apellidos.innerHTML = apellidos;
		p_email.innerHTML = email;
		p_mensaje.innerHTML = mensaje;

		

	});
});