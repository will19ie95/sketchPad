$(document).ready(function() {
	create_Canvas();
	create_Canvas_Boxes();
})

function create_Canvas() {

	var gridSize = 16;

	$('#canvas').css('height', '500px').css('width', '500px').css('margin', 'auto');

	for (var i = 0; i < gridSize * gridSize; i++) {
		$('#canvas').append('<div class="box"></div>')
	}

	
}

function create_Canvas_Boxes() {

	var gridSize = 16;

	$('.box').css({
		'height' : $('#canvas').height() / gridSize,
		'width' : $('#canvas').width() / gridSize,
		// 'height' : '31.25px',
		// 'width' : '31.25px',
		'border' : "1px dotted grey"
	});
}

function draw() {

	var randomColor = getRandomColor();

	$('.box').hover(function() {
		$(this).css('background-color', randomColor);
		randomColor = getRandomColor();
	})

}

function erase() {

	$('.box').hover(function() {
		$(this).css('background-color','white');
	})

}

function getRandomColor () {
  var hex = Math.floor(Math.random() * 0xFFFFFF);
  return "#" + ("000000" + hex.toString(16)).substr(-6);
}