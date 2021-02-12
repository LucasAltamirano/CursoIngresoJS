
// ALTAMIRANO LUCAS EJERCICIO 4  switch
function mostrar()
{
	//tomo el mes
	var mesDelAnio 

	mesDelAnio=document.getElementById('txtIdMes').value

	switch(mesDelAnio)
	{
		case"Febrero":
			alert("este mes tiene 28 dias ")
			break;
		case"Enero":
		case"Marzo":
		case"Mayo":
		case"Julio":
		case"Agosto":
		case"Octubre":
		case"Diciembre":
			alert("este mes tiene 31 dias")
			break;
		default:
			alert("este mes tiene 30 dias ")

	}
}
