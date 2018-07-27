$(document).ready(function() {
	addFlexOrder(setRandomOrder($('#russian div')));
	addFlexOrder(setRandomOrder($('#english div')));
	$('#russian div').on('click', function() {
		$(this).toggleClass("selected");
		setTimeout(changeClass(), 1000);		
	});
	$('#english div').on('click', function() {
		$(this).toggleClass("selected");
		setTimeout(compareColors(), 1000);	

		var checkEnd = $('#english .unclickable');

		if (checkEnd.length == 11) {
			setTimeout(playAgain(), 2000);
		}	
	});
});


//случайным образом перемешиваем элементы
function setRandomOrder(array) {
	var currentIndex = array.length, temporaryValue, randomIndex;

	// While there remain elements to shuffle...
	while (0 !== currentIndex) {
		// Pick a remaining element...
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;
		// And swap it with the current element.
		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}
	return array;
}

//присваиваем flex-элементам css стиль 'order' 
function addFlexOrder(array) {
	for (var i = 0; i < array.length; i++) {
		array[i].style.order = i;
	}
}

//меняем активный и неактивный язык
function changeClass() {
	$("#russian, #english").toggleClass("noActivId");
}

//блокируем выбор и сравниваем цвета
function compareColors() {
	$("#russian, #english").toggleClass("unclickable");
	document.getElementById('russian').style.background = '#e5e5e5';
	var colorsArray = document.getElementsByClassName('selected');
	colorsArray = Array.prototype.slice.call(colorsArray); //коллекцию в массив
	setTimeout(function() {
		if (colorsArray[0].className == colorsArray[1].className) {
			for (var i = 0; i < 2; i++) {
				colorsArray[i].classList.remove('selected');
				colorsArray[i].classList.add('unclickable');
			}			
			document.getElementById('russian').removeAttribute("style");
			$("#russian, #english").toggleClass("noActivId");
		}
		else {			
			colorsArray[1].classList.remove('selected');
			document.getElementById('russian').style.background = '#cccccc';
		}
		$("#russian, #english").toggleClass("unclickable");
	}, 1000);
}

//функция "начать заново"
function playAgain() {
	document.getElementById('reload').style.display = 'block';

	$('#reload').on('click', function() {
		var clearMe = document.getElementsByClassName('unclickable');
		clearMe = Array.prototype.slice.call(clearMe); //коллекцию в массив
		for (var i = 0; i < clearMe.length; i++) {
			clearMe[i].classList.remove('unclickable');
		}
		addFlexOrder(setRandomOrder($('#russian div')));
		addFlexOrder(setRandomOrder($('#english div')));
		document.getElementById('reload').style.display = 'none';	
	});
}