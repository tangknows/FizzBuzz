$(document).ready( function() {

		
		$("#start").on("click", function() {
			
			for(var i = 1; i <=100; i++) {
				
				if (i % 3 === 0 && i % 5===0) 
				{
				$("ol").append("<li>fizzbuzz</li>")
				}
				else if ( i % 3 === 0)
				{
				$("ol").append("<li>fizz</li>")
				}
				else if (i % 5 ===0)
				{
				$("ol").append("<li>buzz</li>")
				}
				else {
				$("ol").last().append('<li>' + i +'</li>')
				}
			
			
			
			}
		
		});
});

