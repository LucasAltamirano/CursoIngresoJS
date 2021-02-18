/*

		ALTAMIRANO LUCAS EJERCICIO WHILE NUMERO 5


Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{	
	
var sexoIngresado;
	sexoIngresado = prompt("ingrese f ó  m .");

	while (sexoIngresado != "f" && sexoIngresado != "m")
	{

		sexoIngresado = prompt("Error. Ingrese f ó m ."); // cambiar el valor de la variable para que no se repita un bucle infinito

	}

		if (sexoIngresado == "m")
		{
		 
		document.getElementById("txtIdSexo").value= "masculino"; 
	
		} else {
		
					document.getElementById("txtIdSexo").value= "femenino"; 
				}
	
}

