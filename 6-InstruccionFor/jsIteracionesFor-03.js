function mostrar()
{
	var	repeticiones;
	var contador;

	repeticiones = prompt("ingrese el número de repeticiones");
	repeticiones=parseInt(repeticiones);
		while(isNaN(repeticiones)==true)
		{
			repeticiones = prompt("ingrese el número de repeticiones");
	 		repeticiones=parseInt(repeticiones);
		}

	for (contador=0;contador<+repeticiones ;contador++ )
	{
		console.log("hola UTN FRA ");
	}


}//FIN DE LA FUNCIÓN