
// ALTAMIRANO LUCAS EJERCICIO 5  switch

function mostrar()
{
	//tomo la hora
	var horaDelDia 

	horaDelDia=document.getElementById('txtIdHora').value;

	switch(horaDelDia)
	{
		case"7":
		case"8":
		case"9":
		case"10":
		case"11":
			alert("Son horas de la mañana,Buen dia !!")
			break;
	}

}//FIN DE LA FUNCIÓN