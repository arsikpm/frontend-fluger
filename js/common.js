// range slider
$( function() {
  $( "#slider_range" ).slider({
	range: true,
	min: 0,
	max: 500,
	values: [ 75, 300 ],
	slide: function( event, ui ) {
	  $( "#amount-1" ).val(ui.values[ 0 ]);
	},
	slide: function( event, ui ) {
	  $( "#amount-2" ).val(ui.values[ 1 ]);
	}
  });
  $( "#amount" ).val( "$" + $( "#slider_range" ).slider( "values", 1 ) +
	" - $" + $( "#slider_range" ).slider( "values", 1 ) );
} );
