
////Lucas Altamirano ejercicio SWITCH 2

function mostrar()
{
	//tomo el mes
	var mes 

	mes=document.getElementById("txtIdMes").value;

	switch(mes)
	{
		case"Enero":
		case"Febrero":
		case "Marzo":
		case"Abril":
		case"Mayo":
		case"Junio":
			alert("falta para el invierno")
			break;

		case"Julio":
		case"Agosto":
			alert("abrigate que hace frio")	
			break;
		default:
			alert("ahora empieza el calor")
	}

}//FIN DE LA FUNCIÓN
	//CORREGIDO 