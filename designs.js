// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
const id = document.getElementById('pixelCanvas');
const whiteColor = '#ffffff';
let h;
let w;
let color;

function makeGrid(x,y) {
	let fragment = document.createDocumentFragment();
	for (var i=0; i<x; i++){
		var tr = document.createElement("tr");
		fragment.appendChild(tr);
		for (var j=0; j<y; j++){
			var td = document.createElement("td");
			tr.appendChild(td);
		}
	}
	return fragment;
}

$("#pixelCanvas").on("click", "td", function() {
	let text = $(this).text();
    //alert( "Handler for .click() called." + text);
    let currentColor = $(this).css("background-color")
    currentColor = rgb2hex(currentColor);
    if (currentColor == color){
    	$(event.target).css("background-color",whiteColor);
    }
    else{
    	$(event.target).css("background-color",color);
    }
});

$( "#colorPicker").change(function() {
	color = $(this).val();
    //alert( "color: " + color);
});

//clear button	
$( "#clear").click(function(){
	$("td").css("background-color", whiteColor);
});

function rgb2hex(rgb){
 rgb = rgb.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);
 return (rgb && rgb.length === 4) ? "#" +
  ("0" + parseInt(rgb[1],10).toString(16)).slice(-2) +
  ("0" + parseInt(rgb[2],10).toString(16)).slice(-2) +
  ("0" + parseInt(rgb[3],10).toString(16)).slice(-2) : '';
};

$(document).ready( function() {
    console.log( "ready!" );
    $("#sizePicker").submit(function(event) {
    	let t0 = performance.now()
	    $(id).empty();
	    h = $("#inputHeight").val();
	    w = $("#inputWeight").val();
	    let grid = makeGrid(h,w);
	    id.appendChild(grid);
	    color = $("#colorPicker").val(); //default color
		event.preventDefault();
		let t1 = performance.now()
		console.log('Exec time (ms): ', t1 - t0)
	});
});
