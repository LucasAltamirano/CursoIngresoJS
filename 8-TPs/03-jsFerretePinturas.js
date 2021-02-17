/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	
	var Fahrenheit
	var Centigrados

	Fahrenheit=parseFloat(document.getElementById('txtIdTemperatura').value);
	Centigrados=parseFloat(Centigrados)

	Centigrados =(Fahrenheit -32 )/1.8

	alert(" "+ Fahrenheit+ " grados  es igual a " +Centigrados+ " Fahrenheit. ")

}

function CentigradosFahrenheit () 
{
 var grados
 var	CentigradosFahrenheit

 CentigradosFahrenheit=parseFloat(CentigradosFahrenheit)

 grados=parseFloat(document.getElementById('txtIdTemperatura').value);

 CentigradosFahrenheit = (grados * 1.8 )+ 32

 alert(" "+ grados+ " grados  es igual a " +CentigradosFahrenheit+ " Fahrenheit. ")

	
}
