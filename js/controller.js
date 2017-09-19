angular.module('RouteControllers', [])

	.controller('HomeController', function($scope) {
	})

	.controller('MusicController', function($scope) {
		$scope.title = "Music Page"
	})

	.controller('AboutController', function($scope) {
	})

	.controller('ContactController', function($scope) {
		$scope.title = "Contact Page"
	})

	.controller('DatesController', function($scope) {
		$scope.title = "Dates Page"
	})

	.controller('PhotosController', function($scope) {
	});
