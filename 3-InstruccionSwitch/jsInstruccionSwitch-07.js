

  // LUCAS ALTAMIRANO EJERCICIO SWITCH 7 

function mostrar()
{
	var destinoIngresado 

	destinoIngresado=document.getElementById('txtIdDestino').value;

	switch(destinoIngresado)
	{ 	
		case"Bariloche":
			alert("al oeste del pais")
			break;

		case"Cataratas":
			alert("al norte del pais")
			break;

		case"Mar del plata":
			alert("al este del pais")
			break;

		case"Ushuaia":
			alert("al sur del pais")
			break;


	}

}//FIN DE LA FUNCIÓN