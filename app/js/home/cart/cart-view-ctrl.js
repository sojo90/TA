angular.module('cart',[]).config(function ($stateProvider) { 
	$stateProvider.state('cart',{
		parent:'home',
		url:'/cart',
		templateUrl:'app/js/home/cart/cart-view.tpl',
		controller:'CartCtrl'
	});
}).controller('CartCtrl',function($scope,localStorageService, ProfileConstant){
	$scope.itemList = JSON.parse(localStorage.getItem(ProfileConstant.CART_ITEMS));
});
