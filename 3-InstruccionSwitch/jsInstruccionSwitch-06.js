

// ALTAMIRANO LUCAS EJERCICIO 6 switch

function mostrar()
{
	//tomo la hora
	var horaDelDia =txtIdHora.value;

	switch(horaDelDia)
		{
		case"7":
		case"8":
		case"9":
		case"10":
		case"11":
			alert("Son horas de la mañana,Buen dia !!")
			break;
		case"12":
		case"13":
		case"14":
		case"15":
		case"16":
		case"17":
		case"18":
		case"19":
			alert("Son horas de la tarde,Buenas tardes !!")
			break;
		case"20":
		case"21":
		case"22":
		case"23":
		case"24":
			alert("Son horas de la noche,Buenas noches !!")
			break;

		default:
			alert("no existe determinada hora")

		}
}//FIN DE LA FUNCIÓN