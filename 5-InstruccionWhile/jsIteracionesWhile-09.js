


//ALTAMIRANO LUCAS EJERCICIO WHILE NUMERO 9
//while 09(el menor de los pares y el mayor de los negativos ...solo si hay)

function mostrar()

{
	var	numeroIngresado
	var	numeroMayorNegativo
	var	numeroMenorPares
	var respuesta
	var banderaDelMayor
	var banderaDelMenor


	banderaDelMayor=0;
	banderaDelMenor=0;
	respuesta="si";

	while(respuesta=="si")
	{
		numeroIngresado =  parseInt(prompt("Ingrese un numero"));
		
		while(isNaN(numeroIngresado)==true)
		{
			numeroIngresado=prompt("EROR :Ingrese un numero");
			numeroIngresado=parseInt(numeroIngresado)

		}


		if (numeroIngresado<0) 

		{

			if(banderaDelMayor = 0 || numeroIngresado <numeroMayorNegativo)
				{
							numeroMayorNegativo = numeroIngresado;
					
							
							banderaDelMayor = 1; 
				}else
				{

				}
		}
		if (numeroIngresado%2==0)
		 {


			if(banderaDelMenor = 0 || numeroIngresado < numeroMenorPares)
						{
							numeroMenorPares = numeroIngresado;
						
							banderaDelMenor = 1; 
						}else
						{

						}


		}



		
		respuesta=prompt("desea ingresar otro numero ?")
	}

		console.log("el numero par minimo es igual" +numeroMenorPares);
		console.log("el numero mayor de los negativos " +numeroMayorNegativo);
}//FIN DE LA FUNCIÓN
	
