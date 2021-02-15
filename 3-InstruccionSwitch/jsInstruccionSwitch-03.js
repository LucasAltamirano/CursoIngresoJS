

// ALTAMIRANO LUCAS EJERCICIO 3 SWITCH

function mostrar()
{

	var mes

	mes=document.getElementById('txtIdMes').value;

	switch(mes)
	{

	case "Febrero":
		alert("este mes no tiene mas de 29 dias");
		break;

	

	default: 
		alert("Este mes tiene 30 o más días");
		break;
	}


}
	//tomo el mes
	


//FIN DE LA FUNCIÓN