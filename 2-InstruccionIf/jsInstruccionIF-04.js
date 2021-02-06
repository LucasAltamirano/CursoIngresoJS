function mostrar()
{
	//tomo la edad 
	var edad;
	edad=document.getElementById('txtIdEdad').value;
	edad=parseInt(edad);

	console.log("la edad ingresada es "+ edad);
	//tomo la edad 
	/*
	Uif(edad>12 )
	{
		if(edad<18)
		{
			alert("es un adolescente con " +edad+ " años de edad");
		}
	
	{}
	*/
	if(edad<18 && edad>13)
		{
					alert("es un adolescente con " +edad+ " años de edad");
		}




	// otra variante con && es igual a 
}
	//ALTAMIRANO LUCAS 
//FIN DE LA FUNCIÓN