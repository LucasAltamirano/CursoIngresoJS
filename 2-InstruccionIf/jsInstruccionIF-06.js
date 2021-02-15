

function mostrar()



{

	var edad

	edad=parseInt(document.getElementById('txtIdEdad').value);

	if (edad>17) 

	{
		alert("La persona es un mayor de edad ");
	}else
		{
			if (edad>12 && edad<18) 
			{
				alert("La persona es adolescente");
			}else
				{
				alert("la persona es un niño");
				}

		}

		console.log(edad)
//tomo la edad 
}
