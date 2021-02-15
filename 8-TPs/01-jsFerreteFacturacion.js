

		//LUCAS ALTAMIRANO TP NUMERO 1  "FERRE FACTURACION"



/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 



{
	var precioUno
	var precioDos
	var precioTres
	var sumafinal


	precioUno=document.getElementById('txtIdPrecioUno'). value;
	precioDos=document.getElementById('txtIdPrecioDos'). value;
	precioTres=document.getElementById('txtIdPrecioTres'). value;

	precioUno=parseFloat	(precioUno)
	precioDos=parseFloat	(precioDos)
	precioTres=parseFloat	(precioTres)

	

	sumafinal=precioUno + precioDos + precioTres
	alert("la suma de los 3 productos es :" +sumafinal);

}
function Promedio () 
{
	
	var precioUno
	var precioDos
	var precioTres
	var promediofinal


	precioUno=document.getElementById('txtIdPrecioUno'). value;
	precioDos=document.getElementById('txtIdPrecioDos'). value;
	precioTres=document.getElementById('txtIdPrecioTres'). value;

	precioUno=parseFloat	(precioUno)
	precioDos=parseFloat	(precioDos	)
	precioTres=parseFloat	(precioTres	)

	
	sumafinal=precioUno + precioDos + precioTres
	promediofinal	= sumafinal / 3
	alert("el  promedio de los 3 productos es :" +promediofinal);


}
function PrecioFinal () 
{
	var precioUno
	var precioDos
	var precioTres
	var precioFinal


	precioUno=document.getElementById('txtIdPrecioUno'). value;
	precioDos=document.getElementById('txtIdPrecioDos'). value;
	precioTres=document.getElementById('txtIdPrecioTres'). value;

	precioUno=parseFloat	(precioUno)
	precioDos=parseFloat	(precioDos	)
	precioTres=parseFloat	(precioTres	)

	sumafinal=precioUno + precioDos + precioTres
	precioFinal=sumafinal+ (sumafinal*0.21)

	alert("Su Precio Final con el iva incluido  es: $ " +precioFinal+ " Muchas gracias. ")

}	