/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	var nombreIngresado;
	var edadIngresada;
	
	
	nombreIngresado=document.getElementById('txtIdNombre').value

	edadIngresada= document.getElementById('txtIdEdad').value

	alert(" usted se llama "+nombreIngresado+ " y tiene " +edadIngresada+ " años ");
}

/*  Lucas Javier Altamirano */