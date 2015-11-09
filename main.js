var size = 4;

function newSize() {
	var size = prompt("How many squares per side?", "4");
	if (size != null) {
    	newGrid(size);	
	}
} 

function newGrid(size) {
	$('.square').remove();

	for (i = 0; i < size; i++) {
		var row = '<div>'

		for (j = 0; j < size; j++) {
			row +='<div class="square"></div>';
		}

		row += '</div>';

		$('#container').append(row);
	}
	var calcSize = 960 / size + "px"
	$('.square').css({"height": calcSize, "width": calcSize});
}

 $(document).ready(function(){
	newGrid(size);
	$('div').on('mouseenter', '.square', function(){
		$(this).addClass('highlight');
	});
	$('button')
});