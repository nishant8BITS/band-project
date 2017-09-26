angular.module('RouteControllers', [])

	.controller('HomeController', function() {
	})

	.controller('MusicController', function() {
	})

	.controller('AboutController', function($scope) {
		var petesBio = document.getElementById('petes-bio');
		
		$scope.toggleProfile = function(event){
			var bio = event.target.nextElementSibling;
			if (bio.style.display === 'none') {
				bio.style.display = 'block';
			} else {
				bio.style.display = 'none';
			}
		}
	})

	.controller('ContactController', function($scope, $location) {

		$scope.formSubmit = function() {
			if($scope.contactForm.$valid) {
				alert("Your form has been sent successfully!");
				$location.path('/');
			}
		}		
	})

	.controller('DatesController', function($scope, Dates) {
		$scope.shows = Dates.getDates;
	})
	
	/*Work in progress. I want the photos to generate random borders and colours per refresh*/
	.controller('PhotosController', function($scope) {
		var photos = document.getElementsByTagName('img');
		for (i = 0; i < photos.length; i++) {
			photos[i].style.backgroundColor = "#a00";
		}
	});

angular.module('UtilityControllers', [])
	.controller('footerController', function($scope){
		$scope.currentYear = (new Date()).getFullYear();
	});
