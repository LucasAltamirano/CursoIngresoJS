function mostrar()

{
	var edad

	edad=parseInt(document.getElementById('txtIdEdad').value);

	if (edad>17)
	 {
	 	alert("La persona es mayor de edad")
	 }else
	 	{
	 		alert("La persona es menor de edad")
	 	}

	
	 	console.log(edad)

}

