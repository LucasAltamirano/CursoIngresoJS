/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{	
	var dividendo;
	var	divisor;
	var resto

	dividendo=parseInt(document.getElementById('txtIdNumeroDividendo').value);
	//numeroUno=parseInt(numeroUno)

	divisor=parseInt(document.getElementById('txtIdNumeroDivisor').value);
	//numeroDos=parseInt(numeroDos) EL PARSEINT LO ACHIQUE EN LA LINEA 14

    resto =dividendo % divisor
    console.log(+resto)

    alert(" El resto es " + resto)
}