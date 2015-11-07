jQuery(document).ready(function(){
	var row = '<div class="row"><ul><li></li><li></li><li></li><li></li></ul></div>';
	var square = '<div class="square"></div>';
	$('body').append('<div id="container"></div>');
	$('#container').append(row);
	$('#container').append(row);
	$('#container').append(row);
	$('#container').append(row);
	$('li').append(square);
});