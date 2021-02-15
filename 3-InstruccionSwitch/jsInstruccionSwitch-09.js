
// ALTAMIRANO LUCAS EJERCIO 3 IF REPASO DEL SABADO


function mostrar()
{
	var estacionIngresada 
	var destinoIngresado
	var precioBase
	var porcentaje
	var precioFinal
	var mensaje

	estacionIngresada=document.getElementById('txtIdEstacion').value;
	destinoIngresado=document.getElementById("txtIdDestino").value;

	precioBase=15000
	precioBase=parseInt(precioBase)

	

	 
	if (estacionIngresada == "Invierno")
	{
			if (destinoIngresado=="Bariloche")
			{
			porcentaje = +20
			}
			else
			{
				if (destinoIngresado== "Mar del plata" ) 
		 		{
		 		porcentaje = -20
				}
				else
					{
		 			porcentaje = -10
					}
			}		
	}
	

	if (estacionIngresada == "Verano")
	{
			if (destinoIngresado=="Bariloche")
			{
			porcentaje =-20
			}
			else
			{
				if (destinoIngresado== "Mar del plata" ) 
		 		{
		 		porcentaje = +20
				}
				else
					{
		 			porcentaje = +10
					}
			}		
	}
	if (estacionIngresada == "Otoño" || estacionIngresada == "Primavera")
	{
			if (destinoIngresado=="Bariloche")
			{
			porcentaje = +10
			}
			else
			{
				if (destinoIngresado== "Mar del plata" || destinoIngresado=="Cataratas" ) 
		 		{
		 		porcentaje = +10
				}
				else 
		 			{
		 			porcentaje = 0
		 			}
					
			}		
	}


	precioFinal=precioBase+(precioBase*porcentaje/100)

	mensaje = "Su precio final es de $" + precioFinal + ""
	 	 	 	
	alert(mensaje)
}