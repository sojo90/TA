angular.module( 'app', ['ui.router','home','LocalStorageModule','ngAnimate','toastr','ProductList','ProfileConstant'] )
.config(function($urlRouterProvider,$locationProvider){
 $urlRouterProvider.otherwise('/product');
  $locationProvider.html5Mode(true);
}).run( function() {
	console.log('angular started');
} );