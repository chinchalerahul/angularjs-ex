var app = angular.module("myFirstApp",['ui.router', 'ngAnimate']);

app.config(function($stateProvider, $urlRouterProvider) {
	//The root state for this application
	$urlRouterProvider.when('', '/home');

	// For any unmatched url, redirect to /state1
	$urlRouterProvider.otherwise("/pageNotFound");
  
	//set up the states
    $stateProvider
	.state('home', {
		url: '/home',
		templateUrl:'app/templates/home.html',
		controller:'homeController'		
	})
	.state('about', {
		url: '/about',
		templateUrl:'app/templates/about.html',
		controller:'aboutController'		
	})
	.state('contact', {
		url:'/contact',		
		templateUrl:'app/templates/contact.html',
		controller:'contactController'
	})
	.state('login', {
		url:'/login',		
		templateUrl:'app/templates/login.html',
		controller:'loginController'
	})
	.state('pageNotFound', {
		url:'/pageNotFound',		
		templateUrl:'app/templates/pageNotFound.html',
	});	
});
 

