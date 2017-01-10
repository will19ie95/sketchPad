var gridSize = 16;


$(document).ready(function() {
	create_Canvas();
	pen();
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
	$('#canvas').html('');
	create_Canvas();
	pen();
}

function pen() {

	$('.box').hover(function() {
		$(this).css('background-color', '#999');
	})

}

function crayon() {
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
  var rancomColor = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
  return rancomColor;
}

function outLine() {
	if($('.box').hasClass('outline')) {
		$('.box').removeClass('outline');
	} else {
		$('.box').addClass('outline');
	}
}