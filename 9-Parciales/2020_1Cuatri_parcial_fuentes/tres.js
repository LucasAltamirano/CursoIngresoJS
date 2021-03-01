																																																																																																																																																																																																																																																																																										


	//Lucas Altamirano parcial 2020 3   // testeado ok
/*
Enunciado:
Bienvenidos.
En el ingreso a un viaje en avion nos solicitan nombre , edad, sexo("f" o "m") 
y estado civil("soltero", "casado" o "viudo")y temperatura corporal.
a) El nombre de la persona con mas temperatura.
b) Cuantos mayores de edad estan viudos
c) La cantidad de hombres que hay solteros o viudos.
d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
e) El promedio de edad entre los hombres solteros.*/

function mostrar()
{
	var nombreIngresado;
	var edadIngresada;
	var sexoIngresado;
	var estadoCivil;
	var temperaturaCorporal;

	//a
	var personaMayorTemperatura;
	var nombrePersonaMayorTemperatura;
	var BanderaPuntoA;
	//b
	var contadorSoltero;
	var contadorCasado;
	var contadorViudo;
	//c
	var contadorHombresSolteros;
	var contadorHombresViudos;
	//d
	var contadorTemperaturaSuperior38;
	//e
	var promedioEdadEntreSolteros;
	var sumadorEdadSoltero;



	continuar="si";
	//a 
	BanderaPuntoA=0;
	//b
	contadorSoltero=0;
	contadorCasado=0;
	contadorViudo=0;
	//c
	contadorHombresSolteros=0;
	contadorHombresViudos=0;
	//d
	contadorTemperaturaSuperior38=0;
	//e
	sumadorEdadSoltero=0;


	while(continuar=="si")
	{

	nombreIngresado=prompt("Ingrese su nombre  ");
		while(isNaN(nombreIngresado)==false)
			{
			nombreIngresado=prompt("E# Ingrese su nombre ");
			}

	edadIngresada = prompt(" Ingrese edad");
	edadIngresada = parseInt(edadIngresada);
		while (isNaN(edadIngresada) == true || edadIngresada <1 || edadIngresada >90)
			{
			edadIngresada = prompt("Error,  ingrese su edad");
			edadIngresada = parseInt(edadIngresada);
			}

	sexoIngresado=prompt("Ingrese su sexo f / m ");
		while(isNaN(sexoIngresado)==false || sexoIngresado !="f" && sexoIngresado!="m")
			{
			sexoIngresado=prompt("Ingrese su sexo f / m ");
			}

	estadoCivil=prompt("Ingrese su estado civl soltero casado o viudo");
		while(isNaN(estadoCivil)==false || estadoCivil !="soltero" && estadoCivil!="casado" && estadoCivil!="viudo")
			{
			estadoCivil=prompt("Ingrese su estado civl soltero casado o viudo");
			}

	temperaturaCorporal = prompt(" Ingrese temperaturaCorporal");
	temperaturaCorporal = parseFloat(temperaturaCorporal);
		while (isNaN(temperaturaCorporal) == true || temperaturaCorporal <20.00 || temperaturaCorporal > 49.00)
			{
			temperaturaCorporal = prompt("Error,  ingrese su temperaturaCorporal");
			temperaturaCorporal = parseFloat(temperaturaCorporal);
			}


//a
		if(BanderaPuntoA==0 || temperaturaCorporal > personaMayorTemperatura)

					personaMayorTemperatura=temperaturaCorporal;
					nombrePersonaMayorTemperatura=nombreIngresado;
					BanderaPuntoA=1;

//b  // c // e
 		switch(estadoCivil)
				{
				case"soltero":
					contadorSoltero=contadorSoltero+1;

					if (sexoIngresado=="m") 
					{
						contadorHombresSolteros=contadorHombresSolteros+1;
						sumadorEdadSoltero=sumadorEdadSoltero+edadIngresada;
					}															
				break;
				case"casado":		
					contadorCasado=contadorCasado+1;
				break;

				case"viudo":
					if (edadIngresada>18) 
					{
						
						contadorViudo=contadorViudo+1;
					
				
							if (sexoIngresado=="m") 
							{
								contadorHombresViudos=contadorHombresViudos+1;
							}
					}	
				break;
				}
	//d
		if (edadIngresada>60)
		 {
		 	if(temperaturaCorporal>38.00)
		 	{
		 		contadorTemperaturaSuperior38=contadorTemperaturaSuperior38+1;
		 	}
		 }


		 continuar=prompt("Desea continuar?");

	}//llave cierre while


	//a
	if(BanderaPuntoA>0)
	{
		console.log("El nombre de la persona con mas temperatura."+nombrePersonaMayorTemperatura);
	}

	//b
	if(contadorViudo>0)
	{
		console.log("mayores de edad  viudos"+contadorViudo);
	}else
	{
		console.log(" NO  hay  mayores de edad  viudos");
	}
	//c

	console.log("La cantidad de hombres que hay solteros es ;" +contadorHombresSolteros+" y viudos."+contadorHombresViudos);

	//d
	if(contadorTemperaturaSuperior38>0)
	{
		console.log("personas mayor edad con TemperaturaSuperior a 38" +contadorTemperaturaSuperior38);
	}else
	{
		console.log("no hay personas mayor edad con TemperaturaSuperior a 38")
	}

	//e 
	promedioEdadEntreSolteros=sumadorEdadSoltero/contadorHombresSolteros;

	console.log("el promedio de edad en hombres solteros" +promedioEdadEntreSolteros);



} //llave cierre funcion


