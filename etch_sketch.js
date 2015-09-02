
/* FUNCTION DEFINITIONS */

// Calculate div width based on user input i.e. how many units per width
function getDivWidth(unitsPerWidth) {
	var unitWidth = $('#container').width() / unitsPerWidth;
	return unitWidth;
};

// Construct grid of divs based on user input i.e. how many units per width
function layGrid(unitsPerWidth) {
	var unitSize = getDivWidth(unitsPerWidth);
	/* NEED TO COMMUNICATE THIS TO CSS */
	
	var cols = unitsPerWidth;
	var rows = $('#container').height() / unitSize;

	for (var i=0; i < rows; i++) {
		for(var j=0; j < cols; j++) {
			$('#container').append('<div class="unit"></div>');
		}	
	}
	
	$('.unit').width(unitSize+"px");
	$('.unit').height(unitSize+"px");
	$('.unit').css("box-sizing", "border-box");
	$('.unit').css("border", "1px solid black");
};

// Reset background color on all .unit divs
function clearGrid() {
	$('.unit').removeClass('touched');
};




/* MAIN */

$(document).ready(function(){

	layGrid(16);
	
	$('.unit').mouseenter(function(){
		$(this).addClass('touched');
	});
	
	// Activate Clear Button
	$('#clear-bttn').click(function(){
		clearGrid();
	});
	
});