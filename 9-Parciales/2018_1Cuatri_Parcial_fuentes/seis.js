

	function mostrar()
{

	var horaIngresada;



	horaIngresada=prompt("ingrese una hora ")
					

	switch(horaIngresada)
	{

		case"6":
		case"7":
		case"8":
		case"9":
		case"10":	
		case"11":
			console.log("es de mañana ")
		break;		
		case"12" :
		case"13" :
		case"15" :
		case"16" :
		case"17" :
		case"18" :
			console.log("es de tarde ")
		break;

		case"19":
		case"20":
		case"21":
		case"22":
		case"23":
		case"24":
					console.log("es de noche")

					if (horaIngresada>22) 
					{
						console.log("a dormir")
					}else
					{

						console.log("todavia se ´puede")
					}
		break;


	}

	



}



