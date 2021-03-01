

//// LUCAS ALTAMIRANO  TP  NUMERO 12 



/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y
 censos nos pide realizar una carga de datos validada
 e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y
  luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */

function ComenzarIngreso () 
{
 	//definicion de variables
 	var edadIngresada;
 	var sexoIngresado;
 	var estadoCivilIngresado;
 	var sueldoBrutoIngresado
 	var legajoIngresado
 	var nacionalidadIngresada

	var validarEdad;
	var validarSexo
	var validarEstadoCivil;
	var sueldoBrutoValidado
	var legajoValidado
	var nacionalidadVerificada

	edadIngresada = parseInt(prompt("ingrese su edad"));
	
 
	while(isNaN(edadIngresada)==true || edadIngresada > 90 || edadIngresada < 17 )
	{
		 edadIngresada = prompt("Error, ingrese su edad");
	}
	
	validarEdad = edadIngresada ;
	
	document.getElementById("txtIdEdad").value = validarEdad;


	sexoIngresado=prompt("Ingrese su sexo F para femenino y M para masculino")

	while(sexoIngresado  != "M" && sexoIngresado !="F")
	{
		sexoIngresado =prompt("Ingrese una opcion valida")
	}
	switch(sexoIngresado)
	{
		case"M":
		mensaje=("Masculino")
		break;
		case"F":
		mensaje=("Femenino")
		break;

	}


	validarSexo=mensaje
	document.getElementById("txtIdSexo").value=validarSexo;



	estadoCivilIngresado=(prompt("ingrese su estado civil indicando; 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos"));

	while(estadoCivilIngresado !="1" && estadoCivilIngresado!="2" && estadoCivilIngresado !="3" && estadoCivilIngresado !="4")

	{ 
		estadoCivilIngresado=prompt("Ingrese una opcion valida; 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos");
	}

	switch(estadoCivilIngresado)
	{
		case"1":
			mensaje=("soltero/a")
			break;
		case"2":
			mensaje=("casado/a")
			break;
		case"3":
			mensaje=("Divorciado/a;")
			break;
		case"4":
			mensaje=("Viudo/a")
			break;
	}
	validarEstadoCivil=mensaje
	
	document.getElementById("txtIdEstadoCivil").value =validarEstadoCivil


	sueldoBrutoIngresado=parseInt(prompt("Ingrese su sueldo bruto no menor a $8.000"))


	while(sueldoBrutoIngresado<8000)
	{
		sueldoBrutoIngresado=parseInt(prompt("Ingrese un monto mayor a $8000"))
	}


	sueldoBrutoValidado=sueldoBrutoIngresado 
	document.getElementById("txtIdSueldo").value=sueldoBrutoValidado;


	legajoIngresado=parseInt(prompt("Ingreso su numero de legajo n°xxxx"))

	while(legajoIngresado<1000  )
	{
		legajoIngresado=prompt("Ingrese un numero de legajo valido")
	}

 	legajoValidado= legajoIngresado
	document.getElementById("txtIdLegajo").value =legajoValidado


	nacionalidadIngresada=prompt("Ingrese su Nacionalidad:“A” para argentinos, “E” para extranjeros, “N” para nacionalizados.")

	while(nacionalidadIngresada != "A" && nacionalidadIngresada!="E" && nacionalidadIngresada !="N")
	{
		nacionalidadIngresada=prompt("Ingrese una opcion valida")
	}           

	switch(nacionalidadIngresada)
	{
		case "A":
			mensaje=("Argentino")
			break;
		case"E":
			mensaje= ("Extranjeros")  
			break;
		case  "N" :  
			mensaje= ( "Nacionalizados")
			break;   
	}

   	nacionalidadVerificada=mensaje



   	console.log("La edad ingresada es "+validarEdad+".")
   	console.log("el sexo ingresado es "+sexoIngresado+ ".")
   	console.log("el estado civil es "+validarEstadoCivil+ ".")
	console.log("el sueldo bruto  es "+sueldoBrutoValidado+ ".")
	console.log("el legajo   es "+legajoValidado+ ".")
	console.log("La nacionaidad    es "+nacionalidadVerificada+ ".")


   	document.getElementById("txtIdNacionalidad").value=nacionalidadVerificada


}

	//FIN DE LA FUNCION
