
var canvas = new fabric.Canvas('myCanvas');
 block_y=1;
 block_x=1;

block_image_width = 350;
block_image_height = 430;

var block_image_object= "";

function new_image(get_image)
{
	fabric.Image.fromURL(get_image, function(Img) {
	block_image_object = Img;

	block_image_object.scaleToWidth(block_image_width);
	block_image_object.scaleToHeight(block_image_height);
	block_image_object.set({
	top:block_y,
	left:block_x
	});
	canvas.add(block_image_object);
	});
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);

	if(keyPressed == '82')
	{
		block_x = 100;
		new_image('rr1.png');
		console.log("r");
	}
	if(keyPressed == '71')
	{
		block_x = 100;
		new_image('https://i.pinimg.com/originals/8a/38/7b/8a387b4505e849dcd9b2270cff2820c3.gif');
		console.log("g");
	}
	
	if(keyPressed == '89')
	{
		block_x = 100;
		new_image('https://i.pinimg.com/originals/b1/6a/8d/b16a8ddf49dcf4e2f40166ece3da2648.gif');
		console.log("y");
	}
	if(keyPressed == '80')
	{
		block_x = 100;
		new_image('https://i.pinimg.com/originals/07/e4/85/07e485440b44864d4202e8c7b9a28597.gif');
		console.log("p");
	}
	if(keyPressed == '66')
	{
		block_x = 100;
	new_image('https://www.pngfind.com/pngs/m/263-2638009_blue-power-ranger-png-blue-power-ranger-cartoon.png');
	console.log("b");
	}
	
}

