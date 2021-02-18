/*


//ALTAMIRANO LUCAS EJERCICIO WHILE NUMERO 9



Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()



{

	var edadIngresada
	var	nombreIngresado
	var	edadMinima
	var	edadMaxima
	var	banderaDelPrimero

	
	
	banderaDelPrimero="es el primero"
	respuesta="si"
	 
		edadIngresada=parseInt(prompt("Ingrese su edad"));
		nombreIngresado=prompt("Ingrese su nombre ")

	while(respuesta=="si")
	{	

	
		
		while(isNaN(edadIngresada)==true)
		{
			edadIngresada=parseInt(prompt("ERROR :Ingrese un numero"));
		}
		if(banderaDelPrimero == "es el primero")
		{
			edadMinima = edadIngresada; 
			edadMaxima = edadIngresada; 
			banderaDelPrimero = "NO, no es el primero"
		}else
		{
			if(edadIngresada<edadMinima)
			{
				edadMinima = edadIngresada; 
			}
	
			if(edadIngresada>edadMaxima)
			{		
				edadMaxima = edadIngresada;
			}

			
		}

			respuesta=prompt("desea agregar otra persona ?")

	}

			 
}















 /*
	var	numeroIngresado
	var	numeroMaximo
	var	numeroMinimo
	var respuesta
	var banderaDelPrimero

	banderaDelPrimero="es el primero"

	respuesta="si"

	while(respuesta=="si")
	{
		numeroIngresado =  parseInt(prompt("Ingrese un numero"));
		
		while(isNaN(numeroIngresado)==true)
		{
			numeroIngresado=parseInt(prompt("EROR :Ingrese un numero"));
		}
		if(banderaDelPrimero == "es el primero")
		{
			numeroMinimo = numeroIngresado; 
			numeroMaximo = numeroIngresado; 
			banderaDelPrimero = "NO, no es el primero"
		}else
		{
			if(numeroIngresado<numeroMinimo)
			{
				numeroMinimo = numeroIngresado; 
			}
	
			if(numeroIngresado>numeroMaximo)
			{
				numeroMaximo = numeroIngresado; 
			}	
		}
		
		
		respuesta=prompt("desea ingresar otro numero ?")
	}

		document.getElementById("txtIdMaximo").value = numeroMaximo;
		document.getElementById("txtIdMinimo").value = numeroMinimo; */
//FIN DE LA FUNCIÓN
	
