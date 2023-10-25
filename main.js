var lienzo = new fabric.canvas('miLienzo')
const {fabric} = Require("./fabric");


block_y=1;
block_x=1;

block_image_width = 350;
block_image_height = 480;

var bloque_objeto_imagen= "";

// Completa la función nueva_imagen() para agregar una nueva imagen
function nueva_imagen(get_image)
{
	fabric.Image.fromURL(get_image,function(img) {
		bloque_objeto_imagen = img;
		bloque_objeto_imagen.scaleTOWidth(block_image_width);
		bloque_objeto_imagen.scaleTOHeight(block_image_height);
		bloque_objeto_imagen.set({top:block_y,left:block_x});
		lienzo.add(bloque_objeto_imagen);
	})






	

}

window.addEventListener("keydown", mi_TeclaPulsada);

function mi_TeclaPulsada(e)
{
teclaPresionada = e.keyCode;
console.log(teclaPresionada);
	// Usa el código de tecla apropiado para agregar la imagen roja
	if(teclaPresionada == '66' ) 
	{
		block_x = 1040;
		nueva_imagen('azul.jpg')
			console.log('B')
	


	}
	// Usa el código de tecla apropiado para agregar la imagen verde
	if(teclaPresionada == '82' )
	{
	block_x = 10;
	nueva_imagen('rojo.jpg')
		console.log('R')
	}
	// Usa el código de tecla apropiado para agregar la imagen amarilla
	if(teclaPresionada == '71' )
	{
			block_x = 310;
			nueva_imagen('verde.jpg')
				console.log('G')
		

	}
	// Usa el código de tecla apropiado para agregar la imagen rosa
	if(teclaPresionada == '89' )
	{
		block_x = 560;
			nueva_imagen('amarillo.jpg')
				console.log('Y')
			


	}
	// Usa el código de tecla apropiado para agregar la imagen azul
	if(teclaPresionada == '80' )
	{
		block_x = 880;
		nueva_imagen('rosa.jpg')
			console.log('P')
	


	}
	
}

