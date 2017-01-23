angular.module('product',[]).config(function ($stateProvider) { 
	$stateProvider.state('product',{
		parent:'home',
		url:'/product',
		templateUrl:'app/js/home/product/product-view.tpl',
		controller:'ProdCtrl'
	});
}).controller('ProdCtrl',function($scope,localStorageService,toastr,ProfileConstant){
	//RETRIEVING DATA FROM LOCAL STORAGE TO SCOPE
 	$scope.productList = JSON.parse(localStorage.getItem(ProfileConstant.PRODUCTS));

 	$scope.addToCart = function(product){
 		$scope.cartItems = JSON.parse(localStorage.getItem(ProfileConstant.CART_ITEMS));
 		if($scope.cartItems === null){
 			$scope.cartItems = [];
 		}
 		if(checkForDuplicate(product, $scope.cartItems)){
 			$scope.cartItems.push(product);
			localStorageService.set( 'cartItems', JSON.stringify($scope.cartItems) );
			toastr.success('Item added successfully'); 			
 		}else{
 			updateCount($scope.cartItems,product);
 			toastr.success('Item added successfully'); 			
 		}
 	};

 	//Check while adding to cart
 	function checkForDuplicate(product,cartItems){
 		console.log("Cart and product :",product,cartItems);
 		var existing = false;
 		var index = 0;
 		if(cartItems === null){ //For the case when the cart is empty
 			return true;
 		}
 		cartItems.forEach(function(item) {
			if(item.productId === product.productId){
 				existing = true;
 			}
		});
 		
 		if(existing){
 			// toastr.error('Item already added!'); 			
 			return false;
 		}
 		else{
 			return true;
 		}
 	}

 	function updateCount(cartItems,product){
 		cartItems.forEach(function(item) {
			if(item.productId === product.productId){
 				item.count = item.count + 1;
 			}
		});
		localStorageService.set( 'cartItems', JSON.stringify(cartItems) );
		console.log("Item list after update :",cartItems);
 	}
});
