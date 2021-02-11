function mostrar()
{
	//tomo la edad  
	var edad
	var estadocivil

	edad=document.getElementById('txtIdEdad').value;
	estadocivil=document.getElementById("estadoCivil").value;

	if (edad<18 )
	{
		if(estadocivil!="soltero")
			{
				mensaje= ("Es muy pequeño para NO ser soltero.")
			}
	}
		


	alert(mensaje)

}//FIN DE LA FUNCIÓN