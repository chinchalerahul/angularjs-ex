var app = angular.module("myFirstApp",[]);

app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider
	.when('/home', {
		controller:'homeController',
		templateUrl:'app/templates/home.html'
	})
	.when('/about', {
		controller:'aboutController',
		templateUrl:'app/templates/about.html'
	})
	.when('/examples', {
		controller:'examplesController',
		templateUrl:'app/templates/examples.html'
	})
	.otherwise({
		redirectTo:'/home'
	});
}]);
