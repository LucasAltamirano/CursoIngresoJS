

//ALTAMIRANO LUCAS EJERCICIO WHILE 3 

/*

al presionar el botón pedir la CLAVE (ayuda: 750)*/
function mostrar()
{
	var claveIngresada;

	claveIngresada="UTN750"

	claveIngresada = prompt("INGRESE EL NUMERO CLAVE");

	while(claveIngresada!="UTN750")
	{
		alert("CLAVE INCORRECTA INGRESE NUEVAMENTE")
		claveIngresada=prompt("INGRESE EL NUMERO NUEVAMENTE")

	}

	alert("ACCESO EXITOSO")

}//FIN DE LA FUNCIÓN
