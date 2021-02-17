/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	var contador;
	var respuesta;
	var sumaPositivos;
	var multiplicacionNegativos;
	contador=0;
	sumaPositivos=0;
	multiplicacionNegativos=1;
	respuesta='si';


	txtIdSuma.value=sumaPositivos;
	txtIdProducto.value=multiplicacionNegativos;

}//FIN DE LA FUNCIÓN

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
