
function mostrar()
{
	var ancho;
	var	largo;
	var	resultado

	



	ancho=prompt("Ingrese el ancho en metros");
	ancho=parseFloat(ancho);
	

	largo= prompt("Ingrese el largo en metros");
	largo=parseFloat(largo);

	ancho=ancho*2;
	largo=largo*2;



	resultado=largo + ancho
	console.log("el resultado es "+resultado )



}
