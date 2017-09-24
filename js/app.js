angular.module('BandApp', ['ngRoute', 'RouteControllers']);

angular.module('BandApp').config(function($locationProvider, $routeProvider) {
	$locationProvider.html5Mode(true);
	
	$routeProvider.when('/', {
		templateUrl: 'templates/home.html',
		controller: 'HomeController'
	})
	
	.when('/music', {
		templateUrl: 'templates/music.html',
		controller: 'MusicController'
	})

	.when('/about', {
		templateUrl: 'templates/about.html',
		controller: 'AboutController'
	})

	.when('/contact', {
		templateUrl: 'templates/contact.html',
		controller: 'ContactController'
	})

	.when('/dates', {
		templateUrl: 'templates/dates.html',
		controller: 'DatesController'
	})

	.when('/photos', {
		templateUrl: 'templates/photos.html',
		controller: 'PhotosController'
	});
});
