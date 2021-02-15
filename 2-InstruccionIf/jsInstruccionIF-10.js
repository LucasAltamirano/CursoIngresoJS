
// ejercicio IF 10 //
// Altamirano Lucas Javier //

function mostrar()
{
	var nota
	var maximo = 10
	var minimo = 1
	var	mensaje


	nota= Math.round(Math.random()*(maximo-minimo) + minimo)

	if (	nota == 9 || nota == 10)
	 {
	 	mensaje=( + nota + "  EXCELENTE " )
	 }else
	 	if(nota >4 )
	 		{
	 		mensaje=( + nota + " APROBADO ")
	 		}else
	 			{
	 				mensaje=(+ nota + " RECURSA  ")
	 			}


	 		alert(mensaje)
	console.log( mensaje );

}
