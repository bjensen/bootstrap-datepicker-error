$(document).ready(function() {
	$(document).on("focus", ".datepicker", function(e) {
		return $(this).datepicker({
		"format": "yyyy-mm-dd",
		"weekStart": 1,
		"autoclose": true
		}); 
	});
	$(document).on("click", ".ajax_link", function(e) {
		e.preventDefault();
		$.ajax({
			url: "ajax_response.js",
			dataType: "script",
		});
	})
});
