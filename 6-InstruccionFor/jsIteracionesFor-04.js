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

		 if (contador==6) 
		 	{
		 		break;
		 	} 
	}



}//FIN DE LA FUNCIÓN