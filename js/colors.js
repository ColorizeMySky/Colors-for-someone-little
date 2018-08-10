var colors = ['red', 'green', 'blue', 'yellow', 'skyblue']//, 'pink', 'purple', 'brown', 'black', 'white', 'grey', 'orange', 'burgundy']
var fullColors = ['red', 'green', 'blue', 'yellow', 'skyblue']//, 'pink', 'purple', 'brown', 'black', 'white', 'grey', 'orange', 'burgundy'];

function compareRandom(a, b) {
  return Math.random() - 0.5;
}

function step() {
	document.querySelector('.next').style.opacity = 0;

	if (colors.length == 0) {
		startAgain();
	}

	else {
		if (typeof document.querySelector('.current').classList[1] != 'undefined') {
			document.querySelector('.current').classList.remove(document.querySelector('.current').classList[1]);
		}
		
		document.querySelector('.message').innerHTML = '';

		var boxForColors = document.querySelectorAll('.color');

		for (var i = 0; i < boxForColors.length; i++) {
			boxForColors[i].style.pointerEvents = 'auto';
			if (typeof boxForColors[i].classList[1] != 'undefined') {
				boxForColors[i].classList.remove(boxForColors[i].classList[1]);
			}
		}

		colors.sort(compareRandom);
		var currentColor = colors.pop();

		document.querySelector('.current').classList.add(currentColor);

		var anotherColors = randomTwo(fullColors, currentColor);
		anotherColors.push(currentColor);
		anotherColors.sort(compareRandom);	

		for (var i = 0; i < boxForColors.length; i++) {
			boxForColors[i].innerHTML = anotherColors[i];
			boxForColors[i].onclick = function(){
				this.classList.add(this.innerHTML);
				if(this.classList.length >= 2) {
					compareColors(this, currentColor);
				}
			}
					
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

//compare colors
function compareColors(elem, current) {
	setTimeout(function() {
		var colors = document.querySelectorAll('.color');
		for (var i = 0; i < colors.length; i++) {
			colors[i].style.pointerEvents = 'none';
		}

		if (elem.innerHTML == current) {
			document.querySelector('.message').innerHTML = 'Yes! <br> It\'s right!';
			document.querySelector('.next').style.opacity = 1;
			document.querySelector('.next').style.pointerEvents = 'auto';
		}
		else {
			document.querySelector('.message').innerHTML = 'No! <br> Choose another.';

			for (var i = 0; i < colors.length; i++) {
			colors[i].style.pointerEvents = 'auto';
			}

			elem.classList.remove(elem.innerHTML);
			setTimeout(function() {
				document.querySelector('.message').innerHTML = '';
			}, 2000);
		}
		
	}, 1000);
}

//at the end of colors
function startAgain() {
	document.querySelector('.current').style.display = 'none';
	document.querySelector('.choose').style.display = 'none';
	document.querySelector('.message').innerHTML = 'Congratulations!<br>All colors are guessed.<br>Click for play again.';
	document.querySelector('.message').style.cursor = 'pointer';
	document.querySelector('.message').onclick = function() {
			location.reload();
		}
}

step();
document.querySelector('.next').addEventListener("click", step); 