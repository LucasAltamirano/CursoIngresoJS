

function mostrar()

{
	var numero 
	var acumulador
	var	promedio
	var	i
	i=0;
	acumulador=0;


	while(i<5)
	{

		numero=parseInt(prompt("Ingrese un numero"));

		acumulador =acumulador + numero;
		i=i +1
	}

	promedio=acumulador / 5



	document.getElementById('txtIdSuma').value=acumulador

	document.getElementById('txtIdPromedio').value=promedio
}

	/*
	var numeroUno=		parseInt(prompt("Ingresar el 1er numero"));
	var numeroDos=		parseInt(prompt("Ingrese el 2do numero"));
	var numeroTres=		parseInt(prompt("Ingresar el 3er numero"));
	var numeroCuatro=	parseInt(prompt("Ingresar el 4to numero"));
	var numeroCinco=	parseInt(prompt("Ingresar el 5to numero"));

	var suma
	var	promedio

	suma= numeroUno+numeroDos+numeroTres+numeroCuatro+numeroCinco

	promedio=suma / 5

		*/

	
//FIN DE LA FUNCIÓN