angular.module('home',['cart','product']).config(function ($stateProvider) { 
	$stateProvider.state('home',{
		abstract : true,
		templateUrl:'app/js/home/home.tpl',
		controller:'HomeCtrl'
	});
}).controller('HomeCtrl',function($scope, localStorageService, ProductList){
 	
 	//SETTING DATA INTO LOCAL STORAGE
 	var products = ProductList;
 	localStorageService.set( 'products', JSON.stringify(products) );
});






