$(document).ready(function() {

	for (var i = 1; i < 101; i++) {
   			
   			if (i % 3 !== 0 && i % 5 !== 0) {
				document.write (i);
   			}

   			else if (i % 3 === 0 && i % 5 === 0) {
   				document.write ("fizz buzz");
   			}

   			else if (i % 5 === 0) {
   				document.write ("buzz");
   			}

   			else {
  				document.write ("fizz");
			}

		document.write ("<br>");
   	
	}

});