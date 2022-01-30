$(document).ready(function(){
	$(document).on('submit', '#signupForm', function(e){
		e.preventDefault();

		var name = $('input[name="name"]').val();
		var email = $('input[name="email"]').val();
		var password = $('input[name="password"]').val();

		var url = '/signup?name='+name+'&email='+email+'&password='+password;
		var req = new XMLHttpRequest();
		req.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {
				if (req.responseText == 'true'){
					alert('compte créé avec succès!');
					$('input[name="email"]').val('');
					$('input[name="name"]').val('');
					$('input[name="password"]').val('');
				}   
		    }
		  };
		  req.open("GET", url, true);
		  req.send();
	})

	$(document).on('blur', 'input[name="email"]', function(){
		var email = $('input[name="email"]').val();
		url = '/checkemail?email='+email;
		var req = new XMLHttpRequest();
		req.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {
				if (req.responseText == 'true'){
					//alert('Impossible de créer un compte avec cette adresse mail');
					$('input[type="submit"]').attr('disabled', 'true');					
				} else{
					//alert('Vous pouvez créer un compte avec cette adresse');
					$('input[type="submit"]').removeAttr('disabled');	
				}  
		    }
		  };
		  req.open("GET", url, true);
		  req.send();
;	})

	})