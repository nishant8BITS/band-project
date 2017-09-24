angular.module('RouteControllers', [])

	.controller('HomeController', function() {
	})

	.controller('MusicController', function() {
	})

	.controller('AboutController', function() {
	})

	.controller('ContactController', function($scope, $location) {

		$scope.formSubmit = function() {
			if($scope.contactForm.$valid) {
				alert("Your form has been sent successfully!");
				$location.path('/');
			}
		}		
	})

	.controller('DatesController', function($scope) {
		$scope.title = "Dates Page"
	})

	/*Work in progress. I want the photos to generate random borders and colours per refresh*/
	.controller('PhotosController', function($scope) {
		var photos = document.getElementsByTagName('img');
		for (i = 0; i < photos.length; i++) {
			photos[i].style.backgroundColor = "#a00";
		}
	});