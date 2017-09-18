angular.module('RouteControllers', [])

	.controller('HomeController', function($scope) {
		$scope.title = "Home Page"
	})

	.controller('MusicController', function($scope) {
		$scope.title = "Music Page"
	})

	.controller('AboutController', function($scope) {
		$scope.title = "About Page"
	})

	.controller('ContactController', function($scope) {
		$scope.title = "Contact Page"
	})

	.controller('DatesController', function($scope) {
		$scope.title = "Dates Page"
	})

	.controller('PhotosController', function($scope) {
		$scope.title = "Photos"
		
		
		
	});
