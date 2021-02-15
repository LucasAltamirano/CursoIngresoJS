function mostrar()
{

	var edad
	var estado

	edad=parseInt(document.getElementById('txtIdEdad').value); 
	estado=document.getElementById('estadoCivil').value;

	if ( edad<18  && estado != "Soltero") 
	{
		alert("Es muy pequeño para NO ser soltero.");
	}

	console.log("ejecuta sin mensaje")
}	
	






	/*//tomo la edad  
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
		
	*/

	