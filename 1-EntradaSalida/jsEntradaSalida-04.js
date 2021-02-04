/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
		var nombre;
		var mensajeDeRespuesta

		nombre=prompt();

		mensajeDeRespuesta= "su nomnbre es : " +nombre;

		document.getElementById('txtIdNombre').value=mensajeDeRespuesta

 }

