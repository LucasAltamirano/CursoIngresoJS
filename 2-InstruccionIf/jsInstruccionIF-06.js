

function mostrar()



{//tomo la edad 
	var edad;
	edad=document.getElementById('txtIdEdad').value;
	edad=parseInt(edad);

	console.log("la edad ingresada es "+ edad);//tomo la edad  
/*
	if(edad<13)
	{
		alert("es menor  de edad")
	}
	
	if(edad<18&&edad>12)
	{
		alert("es adolescente")
	}
				
	if(edad>17)
	{
		alert("es mayor de edad")
	}
	*/  //una forma valida pero erronea

	if(edad<13)
	{
		alert("es menor de edad");
	}

		else
		{

			if(edad>18)
		}
				alert("es mayor de edad")
		}

		else
		{
			alert("es adolescente")
		}
}
//FIN DE LA FUNCIÓN
	
