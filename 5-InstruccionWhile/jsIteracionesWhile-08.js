/*

	//ALTAMIRANO LUCAS EJERCICIO WHILE NUMERO 8

Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/


function mostrar()
{	
	var numeroIngresado
	var	acumulador
	var respuesta
	var contador
	var banderadenegativos


	contador=0;
	sumapositivos=0;
	multiplicacionNegativos=1;
	respuesta = "si"

	banderadenegativos=1

	while(respuesta=="si")
	{
		numeroIngresado =  parseInt(prompt("Ingrese un numero"));
		
		while(isNaN(numeroIngresado)==true)
		{
			numeroIngresado=parseInt(prompt("EROR :Ingrese un numero"));
		}

		contador=contador+1	

		if (numeroIngresado>-1)
		 {
		 	sumapositivos=sumapositivos + numeroIngresado
		 }
		 else
		 {
		 	banderadenegativos=1
		 	 multiplicacionNegativos = multiplicacionNegativos * numeroIngresado; 
		 	 if (banderadenegativos==0)
			{
				multiplicacionNegativos = 0; 
			}

		 }

		respuesta=prompt("quiere ingresar otro numero?");	
		console.log(contador)
	}


	document.getElementById('txtIdSuma').value=sumapositivos
	document.getElementById('txtIdProducto').value=multiplicacionNegativos
	

}//FIN DE LA FUNCIÓN