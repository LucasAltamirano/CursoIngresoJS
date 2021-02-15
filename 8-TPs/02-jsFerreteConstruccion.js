
//Lucas Altamirano TP 2 FERRE CONSTRUCCION

/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
	var largo
	var	ancho
	
	var	cantidadmetros
	var	alambretotal

	largo=document.getElementById('txtIdLargo').value;
	ancho=document.getElementById('txtIdAncho').value;

	largo=largo* 2
	ancho=ancho* 2

	cantidadmetros=largo+ancho
	alambretotal=cantidadmetros*3

	alert("Se requiere un total de  "+alambretotal+" metros de alambre ") 

}
function Circulo () 
{
	var radio
	var	diametro
	var	perimetro
	var	alambretotalcir

	radio=document.getElementById('txtIdRadio').value;

	diametro=radio*2
	perimetro=diametro*3.1416

	alambretotalcir=perimetro*3

	alert("Se requiere un total de  "+alambretotalcir+" metros de alambre ")
	
}
function Materiales () 
{
	var	largo
	var	ancho
	var	metroscuadrados
	var cemento
	var	cal
	

	largo=document.getElementById('txtIdLargo').value;
	ancho=document.getElementById('txtIdAncho').value;

	metroscuadrados=largo*ancho
	cementototal= *2
	caltotal=metroscuadrados*3

	alert("Para la construccion necesitará " +cementototal+ " bolsas de cemento y " +caltotal+ " bolsas de cal" )


}

	
