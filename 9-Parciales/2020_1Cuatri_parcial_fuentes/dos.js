

/*

   //Altamirano parcial 2020 numero 2 // testeado ok


/*Realizar el algoritmo que permita ingresar los datos de una compra productos de la
 construccion, hasta que el cliente quiera:
Tipo validad("arena";"cal";"cemento")
Cantidad de bolsas,
Precio por bolsa (más de cero ),

Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
d) Informar el tipo con mas cantidad de bolsas.
f) El tipo mas caro*/


/*
Bienvenidos.
En el ingreso a un viaje en avion nos solicitan nombre , edad, sexo("f" o "m") y estado civil("soltero", "casado" o "viudo")y temperatura corporal.
a) El nombre de la persona con mas temperatura.
b) Cuantos mayores de edad estan viudos
c) La cantidad de hombres que hay solteros o viudos.
d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
e) El promedio de edad entre los hombres solteros.*/


function mostrar()
{
	var nombre;
	var edad;
	var sexo;
	var estadoCivil;
	var contadorMayor50;
	var	contadorMenor50;
	contadorMayor50=0;
	contadorMenor50=0;


	  edad=prompt("ingrese edad");
	  edad=parseInt(edad);

	if(edad>50)
	{
		contadorMayor50=contadorMayor50+1;
	}else
	{
		contadorMenor50=contadorMenor50+1;
	}




	console.log("los amyores de 50 son : " +contadorMayor50);
	console.log ("los menores de 50 son :"+contadorMenor50);
	


}





























/*


function mostrar()
{


			var productoIngresado;
			var	cantidadIngresada;
			var	precioIngresado;
			var precioBruto;
			var	continuar;
			var	totalaPagarConDTO;
			var	productoMayorCantidad;
			var	productoMasCaro;
			var sumadorBolsaArena;
			var sumadorBolsaCal;
			var sumadorBolsaCemento;
			var precioMaximo;
			var	banderaCaro;
			var	sumadorTotalBolsas;
			var	sumadorPrecioBruto;

			continuar="si";
			contadordeBolsas=0;
			sumadorBolsaArena=0;
			sumadorBolsaCal=0;
			sumadorBolsaCemento=0;
			sumadorTotalBolsas=0;
			banderaCaro=0;
			sumadorPrecioBruto=0;

		while (continuar=="si")
		{

				productoIngresado=prompt("Ingrese el producto arena-cal- cemento");

				while(isNaN(productoIngresado)==false || productoIngresado !="arena" && productoIngresado!="cal" && productoIngresado!="cemento")
				{
				productoIngresado=prompt("E# Ingrese el producto  nuevamente arena-cal- cemento");
				}

				cantidadIngresada=prompt("Ingrese la cantidad requerida");
				cantidadIngresada=parseInt(cantidadIngresada);

				while(isNaN(cantidadIngresada)==true || cantidadIngresada <1)
				{
				cantidadIngresada=prompt("E# Ingrese una cantidad valida");
				cantidadIngresada=parseInt(cantidadIngresada)
				}

				precioIngresado=prompt("Ingrese el precio");
				precioIngresado=parseInt(precioIngresado);

				while(isNaN(precioIngresado)==true || precioIngresado <0)
				{
					precioIngresado=prompt("E# Ingrese un precio valido");
					precioIngresado=parseInt(precioIngresado)
				}

				switch(productoIngresado)
				{
					case"arena":
								sumadorBolsaArena=sumadorBolsaArena+cantidadIngresada;
					break;
					case"cal":
								sumadorBolsaCal=sumadorBolsaCal+cantidadIngresada;
					break;
					case"cemento":
								sumadorBolsaCemento=sumadorBolsaCemento+cantidadIngresada;
					break;
				}	
					sumadorTotalBolsas=sumadorBolsaCal+sumadorBolsaCemento+sumadorBolsaArena

						if(banderaCaro == 0 || precioIngresado > precioMaximo)
							{
								precioMaximo = precioIngresado;
								productoMasCaro = productoIngresado;
								banderaCaro = 1; 
							}

					precioBruto=precioIngresado *cantidadIngresada;

					sumadorPrecioBruto=sumadorPrecioBruto+precioBruto

				continuar=prompt("desea realizar otra compra ");
		}//llave cierre  while "continuar"

				if (sumadorTotalBolsas>10) 
				{	
					if (sumadorTotalBolsas<31)
					{
						descuento=15
					}else
					{
						descuento=25
					}
				} 

				if (sumadorBolsaArena>sumadorBolsaCal) 
				{
					productoMayorCantidad="arena";
				}else
					{
						if(sumadorBolsaCal>sumadorBolsaCemento)
						{
							productoMayorCantidad="cal";
						}else
							{
							productoMayorCantidad="cemento";
							}	
					}

					totalaPagarConDTO=sumadorPrecioBruto-(sumadorPrecioBruto * +descuento/100)


				
		console.log(" Corresponde aplicar un descuento de " +descuento+"%,El importe total a pagar es: "+totalaPagarConDTO);
		console.log(" el producto con mas cantidad de bolsas es " +productoMayorCantidad);
		console.log("El productomas caro es "+productoMasCaro);

*/
/*
} // fin de ejercicio*/


