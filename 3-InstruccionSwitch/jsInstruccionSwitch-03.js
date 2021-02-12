

// ALTAMIRANO LUCAS EJERCICIO 3 SWITCH

function mostrar()
{
	//tomo el mes
	var mesDelAnio 

	mesDelAnio=document.getElementById('txtIdMes').value

	switch(mesDelAnio)
	{
		case"Febrero":
		
		alert("Este mes NO tiene mas de 29 dias  ")
		break;

		default:
		alert("Este mes tiene 30 dias o mas ");

	}
	
	
	


}//FIN DE LA FUNCIÓN