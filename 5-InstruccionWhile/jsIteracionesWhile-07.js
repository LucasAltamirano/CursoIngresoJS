/*0
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{	
	var numero
	var	acumulador
	var promedio
	var seguir
	var contador

	contador=0;
	acumulador=0;
	seguir = 's'

	while(seguir=='s')
	{
		numero= parseInt(prompt("Ingrese un numero"));

		seguir=prompt("quiere ingresar otro numero?")
		acumulador =acumulador + numero

		
		contador=contador+1


	}
		promedio=acumulador /contador


	

	document.getElementById('txtIdSuma').value=acumulador
	document.getElementById('txtIdPromedio').value=promedio

}//FIN DE LA FUNCIÓN