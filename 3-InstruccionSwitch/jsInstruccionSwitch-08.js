
// LUCAS ALTAMIRANO EJER: SWITCH 8

function mostrar()
{

	var destinoIngresado 

	destinoIngresado=document.getElementById('txtIdDestino').value;

	switch(destinoIngresado)
	{ 	
		case"Bariloche":
		case"Ushuaia":
			alert("FRIO")
			break;

		/*case"Cataratas":
		case"Mar del plata":   // otra   solucion
			alert("CALOR")
			break;
			*/
		default:
			alert("CALOR")		// otra solucion mandando por default
			break;
 

	}

}//FIN DE LA FUNCIÓ