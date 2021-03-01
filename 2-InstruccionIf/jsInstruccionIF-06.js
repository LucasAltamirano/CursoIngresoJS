

function mostrar()
{
	var edadIngresada;

	edadIngresada=prompt("ingrese su edad");
	edadIngresada=parseInt(edadIngresada);

	if(edadIngresada>18)
	{
		alert("la persona es mayor");
	} else 
	{
		if (edadIngresada>13 && edadIngresada<17)
		 {
		 	alert("la persona es adolescente");
		 }	

		 else
		 {
		 	alert(" la persona es un niño");
		 }


	}








} 
