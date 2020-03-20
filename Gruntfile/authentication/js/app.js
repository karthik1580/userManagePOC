'use strict';

//declar module
angular.module('Authentication',[]);
angular.module('home',[]);

angular.module('httpAut',[ 'Authentication', 'home', 'ngRoute', 'ngCookies' ])

.config(['$routeProvider', function ($routeProvider) {
	$routeProvider
		.when('/login', {
			templateUrl : 'view/login/login.html',
			controller: 'loginCtrl'
		})
		.when('home', {
			templateUrl : 'view/home.html',
			//controller: 'homeCtrl'
		})
		.otherwise({ redirectTo: '/login'});		
}])


