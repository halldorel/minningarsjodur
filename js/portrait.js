// JavaScript self portrait

var canvas = document.getElementById("portrait");
var ctx = canvas.getContext("2d");

var width = 120;
var height = 171;

var size = 2;
var color = randomColor(80, 180);

for(var i = 0; i < width; ++i)
{
	for(var j = 0; j < height; ++j)
	{
		var index = (j*width) + i;
		
		if(image[index] === 0)
		{
			ctx.fillStyle = "rgba(255, 255, 255, 0)";
		}
		else
		{
			ctx.fillStyle = "rgba(0, 0, 0, 0.6)";
		}
		
		ctx.fillRect(i * size, j * size, size, size);
	}
}

function randomColor(from, to)
{
	var colString = "";

	if(from > to)
	{
		var temp = from;
		from = to;
		to = temp;
	}

	for(var j = 0; j < 3; j++)
	{
		// Random value in range
		colString += Math.floor(from + (Math.random() * (to-from)));
		if (j !== 2) colString += ", ";
	}
	
	return colString;
}