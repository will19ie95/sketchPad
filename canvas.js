var gridSize = 16;


$(document).ready(function() {
	create_Canvas();
})

function create_Canvas() {


	for (var i = 0; i < gridSize * gridSize; i++) {
		$('#canvas').append('<div class="box outline"></div>')
	}

	$('.box').css({
		'height' : $('#canvas').height() / gridSize,
		'width' : $('#canvas').width() / gridSize,
	});

}

function draw() {

	$('.box').hover(function() {
		$(this).css('background-color', '#888');
	})

}

function draw_color() {
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

function clear_canvas() {
	$('.box').css('background-color','white');
}

function getRandomColor () {
  var hex = Math.floor(Math.random() * 0xFFFFFF);
  return "#" + ("000000" + hex.toString(16)).substr(-6);
}

function outLine() {
	if($('.box').hasClass('outline')) {
		$('.box').removeClass('outline');
	} else {
		$('.box').addClass('outline');
	}
}