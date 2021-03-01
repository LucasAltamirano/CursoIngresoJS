function mostrar()
{

	var notaIngresada;
	var sexoIngresado;
	var sumadorNotas;
	var promedio;
	var contadorWhile;
	var notaMasBaja;
	var sexoNotaMasBaja;
	var contadorVarones6


	contadorVarones6=0;

	banderaNotaMasBaja=0;
	contadorWhile=0;
	sumadorNotas=0;

	while(contadorWhile<5)

	{

		notaIngresada=prompt("Ingrese la nota en valor numerico");
		notaIngresada=parseFloat(notaIngresada);

		while(isNaN(notaIngresada)== true || notaIngresada < 1 || notaIngresada > 10 )
		{
			notaIngresada=prompt(" E# Ingrese la nota en valor numerico");
			notaIngresada=parseFloat(notaIngresada);
		}

		sexoIngresado=prompt("Ingrese un sexo valido");

		while(isNaN(sexoIngresado)==false || sexoIngresado!="f" && sexoIngresado != "m")
		{
			sexoIngresado=prompt("E# Ingrese un sexo valido");
		}

			if (sexoIngresado=="m") 
				{
					if (notaIngresada>5.99)
				 	{
			 		contadorVarones6=contadorVarones6+1;
				 	}
				}

			if(banderaNotaMasBaja == 0 || notaIngresada < notaMasBaja)
						{
							notaMasBaja = notaIngresada;
							sexoNotaMasBaja = sexoIngresado;
							
							banderaNotaMasBaja = 1; 
						}

					sumadorNotas=sumadorNotas+notaIngresada;
					contadorWhile=contadorWhile+1;

	}

		promedio=sumadorNotas/contadorWhile;

			console.log("el promedio de las notas totales es "+promedio);
			console.log("la nota mas baja es " +notaMasBaja+ " con sexo " +sexoNotaMasBaja);
			console.log("la cantidad de varones con nota mayor a 6 es " +contadorVarones6);

}
