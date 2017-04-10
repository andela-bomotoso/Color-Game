var squareNum;
var colors;
var pickedColor;
var playAgain;

var squares =  document.querySelectorAll(".square");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var newColor = document.getElementById("reset");
var colorDisplay =  document.getElementById("colorDisplay");
var gameMode = document.querySelectorAll(".gameMode");

init();

newColor.addEventListener("click", function()	{
	if (playAgain)	
		newColor.textContent = "New Color";
	reset();
	for (var i = 0; i < squares.length; i++)	{
		squares[i].style.background = colors[i];
	}
});

for (var i = 0 ; i < gameMode.length; i++)	{
	gameMode[i].addEventListener("click",function()	{
	newColor.textContent = "New Color";
	messageDisplay.textContent = "";
		gameMode[0].classList.remove("selected");
		gameMode[1].classList.remove("selected");
		this.classList.add("selected");
		this.textContent === "Easy"?squareNum = 3: squareNum = 6;
		 reset();
		 displaySquares();
	});
}


for(var i = 0; i <squares.length; i++)	{
	squares[i].style.background  = colors[i];
	squares[i].addEventListener("click",function()	{
		var clickedColor =  this.style.background;
		if(clickedColor === pickedColor)	{
			messageDisplay.textContent = "Correct";	
			changeColors(clickedColor);
			h1.style.background = pickedColor;
			newColor.textContent = "Play Again";
			playAgain = true;
		}
		else{
			this.style.background = "#232323";
			messageDisplay.textContent = "Try Again";
		}
	});
}

function init()	{
	squareNum = 6;
	colors = generateRandomColors(squareNum);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	var playAgain = false;
}

function displaySquares()	{
	for (var i = 0; i < squares.length; i++)	{
		if(colors[i])	{
			squares[i].style.background = colors[i];
			squares[i].style.display = "block";
		}	else{
			 squares[i].style.display = "none";
		}
	}
}

function reset()	{
	h1.style.background = "steelblue";
	colors = generateRandomColors(squareNum);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
}
function changeColors(color)	{
	for (var i = 0; i < squares.length; i++)	{
		squares[i].style.background = color;
	}
}

function pickColor()	{
	var random =  Math.floor((Math.random() *  colors.length));
	return colors[random];
}

function generateRandomColors(num)	{
	var arr = [];
	for (var i = 0; i < num; i++)	{
		arr.push(generateColor());
	}
	return arr;
}

function generateColor()	{
	var r  = Math.floor(Math.random() *  256);
	var g =  Math.floor(Math.random() *  256); 
	var b =  Math.floor(Math.random() *  256);
	return "rgb("+ r + ", " + g + ", " + b + ")";
}

