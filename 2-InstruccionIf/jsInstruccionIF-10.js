
// ejercicio IF 10 //
// Altamirano Lucas Javier //

function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 


var notaRandom
var mensaje

notaRandom =Math.floor(Math.random() * 10) + 1;

	
if (notaRandom>8)
{
	mensaje =("La nota es " +notaRandom+ " 	excelente ");

}

else

{

	if(notaRandom<4)

	{
		mensaje =( " nota es " +notaRandom+ " vamos para la proxima " );
	}

		else
	{

		mensaje =("la nota es " +notaRandom+ " aprobado");
	}
}
	alert(mensaje)
}