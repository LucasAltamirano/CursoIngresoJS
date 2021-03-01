

/*Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
b) Del tipo con mas unidades, el promedio por compra
c) Cuántas unidades de jabones hay en total

Curso de ingreso UTN FRA*/

function mostrar()

{


	var productoIngresado;
	var precioIngresado;
	var cantidadIngresada;
	var marcaIngresada;
	var fabricanteIngresado;
	var contadorvuelta;
	var precioAlcoholMasBarato;
	var cantidadAlcoholMasBarato;
	var fabricanteAlcoholMasBarato;
	var banderaAlcoholMasBarato;
	var contadorBarbijo;
	var sumadorBarbijo;
	var contadorJabon;
	var sumadorJabon;
	var contadorAlcohol;
	var sumadorAlcohol;
	var productoMayorCantidad;
	var promedioMayorCantidad;



		contadorvuelta=0;
		banderaAlcoholMasBarato=0;
	 	contadorBarbijo=0;
		sumadorBarbijo=0;
		contadorJabon=0;
		sumadorJabon=0;
		contadorAlcohol=0;
		sumadorAlcohol=0;



	while(contadorvuelta<5)
	{	

	productoIngresado=prompt("Ingrese el producto barbijo-jabon- alcohol");

		while(isNaN(productoIngresado)==false || productoIngresado !="barato" && productoIngresado!="jabon" && productoIngresado!="alcohol")
		{
		productoIngresado=prompt("E# Ingrese el producto  nuevamente barato-jabon- alcohol");
		}

	precioIngresado=prompt("Ingrese precio requerido");
	precioIngresado=parseInt(precioIngresado);

		while(isNaN(precioIngresado)==true || precioIngresado <100 || precioIngresado >300)	
		{
		precioIngresado=prompt("E# Ingrese un precio valido");
		precioIngresado=parseInt(precioIngresado);
		}

	cantidadIngresada=prompt("Ingrese la cantidad requerida");
	cantidadIngresada=parseInt(cantidadIngresada);

		while(isNaN(cantidadIngresada)==true || cantidadIngresada <0 || cantidadIngresada > 1000)
		{
		cantidadIngresada=prompt("E# Ingrese una cantidad valida");
		cantidadIngresada=parseInt(cantidadIngresada);
		}

	marcaIngresada=prompt("Ingrese la marca");

		while(isNaN(marcaIngresada)==false )
		{
		marcaIngresada=prompt("E# Ingrese a marca  nuevamente ");
		}

	fabricanteIngresado=prompt("ingrese el fabricante  a");

		while(isNaN(fabricanteIngresado)==false )
		{
		fabricanteIngresado=prompt("E# ingrese el fabricante  ");
		}



		if(banderaAlcoholMasBarato == 0 || precioIngresado < precioAlcoholMasBarato)
					{
						precioAlcoholMasBarato = precioIngresado;
						fabricanteAlcoholMasBarato = fabricanteIngresado;
						cantidadAlcoholMasBarato = cantidadIngresada;

						banderaAlcoholMasBarato = 1;
						}

		switch(productoIngresado)
			{
				case"barbijo":
						contadorBarbijo=contadorBarbijo+1;
						sumadorBarbijo=sumadorBarbijo+cantidadIngresada;								
				break;

				case"jabon":		
						contadorAlcohol=contadorAlcohol+1
						sumadorJabon=sumadorJabon+cantidadIngresada;								

				break;

				case"alcohol":
						contadorAlcohol=contadorBarbijo+1
						sumadorAlcohol=sumadorAlcohol+cantidadIngresada;

									
				break;
			}

			if (sumadorAlcohol>sumadorBarbijo)
 			{
 		
 		 	promedioMayorCantidad=sumadorAlcohol/contadorAlcohol;
 		 	productoMayorCantidad="Alcohol";

 			}else
 				{
 		 		 if (sumadorBarbijo>sumadorJabon)
 		 		{
 		  	
 		  		promedioMayorCantidad=sumadorBarbijo/contadorBarbijo;
 		  		productoMayorCantidad="Barbijo";

 		  		}else
		 		  {
		 		  	promedioMayorCantidad=sumadorJabon/contadorJabon;
		 		  	productoMayorCantidad="Jabones";
		 		  }
			}
 		


		contadorvuelta=contadorvuelta+1
	}//LLAVE FINAL WHILE


	console.log( "el más barato de los alcohol" +precioAlcoholMasBarato+ "la cantidad" +cantidadAlcoholMasBarato +" y el fabricante "+fabricanteAlcoholMasBarato );

	
	console.log( " el producto con mayor cantidad es "+productoMayorCantidad +" con unn promedio de "+promedioMayorCantidad );

	console.log( " la cantidad total de jabon  es  " +sumadorJabon);








}// llave final ejercicio