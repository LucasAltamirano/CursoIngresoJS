
//ALTAMIRANO LUCAS PARCIALITO 2


/*
Para un censo municipal debemos cargar los datos de TODAS las mascotas de nuestra veterinaria
necesitan saber si es un gato o un perrro u "otra cosa",(solo hay esos tres tipos)
el tipo de pelaje (corto, largo , sin pelo),
la edad de la mascota (edad validada);
el nombre (una palabra) 
la raza  (una palabra) 
el peso (peso validado) 
el estadoClinico (enfermo,internado o adopcion)
la temperaruta corporal

y nos piden informar solo si existe
a)El perro mas pesado

b)El porcentaje de enfermos sobre el total de mascotas

c)El nombre de la ultima mascota de tipo "otra cosa"
d)El animal sin pelo con menor temperatura corporal
e)Que tipo de mascota(gato o un perrro u "otra cosa") que tiene el mayor promedio de temperatura corporal
f)Sumando gatos y perros que porcentaje del total de mascotas son?
g)Que estado clinico tiene la menor cantidad de mascotas       
H)Cual es el promedio de kilos de peso de tomando todas las mascotas 
i)El nombre y raza del gato sin pelos mas liviano*/



	function mostrar()
{
	//validaciones
	 var mascotaIngresada;
	 var pelajeIngresado;
	 var edadIngresada;
	 var nombreMascota;
	 var razaIngresada;
	 var pesoIngresado;
	 var estadoClinico;
	 var temperaturaCorporalIngresada;
	 //a
	 var pesoPerroMasPesado;
	 var nombrePerroMasPesado;
	 var banderaPerroMasPesado;
	 //b
	 var contadorMascotasTotal;
	 var contadorEnfermo;
	 //c 
	 var nombreUltimoOtraCosa;
	 var banderaOtraCosa;
	 //d
	 var menorTemperaturaPuntoD;
	 var banderaPuntoD;
	 var mascotaPuntoD;
	 //e
	 var sumadorTemperaturaPerro;	
	 var sumadorTemperaturaGato;
	 var sumadorTemperaturaOtracosa;
	 var contadorGato;
	 var contadorPerro;
	 var contadorOtraCosa;
	 var promedioTempPerro;
	 var promedioTempGato;
	 var promedioTempOtracosa;
	 var mayorPromedioTemperatura;
	 //f
	 var porcentajePerroGAto;
	 //g
	var estadoClinicoMenor;
	var contadorEnfermo;
	var contadorInternado;
	var contadorAdopcion;
	
	 

	 //validacion
	continuar="si"
	//a
	banderaPerroMasPesado=0;
	//b
	contadorMascotasTotal=0;
	contadorEnfermo=0;
	//c
	banderaOtraCosa=0;
	//d
	banderaPuntoD=0;
	//e
	sumadorTemperaturaPerro=0;
	sumadorTemperaturaGato=0;
	sumadorTemperaturaOtracosa=0;
	contadorGato=0;
	contadorPerro=0;
	contadorOtraCosa=0;
	//g
	contadorEnfermo=0;
	contadorInternado=0;
	contadorAdopcion=0;


	 while(continuar=="si")
	 {

	mascotaIngresada=prompt("Ingrese mascota ");

		while(isNaN(mascotaIngresada)==false || mascotaIngresada !="perro" && mascotaIngresada!="gato" && mascotaIngresada!="otra cosa")
		{
		mascotaIngresada=prompt("E# Ingrese  nuevamente");
		}

		

	pelajeIngresado=prompt("Ingrese pelaje ");

		while(isNaN(pelajeIngresado)==false || pelajeIngresado !="corto" && pelajeIngresado!="largo" && pelajeIngresado!="sin pelo")
		{
		pelajeIngresado=prompt("E# Ingrese  pelaje nuevamente");
		}

	edadIngresada = prompt(" Ingrese edad");
	edadIngresada = parseInt(edadIngresada);
		
		while (isNaN(edadIngresada) == true || edadIngresada <1 || edadIngresada >18)
		{
		edadIngresada = prompt("Error, , ingrese su edad");
		edadIngresada = parseInt(edadIngresada);
		}

	nombreMascota=prompt("Ingrese nombre ");

		while(isNaN(nombreMascota)==false)
		{
		nombreMascota=prompt("E# Ingrese  nuevamente");
		}

	razaIngresada=prompt("Ingrese raza ");

		while(isNaN(razaIngresada)==false)
		{
		razaIngresada=prompt("E# Ingrese raza  nuevamente");
		}

	pesoIngresado = prompt(" Ingrese peso ");
	pesoIngresado = parseFloat(pesoIngresado);
		
		while (isNaN(pesoIngresado) == true || pesoIngresado <1 || pesoIngresado >100)
		{
		pesoIngresado = prompt("Error, ingrese su peso");
		pesoIngresado = parseFloat(pesoIngresado);
		}

	estadoClinico=prompt("Ingrese estado clinico ");

		while(isNaN(estadoClinico)==false || estadoClinico !="enfermo" && estadoClinico!="internado" && estadoClinico!="adopcion")
		{
		estadoClinico=prompt("E# Ingrese  nuevamente");
		}

	temperaturaCorporalIngresada = prompt(" Ingrese peso ");
	temperaturaCorporalIngresada = parseFloat(temperaturaCorporalIngresada);
		
		while (isNaN(temperaturaCorporalIngresada) == true || temperaturaCorporalIngresada <15.00|| temperaturaCorporalIngresada >45.00)
		{
		temperaturaCorporalIngresada = prompt("Error, ingrese su peso");
		temperaturaCorporalIngresada = parseFloat(temperaturaCorporalIngresada);
		}
	
		//ejercicio A

	if(mascotaIngresada=="perro")		
		{
			if(banderaPerroMasPesado == 0 || pesoIngresado > pesoPerroMasPesado)
					{
						pesoPerroMasPesado = pesoIngresado;
						nombrePerroMasPesado= nombreMascota;
							
						banderaPerroMasPesado = 1; 
					}
		}
		
			//ejercicio b 
	switch(estadoClinico)
		{
			case"enfermo":
						contadorEnfermo=contadorEnfermo+1
		}

			//ejercio c
	if(mascotaIngresada=="otra cosa")			
	{		
			nombreUltimoOtraCosa= nombreMascota;
			banderaOtraCosa=1;
	}


		 //ejercicio D

	if (pelajeIngresado=="sin pelo") 
	{

	if(banderaPuntoD == 0 || temperaturaCorporalIngresada < menorTemperaturaPuntoD)
					{
						menorTemperaturaPuntoD = temperaturaCorporalIngresada;
						mascotaPuntoD = mascotaIngresada;
						banderaPuntoD = 1;
					}
	}

//e
			switch(mascotaIngresada)
					{
					case"perro":
							sumadorTemperaturaPerro=sumadorTemperaturaPerro+temperaturaCorporalIngresada;
							contadorPerro=contadorPerro+1;	
					break;

					case"gato":		
							sumadorTemperaturaGato=sumadorTemperaturaGato+temperaturaCorporalIngresada;
							contadorGato=contadorGato+1;
					break;

					case"otra cosa":
							sumadorTemperaturaOtracosa=sumadorTemperaturaOtracosa+temperaturaCorporalIngresada;
							contadorOtraCosa=contadorOtraCosa+1;				
					break;
					}

						switch(estadoClinico)
						{
					
							case"enfermo":
										contadorEnfermo=contadorEnfermo+1;									
							break;
					
							case"internado":		
										contadorInternado=contadorInternado+1;	
							break;
					
							case"adopcion":
										contadorAdopcion=contadorAdopcion+1;												
							break;
							
						}

	



						contadorMascotas=contadorMascotas+1

		continuar=prompt("Desea agregar otra mascota?")

	}//llave cierre while

 //A//
if(banderaPerroMasPesado>0)
{
	console.log("el nombre del perro mas pesado es " +nombrePerroMasPesado);
}
else
	{
		console.log("no existe perro mas pesado")
	}

	//B


//c
if(banderaOtraCosa>0)
{
	console.log("el ultimo nombre de la ultima cosa es  " +nombreUltimoOtraCosa);
}
else
	{
		console.log=("no existe ")
	}

// d
if(banderaPuntoD>0)
{
	console.log ("la mascota  sin pelo con menor temperatura   " +mascotaPuntoD);
}
else
	{
		console.log="no existe "
	}

//e
 if (contadorPerro>0)
  {
  	promedioTempPerro=sumadorTemperaturaPerro/contadorPerro;
  }
 if (contadorGato>0)
  {
  	promedioTempGato=sumadorTemperaturaGato/contadorGato;
  }
  if (contadorOtraCosa>0)
  {
  	promedioTempOtracosa=sumadorTemperaturaOtracosa/contadorOtraCosa;
  }

  if (promedioTempPerro>promedioTempGato&&promedioTempOtracosa)
   {
   		mayorPromedioTemperatura="perro"
   }else
   {	if (promedioTempGato>promedioTempOtracosa)
		    {
		    	mayorPromedioTemperatura="gato"
		    }
		     else
		     {
		     	mayorPromedioTemperatura="otra cosa"
		     }
   	
   }



alert("Que tipo de mascotaque tiene el mayor promedio de temperatura corporal" +mayorPromedioTemperatura);
	
	//f

	if (contadorPerro !=0|| contadorGato!=0) 
	{
		porcentajePerroGAto=((contadorGato+contadorPerro)*100)/contadorMascotasTotal;
		alert("el porcentaje de perros y agtos "+porcentajePerroGAto);
	}
	else
	{
		alert("no ingresaron perros o gatos ");
	}

	//g
	if(contadorEnfermo<contadorInternado&&contadorEnfermo<contadorAdopcion)
	{
		estadoClinicoMenor="enfermo";

	}else
	{
		if (contadorInternado<contadorAdopcion) 
		{
			estadoClinicoMenor="internado";
		}else
		{
			estadoClinicoMenor="adopcion";
		}
	}


	alert("el estado Clinico Menor es : " +estadoClinicoMenor);

}//LLAVE CIERER FUNCITON

