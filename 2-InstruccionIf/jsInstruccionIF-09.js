

//Al presionar el Botón, mostrar un número Random del 1 al 10 inclusive*/
function mostrar()
{
	var numero
	var maximo = 10
	var minimo = 1

	numero= Math.round(Math.random()*(maximo-minimo) + minimo)

	console.log(numero);


}

