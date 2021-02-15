
	/*Al ingresar una edad menor a 18 años y un estado civil distinto a "Soltero", 
NO HACER NADA,
pero si no es asi, y es soltero y no es menor, 
mostrar el siguiente mensaje: 'Es soltero y no es menor.'*/
function mostrar()
{
	
	var edad
	var estado

	edad=parseInt(document.getElementById('txtIdEdad').value); 
	estado=document.getElementById('estadoCivil').value;

	if ( edad>17  && estado =="Soltero") 
	{
		alert("Es mayor de edad y es soltero.");
	}

	console.log("ejecuta ")
}	








	/*
	// <18 y !=Soltero nada 
	// >18 
	
	let estado;  
	let edad; 
	
	
	edad = document.getElementById("txtIdEdad").value;
	edad = parseInt(edad); 

	estado = document.getElementById("estadoCivil").value;

	/*if(edad<18 && estado!="Soltero")
	{
		console.log("NADA")
	}
	if(edad>17 && estado=="Soltero")
	{
		alert("Es soltero y no es menor")
	}
	console.log("nada")*/

//FIN DE LA FUNCIÓN	


