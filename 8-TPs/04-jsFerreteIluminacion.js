

 	// ALTAMIRANO LUCAS JAVIER | TP ELECTRO ILUMINACION

/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */

	function CalcularPrecio () 

///Ferrete iluminancion Con if (cantidad) y switch (marca)

{
     var cantidadLamparitas; 
     var marca;  
     var descuento; 
     var precioFinal;  
     var ingresosBrutos; 

     cantidadLamparitas = parseInt(document.getElementById("txtIdCantidad").value); 
     precioFinal = cantidadLamparitas*35; 
     
     marca = document.getElementById("Marca").value; 
     descuento=0; 
     
     
     if(cantidadLamparitas>5)
     {
       descuento=50;
     }else
     { 
        if(cantidadLamparitas==5)
        {
          switch(marca)
          {
             case"ArgentinaLuz":
                  descuento=40;
                  break; 
             default: 
                  descuento=30;
                  break; 
          }
        }else
         { 
            if(cantidadLamparitas==4)
            {
              switch(marca) 
              {
                case"ArgentinaLuz":
                case"FelipeLamparas":
                     descuento=25; 
                     break;
                default: 
                     descuento=20;
                     break; 
              }
            }else
            {
               if(cantidadLamparitas==3)
               {
                 switch(marca) 
                 {
                  case"ArgentinaLuz":
                      descuento=15;
                      break;  
                  case"FelipeLamparas":
                      descuento=10;
                      break; 
                  default: 
                       descuento=5;
                       break; 
                 }
                }
             }
          }
      }
     
     precioFinal = precioFinal - (precioFinal*descuento/100);
     document.getElementById("txtIdprecioDescuento").value = precioFinal;
   
    }//FINAL DE FUNCION
      
     //Ferrete iluminancion Con switch(cantidad) y if (marca)
     /*switch(cantidadLamparitas)
     { 
      case"5": 
        if(marca=="ArgentinaLuz")
        {
          descuento = 40; 
        }
        else 
        {
          descuento = 30;
        }break;     
      case"4": 
        if(marca=="ArgentinaLuz" || marca=="FelipeLamparas")
        {
          descuento = 25; 
        }
        else
        {
          descuento = 20;
        }break;
      case "3": 
         if(marca=="ArgentinaLuz")
         { 
           descuento = 15; 
         } 
         else if(marca=="FelipeLamparas")
         {
           descuento = 10; 
         } 
          else
          {
            descuento = 5;
          }break; 
        case "1": 
        case "2":
            descuento = 0; 
            break;
        default: 
        descuento = 50; 
        break;     
     }*/
     
     ////Ferrete iluminancion solo SWITCH (la parte des descuento)

     /*switch(cantidadLamparitas)
     { 
       case"5": 
        switch(marca)
        {
          case"ArgentinaLuz": 
               descuento = 40; 
               break; 
          default: 
               descuento = 30; 
               break; 
        }break; 
        case"4": 
         switch(marca)
         {
           case"ArgentinaLuz": 
           case"FelipeLamparas": 
               descuento = 25; 
               break;
           default: 
               descuento = 20; 
               break; 
         }break; 
        case "3": 
         switch(marca)
         {
           case"ArgentinaLuz": 
               descuento = 15; 
               break; 
           case"FelipeLamparas": 
               descuento = 10; 
               break; 
           default: 
               descuento = 5;
               break;  
         }break; 
        case "1": 
        case "2":
            descuento = 0; 
            break
        default: 
        descuento = 50; 
        break;     
     }
     precioFinal = precioFinal - (precioFinal*descuento/100);
     document.getElementById("txtIdprecioDescuento").value = precioFinal;*/


/*
	cantLamp=document.getElementById('txtIdCantidad').value;

	precioFinal=cantLamp* 35  // $35 ES EL PRECIO FINAL DE CADA LAMPARITA ,ENTONCES EL PRECIO FINAL ESTA COMPUESTO POR CANTIDAD * 35 VALOR UNIARIO

	marcalamp=document.getElementById("Marca").value;


	

		if(cantLamp>5) // if-else condicionales se utilizan para realizar acciones en diferentes condiciones.
		{						// si cumple la condicion en if xxx accion ,sino else y y realiza xxx accion 
			descuento=50
		}
*/
	/*	// todo el codigo con IF
     if(cantLamp>5)
     {
       descuento=50;
     }else
     { 
        if(cantLamp==5)
        {
          if(marcalamp=="ArgentinaLuz")
          {
              descuento=40; 
          }
          else
          {
              descuento=30;
          }
        }else
         { 
            if(cantLamp==4)
            {
              if(marcalamp=="ArgentinaLuz" || marca=="FelipeLamparas")
              {
                  descuento=25; 
              }
              else
              {
                  descuento=20; 
              }
            }else
            {
               if(cantLamp==3)
               {
                 if(marcalamp=="ArgentinaLuz")
                 {
                     descuento=15; 
                 }
                 if(marcalamp=="FelipeLamparas")
                 {
                     descuento=10; 
                 }else
                 {
                     descuento=5; 
                 }
               }
            }
         }
     }
     
     precioFinal = precioFinal - (precioFinal*descuento/100);
      
     if(precioFinal>120)
     {
        ingresosBrutos = precioFinal + (precioFinal*10/100);
        document.getElementById("txtIdprecioDescuento").value = ingresosBrutos
        alert("Usted pago "+precioFinal*10/100+" de IIBB"); 
      }
     document.getElementById("txtIdprecioDescuento").value = precioFinal;
 
}   */