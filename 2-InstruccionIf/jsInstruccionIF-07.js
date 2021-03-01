function mostrar()
{


	//tomo la edad  
	var edad;
	var estadocivil;

	edad=parseInt(document.getElementById('txtIdEdad').value);
	estadocivil=document.getElementById("estadoCivil").value;

	if (edad<18 )
	{
		if(estadocivil!="Soltero")
			{
				alert("Es muy pequeño para NO ser soltero.");
			}
	}
		
}

	