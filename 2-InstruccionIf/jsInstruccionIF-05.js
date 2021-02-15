function mostrar()

{



	var edad

	edad=parseInt(document.getElementById('txtIdEdad').value);

	if ( edad <13 || edad > 17) //CONDICION QUE ES VERDADERA PARA LOS VALORES
								// DE EDAD QUE ESTAN POR DEBAJO O ENCIMA DEL RANGO 13/17 
								//(ESTOY PREGUNTANDO SI ESTOY FUERA DEL RANGO )
	 	 {								
			alert("La persona 	NO es adolescente");
		 }
	
	 	console.log(edad)


								//(PREGUNTO SINO ESTOY DENTRO DEL RANGO )

	

	//ALTAMIRANO LUCAS 
//FIN DE LA FUNCIÓN

}