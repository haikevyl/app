$(document).ready(function() {
	const URL_DATA = 'https://raw.githubusercontent.com/buivannguyen/girl-puzzle-android-app/master/sample_data.json';
	var app_data_json = "";

	function check_app_setting(key)
	{
		if (localStorage.getItem(key) === null) {
			return false;
		}
		return true;
	}

	function show_screen(element){
		$(element).fadeIn("slow");
	}

	function hidden_screen(element){
		$(element).fadeOut("slow");
	}

	if (check_app_setting("app_data") === false) {
		show_screen("#start-app");
	}else{
		app_data_json = JSON.parse(localStorage.getItem('app_data'));
	}


	$('#get-start-app').click(function(event) {
		show_screen("#hidden");
		$.getJSON( URL_DATA )
		.done(function( data ) {
		    let dataText = JSON.stringify( data );
		    localStorage.setItem("app_data", dataText);
		    app_data_json = JSON.parse(localStorage.getItem('app_data'));
		    hidden_screen("#hidden");
		    hidden_screen("#start-app");
		  })
		.fail(function() {
		    console.log( "error" );
		})
	});

	console.log( app_data_json);
});