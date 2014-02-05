require(['scripts/jquery-1.11.0.min.js', 'scripts/underscore-min.js'], function() { 
	
	(function($) { 
		

		$(document).ready(function() { 
			console.log('------------ index.html dom ready -----------');

			// main application object
			var mainApp = new ClientAppView();
			

		});

	/*
		function interactiveGoogleSignIn(callback) {
			chrome.identity.getAuthToken({interactive:true}, function(token) {
				
				// do stuff with token
				
				if(_.isFunction(callback)) {
					callback(token);
				}
			});
		}

		function silentGoogleSignIn(callback) { 
			chrome.identity.getAuthToken({interactive:false}, function(token) {
				
				// do stuff with token 


				if(_.isFunction(callback)) {
					callback(token);
				}
			});
		}
	*/

	})(jQuery);



})
