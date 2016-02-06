$(document).ready(function() {
	drawGrid(30);
	//gridListen();
	gridRandom();

	$('button').on('click', function() {
		var newSides = prompt("How many squares to a side?");
		$('.square').remove();
		$('br').remove();
		drawGrid(newSides);
		//gridListen();
		gridRandom();
	});
});

function drawGrid(side) {
	var col = 1;
	var row = 1;
	var size = 960 / side - 1;

	for (row; row <= side; row++) {
		//$('#container').append($('<div class="row">'));
		for (col; col <= side; col++) {
			$('#container').append($('<div class="square"></div>'));
		}
		col = 1;
		$('#container').append($('<br>'));
		//$('#container').append($('</div>'));
	};
	$('.square').css({'height': size+'px','width': size+'px'});
};

/*function gridListen() {
	$('.square').on('mouseenter', function() {
		$(this).addClass('hovered');
	});
};*/

function gridRandom() {
	$('.square').on('mouseenter', function() {
		$(this).css('background-color', 'rgb('+randomInt()+','+randomInt()+','+randomInt()+')');
	});
};

function randomInt() {
	return Math.round(Math.random() * 255);
};