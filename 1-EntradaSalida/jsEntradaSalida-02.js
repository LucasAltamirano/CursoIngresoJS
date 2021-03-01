
/*Para un censo municipal debemos cargar los datos de TODAS
 las mascotas de nuestra veterinaria
necesitan saber si es un gato o un perrro u "otra cosa",(solo hay esos tres tipos)
el tipo de pelaje (corto, largo , sin pelo),
la edad de la mascota (edad validada);
el nombre (una palabra) 
la raza  (una palabra) 
el peso (peso validado) 
el estadoClinico (enfermo,internado o adopcion)
la temperaruta corporal y nos piden informar solo si existe
a)El perro mas pesado
banderaPerroPesado ; perroMasPesado ;
b)El porcentaje de enfermos sobre el total de mascotas
	contadorMascotasTotal ; contadorEnfermo;
c)El nombre de la ultima mascota de tipo "otra cosa"
	nombreUltimaMascotaOtraCosa; banderaUltimaMascotaOtraCosa;
d)El animal sin pelo con menor temperatura corporal
	temperaturaMinimaAnimalSinPelo ; banderaAnimalSinPelo ;
e)Que tipo de mascota(gato o un perrro u "otra cosa") 
que tiene el mayor promedio de temperatura corporal
	acumuladorTemperaturaGato ; acumuladorTemperaturaPerro ; acumuladorTemperaturaOtraCosa;
	contadorGato; contadorPerro , contadorOtraCosa ;
	promedioTemperaturaPerro ; promedioTemperaturaGato ; promedioTemperaturaOtraCosa;
f)Sumando gatos y perros que porcentaje del total de mascotas son?
	contadorGato , contadorPerro, porcentajePerroGato 
g)Que estado clinico tiene la menor cantidad de mascotas  
     contadorEnfermo , contadorAdopcion , contadorInternado ,
H)Cual es el promedio de kilos de peso de tomando todas las mascotas 
	acumuladorKilos , contadorMascotasTotal, promedioPeso.
i)El nombre y raza del gato sin pelos mas liviano
	nombreGatoSinPelosLiviano , razaGatoSinPelos, pesoGatoSinPelos 
*/
function mostrar()
{
	var tipoDeMascota;
	var pelajeIngresado;
	var edadIngresada;
	var nombreDeLaMascota;
	var razaIngresada;
	var pesoDeLaMascota;
	var estadoClinico;
	var temperaturaCorporal;

	//A
	var banderaPuntoA;
	var perroMasPesado;
	//B
	var contadorTotalDeMAscotas;
	var contadorEnfermos;
	var porcentajeDeEnfermos;
	//C
	var banderaPuntoC;
	var nombreUltimaMascotaOtraCosa;
	//D
	var animalSinPeloMenorTemperatura;
	var banderPuntoD;
	//E
	var contadorPerro;
	var contadorGato;
	var contadorOtraCosa;
	var sumadorTempPerro;
	var sumadorTempGato;
	var sumadorTempOtracosa;
	var porcentajeTempPerro;
	var porcentajeTempGato;
	var porcentajeTempOtracosa;
	var mascotaMayorPromedioTempCorp;	




	continuar="si";
	//A
	banderaPuntoA=0;
	//B
	contadorTotalDeMAscotas=0;
	contadorEnfermos=0;
	//C
	banderaPuntoC=0;
	//D
	banderPuntoD=0;
	//E
	contadorPerro=0;	 	
	contadorGato=0;
	contadorOtraCosa=0;
	sumadorTempPerro=0;
	sumadorTempGato=0;
	sumadorTempOtracosa=0;



	while(continuar=="si")

	{
	tipoDeMascota=prompt("Ingrese el tipo de mascota");

		while(isNaN(tipoDeMascota)==false || tipoDeMascota !="perro" && tipoDeMascota!="gato" && tipoDeMascota!="otra cosa")
			{
			tipoDeMascota=prompt("E# Ingrese el ptipo de mascota");
			}

	pelajeIngresado=prompt("Ingrese el tipo de pelaje");

		while(isNaN(pelajeIngresado)==false || pelajeIngresado !="corto" && pelajeIngresado!="largo" && pelajeIngresado!="sin pelo")
			{
			pelajeIngresado=prompt("E# Ingrese el ptipo de pelaje");
			}
	
	edadIngresada=prompt("Ingrese la edad valida ");
	edadIngresada=parseInt(edadIngresada);

		while(isNaN(edadIngresada)==true || edadIngresada <1 || edadIngresada >15 )
			{
			edadIngresada=prompt("E# Ingrese una edad valida");
			edadIngresada=parseInt(edadIngresada)
			}

	nombreDeLaMascota=prompt("Ingrese el nombre de mascota");

		while(isNaN(nombreDeLaMascota)==false)
			{
			nombreDeLaMascota=prompt("E# Ingrese el  nombre de mascota");
			}

	razaIngresada=prompt("Ingrese la raza de la mascota n");

		while(isNaN(razaIngresada)==false)
			{
			razaIngresada=prompt("E# Ingrese la raza de la mascota ");
			}

	pesoDeLaMascota=prompt("Ingrese una edad valida ");
	pesoDeLaMascota=parseInt(pesoDeLaMascota);

		while(isNaN(pesoDeLaMascota)==true || pesoDeLaMascota <1 || pesoDeLaMascota >15 )
			{
			pesoDeLaMascota=prompt("E# Ingrese una edad valida");
			pesoDeLaMascota=parseInt(pesoDeLaMascota)
			}		

	estadoClinico=prompt("Ingrese el tipo de mascota");

		while(isNaN(estadoClinico)==false || estadoClinico !="enfermo" && estadoClinico!="internado" && estadoClinico!="adopcion")
			{
			estadoClinico=prompt("E# Ingrese el ptipo de mascota");
			}

	temperaturaCorporal=prompt("Ingrese la edad valida ");
	temperaturaCorporal=parseFloat(temperaturaCorporal);

		while(isNaN(temperaturaCorporal)==true || temperaturaCorporal <15.00 || temperaturaCorporal >45.00 )
			{
			temperaturaCorporal=prompt("E# Ingrese una edad valida");
			temperaturaCorporal=parseFloat(temperaturaCorporal);
			}



		//A
		if (banderaPuntoA==0 || pesoDeLaMascota>perroMasPesado) 
		{
				perroMasPesado=pesoDeLaMascota
				banderaPuntoA=1;
		}

		//B
			switch(estadoClinico)
		{
			case"enfermo":

					contadorEnfermos=contadorEnfermos+1								
			break;

			case"internado":		

			break;

			case"adopcion":
					
		}

		//C
		if (tipoDeMascota=="otra cosa" ) 
		{
			nombreUltimaMascotaOtraCosa=nombreDeLaMascota;
			banderaPuntoC=1;
		}
		//D
		if (pelajeIngresado=="sin pelo") 
		{
			if (banderPuntoD==0 || temperaturaCorporal<animalSinPeloMenorTemperatura) 
			{
						animalSinPeloMenorTemperatura=temperaturaCorporal
						banderPuntoD=1;
			}
		}
		//E


		switch(tipoDeMascota)
				{
					case"perro":
							contadorPerro=contadorPerro+1;
							sumadorTempPerro=sumadorTempPerro+temperaturaCorporal;
																	
					break;
		
					case"gato":		
							contadorGato=contadorGato+1;
							sumadorTempGato=sumadorTempGato+temperaturaCorporal;

					break;
	
					case"otra cosa":
							contadorOtraCosa=contadorOtraCosa+1;
							sumadorTempOtracosa=sumadorTempOtracosa+temperaturaCorporal;
												
					break;
				}




			contadorTotalDeMAscotas=contadorTotalDeMAscotas+1;

	continuar=prompt("Desea agregar otro animal?")

	}//LLAVE CIERRE WHILE


	//A
	if(banderaPuntoA>0)
	{
		console.log("el perro mas pesado tiene kg ;" +perroMasPesado);
	}else
	{
		console.log("no se registro perro mas pesado");
	}
	//B
		porcentajeDeEnfermos=(contadorEnfermos*100)/contadorMascotasTotal;

	if (contadorEnfermos>0)

	 {
	 	console.log("el porcentaje de enfermos sobre el total es " +porcentajeDeEnfermos);
	 }else
	 {
	 	console.log(" no se registraron mascotas enfermas");
	 }

	 //c
	 if(banderaPuntoC==1)
	 {
	 	console.log("el nombre de la ultma mascota otra cosa es "+nombreUltimaMascotaOtraCosa);
	 }else
	 {
	 	console.log("no se registro ""otra cosa");
	 }
	 //D
	 if (banderPuntoD>0)
	  {
	  	console.log("el animal sin pelo con menor temperatura corporal es de grados " +animalSinPeloMenorTemperatura);

	  }else
	  {
	  	console.log("no existe registro alguno");
	  }
	  //E

	 	 if (contadorPerro>0)

	 	   {
		   	porcentajeTempPerro=sumadorTempPerro/contadorPerro;
		   }else
	   		{
	   			porcentajeTempPerro=0;
	  		}
	     if (contadorGato>0) 
		   {
		   	porcentajeTempGato=sumadorTempGato/contadorGato;
		   }else
	   		{
	   			porcentajeTempGato=0;
	   		}
	     if (contadorOtraCosa>0)
		   	{
    	   	 porcentajeTempOtracosa=sumadorTempOtracosa/contadorOtraCosa;
		   	}else
		   	{
		   		porcentajeTempOtracosa=0;
	   	 	}



	  if (porcentajeTempPerro>contadorGato&&contadorPerro>contadorOtraCosa)
	   {
	   		porcentajeTempPerro=sumadorTempPerro/contadorPerro;
	   }else
	   		{
	   			porcentajeTempPerro=0;
	  		}

	   if (contadorGato>contadorOtraCosa)
	    {
	    	porcentajeTempGato=sumadorTempGato/contadorGato;
	    }else
	    	{
	    		porcentajeTempGato=0;
	    	}


} //cierre de funcion

