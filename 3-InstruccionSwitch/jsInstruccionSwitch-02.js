
////Lucas Altamirano ejercicio SWITCH 2

function mostrar()
{
	//tomo el mes
	var mes 

	mes=document.getElementById("txtIdMes").value;

	switch(mes)
	{
		case"Enero":
		case"Febrero":     	//NO OLVIDAR PONER LOS DOS PUNTOS Y EL BREAK;AL FINAL 
		case"Marzo":
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
			break;

			//DEFAULT LLEVA BREAK; AL FINAL 
	}


}//FIN DE LA FUNCIÓN
	//CORREGIDO 