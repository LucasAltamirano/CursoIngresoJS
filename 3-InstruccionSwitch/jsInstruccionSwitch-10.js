

// ALTAMIRANO LUCAS EJERCICIO SWITHC 10


function mostrar()
{
	var estacionIngresada
	var	destinoIngresado
	var mensaje

	estacionIngresada=document.getElementById('txtIdEstacion').value;
	destinoIngresado=document.getElementById('txtIdDestino').value;

	switch(estacionIngresada)
	{
		case"Invierno":
			switch(destinoIngresado)
			{
			case"Bariloche":
					mensaje=("Se viaja con normalidad");
					break;
			default:
					mensaje=("No esta permitido viajar");
					break;
			}
		break;
			
		case"Verano":
			switch(destinoIngresado)
			{
			case"Mar del plata":
			case"Cataratas":
					mensaje=("Se viaja con normalidad");
					break;
			default:
					mensaje=("No esta permitido viajar");
					break;
			}
		break;

		case"Primavera":
			switch(destinoIngresado)
			{
			case"Bariloche":
					mensaje=("No esta permitido viajar");
					break;
			default:
					mensaje=("Se viaja con normalidad");
					break;
			}
		break;

		case"Otoño":
					mensaje=("Se viaja con normalidad");
					break;		

	}

		console.log(destinoIngresado)
		alert(mensaje)
}

// FIN DE LA FUNCION