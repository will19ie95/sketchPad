var gridSize = 16;


$(document).ready(function() {
	create_Canvas();
	draw();
})

function create_Canvas() {


	for (var i = 0; i < gridSize * gridSize; i++) {
		$('#canvas').append('<div class="box outline"></div>')
	}

	$('.box').css({
		'height' : $('#canvas').height() / gridSize,
		'width' : $('#canvas').width() / gridSize,
	});

	$('#currentSetting').replaceWith('<p id="currentSetting">Current Setting: ' + gridSize + "<p>");

}

function recreate_canvas() {
	gridSize = $('#grid_Modal #new_gridSize').val().trim();
	create_Canvas();
	draw();
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