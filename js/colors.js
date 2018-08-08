var colors = ['red', 'green', 'blue', 'yellow', 'skyblue', 'pink', 'purple', 'brown', 'black', 'white', 'grey', 'orange']
var fullColors = ['red', 'green', 'blue', 'yellow', 'skyblue', 'pink', 'purple', 'brown', 'black', 'white', 'grey', 'orange'];

function compareRandom(a, b) {
  return Math.random() - 0.5;
}

function step() {
	colors.sort(compareRandom);
	var currentColor = colors.pop();

	document.querySelector('.current').classList.add(currentColor);

	var anotherColors = randomTwo(fullColors, currentColor);
	anotherColors.push(currentColor);
	anotherColors.sort(compareRandom);
	var boxForColors = document.querySelectorAll(".color");

	for (var i = 0; i < 3; i++) {
		boxForColors[i].innerHTML = anotherColors[i];
		boxForColors[i].onclick = function(){
			this.classList.add(this.innerHTML);
		}
	}


}

//choose two random colors from array
function randomTwo(arr, color) {
	do {
		var firstColor = arr[Math.floor(Math.random() * arr.length)];
	}
	while (firstColor == color)
	
	do {
		var secondColor = arr[Math.floor(Math.random() * arr.length)];
	}
	while ( secondColor == firstColor || secondColor == color);

	var randomTwo = [firstColor, secondColor];
	return randomTwo;
}

step();